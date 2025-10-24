import express, {} from 'express';
import { PrismaClient } from '@prisma/client';
import { Protected } from '../middlewares/auth.middleware.js';
import { RequireEditor } from '../middlewares/auth.middleware.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { sendEditorNotificationEmail } from '../services/email.service.js';
const uploadDir = path.join(process.cwd(), 'uploads', 'articles');
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });
const prisma = new PrismaClient();
const router = express.Router();
// Volumes
router.post('/volumes', Protected, RequireEditor, async (req, res) => {
    const { number } = req.body;
    try {
        const volume = await prisma.volume.create({ data: { number } });
        res.status(201).json({ message: 'Created', data: volume });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.post('/volumes/:volumeId/issues', Protected, RequireEditor, async (req, res) => {
    const { volumeId } = req.params;
    const { number, month, year } = req.body;
    try {
        const issue = await prisma.issue.create({ data: { number, month, year, volumeId } });
        res.status(201).json({ message: 'Created', data: issue });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Submission: create Article in SUBMITTED state
router.post('/articles', Protected, upload.single('pdf'), async (req, res) => {
    const { title, articleType, keywords, abstract, conflictOfInterest, fundingInfo, dataAvailability, authors } = req.body;
    try {
        if (!title || !articleType || !abstract) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        // compute pages if a PDF was uploaded (best-effort heuristic)
        let pdfPublicPath = null;
        let totalPages = null;
        if (req.file?.path) {
            pdfPublicPath = `/api/content/public/articles/pdf/${path.basename(req.file.path)}`;
            try {
                const buffer = fs.readFileSync(req.file.path);
                const text = buffer.toString('latin1');
                const matches = text.match(/\/Type\s*\/Page\b/g);
                if (matches && matches.length > 0) {
                    totalPages = matches.length;
                }
            }
            catch (_) {
                // ignore page count errors, leave null
            }
        }
        const article = await prisma.article.create({
            data: {
                title,
                articleType,
                keywords,
                abstract,
                conflictOfInterest,
                fundingInfo,
                dataAvailability,
                authorsJson: typeof authors === 'string' ? JSON.parse(authors) : authors,
                pdfPath: pdfPublicPath,
                totalPages: totalPages ?? null,
                status: 'SUBMITTED',
            },
        });
        // Send email notification to editors
        try {
            await sendEditorNotificationEmail(article);
            console.log('Editor notification email sent successfully');
        }
        catch (emailError) {
            console.error('Failed to send editor notification email:', emailError);
            // Don't fail the submission if email fails
        }
        res.status(201).json({ message: 'Submitted', data: article });
    }
    catch (e) {
        console.error('Submit article error:', e);
        res.status(400).json({ message: e?.message || 'Submission failed' });
    }
});
// Editor: publish Article by assigning issue
router.post('/articles/:articleId/publish', Protected, RequireEditor, async (req, res) => {
    const { articleId } = req.params;
    const { issueId } = req.body;
    try {
        const updated = await prisma.article.update({
            where: { id: articleId },
            data: { issueId, status: 'PUBLISHED' },
        });
        res.status(200).json({ message: 'Published', data: updated });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Editor: create and publish article directly
router.post('/articles/create-publish', Protected, RequireEditor, upload.single('file'), async (req, res) => {
    const { title, abstract, keywords, pages, doi, issueId, authors } = req.body;
    try {
        if (!title || !abstract || !issueId) {
            return res.status(400).json({ message: 'Missing required fields: title, abstract, issueId' });
        }
        // Parse authors if it's a string
        let authorsData;
        try {
            authorsData = typeof authors === 'string' ? JSON.parse(authors) : authors;
        }
        catch (e) {
            return res.status(400).json({ message: 'Invalid authors format' });
        }
        if (!authorsData || !Array.isArray(authorsData) || authorsData.length === 0) {
            return res.status(400).json({ message: 'At least one author is required' });
        }
        // Validate authors have required fields
        for (const author of authorsData) {
            if (!author.name || !author.email) {
                return res.status(400).json({ message: 'All authors must have name and email' });
            }
        }
        // Handle file upload
        let pdfPublicPath = null;
        let totalPages = null;
        if (req.file?.path) {
            pdfPublicPath = `/api/content/public/articles/pdf/${path.basename(req.file.path)}`;
            try {
                const buffer = fs.readFileSync(req.file.path);
                const text = buffer.toString('latin1');
                const matches = text.match(/\/Type\s*\/Page\b/g);
                if (matches && matches.length > 0) {
                    totalPages = matches.length;
                }
            }
            catch (_) {
                // ignore page count errors, leave null
            }
        }
        // Use pages from form if provided, otherwise use calculated pages
        const finalPages = pages ? parseInt(pages) : totalPages;
        const article = await prisma.article.create({
            data: {
                title,
                abstract,
                keywords: keywords || null,
                doi: doi || null,
                totalPages: finalPages,
                authorsJson: authorsData,
                pdfPath: pdfPublicPath,
                issueId,
                status: 'PUBLISHED',
                articleType: 'Research Article', // Default type
                publishedAt: new Date(),
            },
        });
        res.status(201).json({ message: 'Article created and published', data: article });
    }
    catch (e) {
        console.error('Create and publish article error:', e);
        res.status(400).json({ message: e?.message || 'Failed to create and publish article' });
    }
});
// Fetch for admin panel
router.get('/volumes', Protected, RequireEditor, async (_req, res) => {
    const volumes = await prisma.volume.findMany({ include: { issues: true } });
    res.json({ data: volumes });
});
// Public fetch volumes with issues (no articles) for site display
router.get('/public/volumes', async (_req, res) => {
    const volumes = await prisma.volume.findMany({
        include: { issues: true },
        orderBy: { number: 'desc' },
    });
    res.json({ data: volumes });
});
// Public: issue with its published articles
router.get('/public/issue/:issueId', async (req, res) => {
    const { issueId } = req.params;
    const issue = await prisma.issue.findUnique({
        where: { id: issueId },
        include: { volume: true, articles: { where: { status: 'PUBLISHED' } } },
    });
    if (!issue)
        return res.status(404).json({ message: 'Issue not found' });
    res.json({ data: issue });
});
// Public: article details and increment views
router.get('/public/article/:articleId', async (req, res) => {
    const { articleId } = req.params;
    const article = await prisma.article.update({
        where: { id: articleId },
        data: { views: { increment: 1 } },
    });
    res.json({ data: article });
});
// Public: serve stored PDFs
// Now gated through approval; use /download/:articleId instead
router.get('/public/articles/pdf/:file', async (_req, res) => {
    return res.status(403).json({ message: 'Direct download disabled' });
});
// Request PDF access
router.post('/articles/:articleId/request-download', Protected, async (req, res) => {
    const { articleId } = req.params;
    const userId = req.user.id;
    try {
        const existing = await prisma.downloadRequest.findFirst({ where: { articleId, userId, status: { in: ['PENDING', 'APPROVED'] } } });
        if (existing)
            return res.json({ message: 'Already requested', data: existing });
        const created = await prisma.downloadRequest.create({ data: { articleId, userId } });
        res.status(201).json({ message: 'Request created', data: created });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Editor: approve/deny
router.post('/download-requests/:id/approve', Protected, RequireEditor, async (req, res) => {
    const updated = await prisma.downloadRequest.update({ where: { id: req.params.id }, data: { status: 'APPROVED' } });
    res.json({ data: updated });
});
router.post('/download-requests/:id/deny', Protected, RequireEditor, async (req, res) => {
    const updated = await prisma.downloadRequest.update({ where: { id: req.params.id }, data: { status: 'DENIED' } });
    res.json({ data: updated });
});
router.get('/download-requests', Protected, RequireEditor, async (_req, res) => {
    const list = await prisma.downloadRequest.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            article: { include: { issue: { include: { volume: true } } } },
            user: true,
        },
    });
    res.json({ data: list });
});
// Approved download endpoint
router.get('/articles/:articleId/download', Protected, async (req, res) => {
    const { articleId } = req.params;
    const userId = req.user.id;
    const article = await prisma.article.findUnique({ where: { id: articleId } });
    if (!article || !article.pdfPath)
        return res.status(404).json({ message: 'Not found' });
    const approved = await prisma.downloadRequest.findFirst({ where: { articleId, userId, status: 'APPROVED' } });
    if (!approved)
        return res.status(403).json({ message: 'Not approved' });
    // pdfPath stores api url ending with filename
    const file = article.pdfPath.split('/').pop();
    const filePath = path.join(uploadDir, file);
    if (!fs.existsSync(filePath))
        return res.status(404).end();
    res.setHeader('Content-Type', 'application/pdf');
    res.download(filePath);
});
router.get('/articles', Protected, RequireEditor, async (_req, res) => {
    const articles = await prisma.article.findMany({ where: { status: 'SUBMITTED' } });
    res.json({ data: articles });
});
// Editor: get published articles
router.get('/articles/published', Protected, RequireEditor, async (_req, res) => {
    const articles = await prisma.article.findMany({
        where: { status: 'PUBLISHED' },
        include: { issue: { include: { volume: true } } }
    });
    res.json({ data: articles });
});
export default router;
//# sourceMappingURL=content.routes.js.map