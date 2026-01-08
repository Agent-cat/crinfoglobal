import express, {} from 'express';
import prisma from '../utils/prisma.js';
import { Protected } from '../middlewares/auth.middleware.js';
import { RequireEditor } from '../middlewares/auth.middleware.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { queueEditorNotification, queueUserConfirmation } from '../services/emailQueue.service.js';
import { PDFParse } from 'pdf-parse';
import { sanitizeArticleInput, sanitizeText, sanitizeEmail } from '../utils/sanitize.js';
const uploadDir = path.join(process.cwd(), 'uploads', 'articles');
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
// Allow up to 15MB file uploads (15 * 1024 * 1024 bytes)
const upload = multer({
    storage,
    limits: {
        fileSize: 15 * 1024 * 1024 // 15MB
    }
});
const router = express.Router();
const getDoiFilename = (doi) => {
    return `${doi.replace(/\//g, '_')}.pdf`;
};
// Volumes
router.post('/volumes', Protected, RequireEditor, async (req, res) => {
    const { number } = req.body;
    try {
        const volume = await prisma.volume.create({
            data: { number: typeof number === 'string' ? parseInt(number, 10) : number }
        });
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
        const issue = await prisma.issue.create({
            data: {
                number: typeof number === 'string' ? parseInt(number, 10) : number,
                month,
                year: typeof year === 'string' ? parseInt(year, 10) : year,
                volumeId
            }
        });
        res.status(201).json({ message: 'Created', data: issue });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Update volume
router.put('/volumes/:volumeId', Protected, RequireEditor, async (req, res) => {
    const { volumeId } = req.params;
    const { number } = req.body;
    try {
        const volume = await prisma.volume.update({
            where: { id: volumeId },
            data: { number: typeof number === 'string' ? parseInt(number, 10) : number },
        });
        res.status(200).json({ message: 'Updated', data: volume });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Delete volume
router.delete('/volumes/:volumeId', Protected, RequireEditor, async (req, res) => {
    const { volumeId } = req.params;
    try {
        await prisma.$transaction(async (tx) => {
            // Find all issues for this volume
            const issues = await tx.issue.findMany({ where: { volumeId } });
            const issueIds = issues.map(i => i.id);
            // Disconnect all articles from these issues
            await tx.article.updateMany({
                where: { issueId: { in: issueIds } },
                data: { issueId: null }
            });
            // Delete the issues
            await tx.issue.deleteMany({ where: { volumeId } });
            // Delete the volume
            await tx.volume.delete({ where: { id: volumeId } });
        });
        res.status(200).json({ message: 'Deleted' });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Update issue
router.put('/issues/:issueId', Protected, RequireEditor, async (req, res) => {
    const { issueId } = req.params;
    const { number, month, year } = req.body;
    try {
        const issue = await prisma.issue.update({
            where: { id: issueId },
            data: {
                number: typeof number === 'string' ? parseInt(number, 10) : number,
                month,
                year: typeof year === 'string' ? parseInt(year, 10) : year
            },
        });
        res.status(200).json({ message: 'Updated', data: issue });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Delete issue
router.delete('/issues/:issueId', Protected, RequireEditor, async (req, res) => {
    const { issueId } = req.params;
    try {
        await prisma.$transaction(async (tx) => {
            // Disconnect all articles from this issue
            await tx.article.updateMany({
                where: { issueId },
                data: { issueId: null }
            });
            // Delete the issue
            await tx.issue.delete({ where: { id: issueId } });
        });
        res.status(200).json({ message: 'Deleted' });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Submission: create Article in SUBMITTED state
router.post('/articles', Protected, upload.fields([
    { name: 'pdf', maxCount: 1 },
    { name: 'attachments', maxCount: 1 },
    { name: 'script', maxCount: 1 }
]), async (req, res) => {
    // Sanitize all input data
    const sanitized = sanitizeArticleInput(req.body);
    const { title, articleType, keywords, abstract, conflictOfInterest, fundingInfo, dataAvailability, authors } = sanitized;
    try {
        if (!title || !articleType || !abstract) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        // Handle multiple file uploads
        const files = req.files;
        // compute pages if a PDF was uploaded (best-effort heuristic)
        let pdfPublicPath = null;
        let totalPages = null;
        if (files?.pdf?.[0]?.path) {
            pdfPublicPath = `/api/content/public/articles/pdf/${path.basename(files.pdf[0].path)}`;
            let parser = null;
            try {
                const buffer = await fs.promises.readFile(files.pdf[0].path);
                parser = new PDFParse({ data: buffer });
                const info = await parser.getInfo();
                totalPages = info.total;
            }
            catch (_) {
                // ignore page count errors, leave null
            }
            finally {
                if (parser) {
                    try {
                        await parser.destroy();
                    }
                    catch (e) {
                        console.error('Error destroying PDF parser:', e);
                    }
                }
            }
        }
        // Handle attachments (ZIP file)
        let attachmentsPath = null;
        if (files?.attachments?.[0]?.path) {
            attachmentsPath = `/api/content/public/articles/attachments/${path.basename(files.attachments[0].path)}`;
        }
        // Handle script file
        let scriptPath = null;
        if (files?.script?.[0]?.path) {
            scriptPath = `/api/content/public/articles/scripts/${path.basename(files.script[0].path)}`;
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
                authorsJson: sanitized.authors || (typeof authors === 'string' ? JSON.parse(authors) : authors),
                pdfPath: pdfPublicPath,
                totalPages: totalPages ?? null,
                status: 'SUBMITTED',
            },
        });
        // Queue email notifications asynchronously (non-blocking)
        try {
            // Fetch all editors from the database
            const editors = await prisma.user.findMany({
                where: {
                    role: 'EDITOR',
                    emailVerified: true, // Only send to verified editors
                },
                select: {
                    email: true,
                },
            });
            const editorEmails = editors.map(editor => editor.email);
            if (editorEmails.length === 0) {
                console.warn('No verified editors found in database, using fallback email');
            }
            // Queue editor notification (non-blocking)
            queueEditorNotification(article, pdfPublicPath || undefined, editorEmails);
        }
        catch (emailError) {
            console.error('Failed to queue editor notification email:', emailError);
            // Don't fail the submission if email queueing fails
        }
        // Queue confirmation email to user (non-blocking)
        try {
            const userEmail = req.user.email;
            if (userEmail) {
                queueUserConfirmation(userEmail, article);
            }
        }
        catch (emailError) {
            console.error('Failed to queue user confirmation email:', emailError);
            // Don't fail the submission if email queueing fails
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
// Editor: update Article
router.put('/articles/:articleId', Protected, RequireEditor, upload.fields([
    { name: 'pdf', maxCount: 1 }
]), async (req, res) => {
    const { articleId } = req.params;
    const { title, abstract, keywords, doi, totalPages, articleType, issueId, authors } = req.body;
    try {
        const updateData = {};
        if (title !== undefined)
            updateData.title = title;
        if (abstract !== undefined)
            updateData.abstract = abstract;
        if (keywords !== undefined)
            updateData.keywords = keywords;
        if (doi !== undefined)
            updateData.doi = doi;
        if (totalPages !== undefined)
            updateData.totalPages = parseInt(totalPages);
        if (articleType !== undefined)
            updateData.articleType = articleType;
        if (issueId !== undefined)
            updateData.issueId = issueId;
        if (authors !== undefined) {
            try {
                updateData.authorsJson = typeof authors === 'string' ? JSON.parse(authors) : authors;
                // Sanitize authors
                if (Array.isArray(updateData.authorsJson)) {
                    updateData.authorsJson = updateData.authorsJson.map((author) => ({
                        name: sanitizeText(author.name || ''),
                        email: sanitizeEmail(author.email || ''),
                        affiliation: sanitizeText(author.affiliation || ''),
                        superscript: sanitizeText(author.superscript || ''),
                    })).filter((a) => a.name && a.email);
                }
            }
            catch (e) {
                console.error('Error parsing authors JSON during update:', e);
                // Don't update authors if parsing fails
            }
        }
        // Handle PDF upload if present
        const files = req.files;
        const currentArticle = await prisma.article.findUnique({ where: { id: articleId } });
        const effectiveDoi = doi !== undefined ? doi : currentArticle?.doi;
        if (files?.pdf?.[0]?.path) {
            let finalFilename = path.basename(files.pdf[0].path);
            if (effectiveDoi) {
                finalFilename = getDoiFilename(effectiveDoi);
                const newPath = path.join(uploadDir, finalFilename);
                // Delete existing file if it exists and is different
                try {
                    if (fs.existsSync(newPath)) {
                        await fs.promises.unlink(newPath);
                    }
                }
                catch (e) {
                    console.error('Error deleting existing file:', e);
                }
                await fs.promises.rename(files.pdf[0].path, newPath);
            }
            const pdfPublicPath = `/api/content/public/articles/pdf/${finalFilename}`;
            updateData.pdfPath = pdfPublicPath;
            // Try to update page count from new PDF
            let parser = null;
            try {
                const filePath = effectiveDoi ? path.join(uploadDir, finalFilename) : files.pdf[0].path;
                const buffer = await fs.promises.readFile(filePath);
                parser = new PDFParse({ data: buffer });
                const info = await parser.getInfo();
                updateData.totalPages = info.total;
            }
            catch (_) {
                // ignore page count errors
            }
            finally {
                if (parser) {
                    try {
                        await parser.destroy();
                    }
                    catch (e) {
                        console.error('Error destroying PDF parser:', e);
                    }
                }
            }
        }
        else if (doi && currentArticle?.doi !== doi && currentArticle?.pdfPath) {
            // DOI changed, but no new PDF. Rename existing one if possible.
            const oldFilename = currentArticle.pdfPath.split('/').pop();
            const oldPath = path.join(uploadDir, oldFilename);
            const newFilename = getDoiFilename(doi);
            const newPath = path.join(uploadDir, newFilename);
            try {
                if (fs.existsSync(oldPath)) {
                    await fs.promises.rename(oldPath, newPath);
                    updateData.pdfPath = `/api/content/public/articles/pdf/${newFilename}`;
                }
            }
            catch (e) {
                console.error('Error renaming PDF on DOI change:', e);
            }
        }
        const updated = await prisma.article.update({
            where: { id: articleId },
            data: updateData,
        });
        res.status(200).json({ message: 'Updated', data: updated });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Editor: delete Article
router.delete('/articles/:articleId', Protected, RequireEditor, async (req, res) => {
    const { articleId } = req.params;
    try {
        await prisma.article.delete({
            where: { id: articleId },
        });
        res.status(200).json({ message: 'Deleted' });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Editor: create and publish article directly
router.post('/articles/create-publish', Protected, RequireEditor, upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'script', maxCount: 1 }
]), async (req, res) => {
    // Sanitize all input data
    const sanitized = sanitizeArticleInput(req.body);
    const { title, abstract, keywords, pages, doi, issueId, authors } = { ...sanitized, pages: req.body.pages, issueId: req.body.issueId };
    try {
        if (!title || !abstract || !issueId) {
            return res.status(400).json({ message: 'Missing required fields: title, abstract, issueId' });
        }
        // Use sanitized authors from sanitizeArticleInput
        let authorsData = sanitized.authors;
        if (!authorsData) {
            try {
                authorsData = typeof authors === 'string' ? JSON.parse(authors) : authors;
                // Sanitize if not already sanitized
                if (Array.isArray(authorsData)) {
                    authorsData = authorsData.map((author) => ({
                        name: sanitizeText(author.name || ''),
                        email: sanitizeEmail(author.email || ''),
                        affiliation: sanitizeText(author.affiliation || ''),
                        superscript: sanitizeText(author.superscript || ''),
                    })).filter((a) => a.name && a.email);
                }
            }
            catch (e) {
                return res.status(400).json({ message: 'Invalid authors format' });
            }
        }
        if (!authorsData || !Array.isArray(authorsData) || authorsData.length === 0) {
            return res.status(400).json({ message: 'At least one author is required' });
        }
        // Handle multiple file uploads
        const files = req.files;
        // Handle PDF file upload
        let pdfPublicPath = null;
        let totalPages = null;
        if (files?.file?.[0]?.path) {
            let finalFilename = path.basename(files.file[0].path);
            if (doi) {
                finalFilename = getDoiFilename(doi);
                const newPath = path.join(uploadDir, finalFilename);
                // Delete existing file if it exists and is different
                try {
                    if (fs.existsSync(newPath)) {
                        await fs.promises.unlink(newPath);
                    }
                }
                catch (e) {
                    console.error('Error deleting existing file:', e);
                }
                await fs.promises.rename(files.file[0].path, newPath);
            }
            pdfPublicPath = `/api/content/public/articles/pdf/${finalFilename}`;
            let parser = null;
            try {
                const filePath = doi ? path.join(uploadDir, finalFilename) : files.file[0].path;
                const buffer = await fs.promises.readFile(filePath);
                parser = new PDFParse({ data: buffer });
                const info = await parser.getInfo();
                totalPages = info.total;
            }
            catch (_) {
                // ignore page count errors, leave null
            }
            finally {
                if (parser) {
                    try {
                        await parser.destroy();
                    }
                    catch (e) {
                        console.error('Error destroying PDF parser:', e);
                    }
                }
            }
        }
        // Handle script file
        let scriptPath = null;
        if (files?.script?.[0]?.path) {
            scriptPath = `/api/content/public/articles/scripts/${path.basename(files.script[0].path)}`;
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
    const volumes = await prisma.volume.findMany({
        include: {
            issues: {
                orderBy: { createdAt: 'asc' }
            }
        }
    });
    res.json({ data: volumes });
});
// Public fetch volumes with issues (no articles) for site display
router.get('/public/volumes', async (_req, res) => {
    const volumes = await prisma.volume.findMany({
        include: {
            issues: {
                orderBy: { createdAt: 'asc' }
            }
        },
        orderBy: { number: 'desc' },
    });
    res.json({ data: volumes });
});
// Public: issue with its published articles
router.get('/public/issue/:issueId', async (req, res) => {
    const { issueId } = req.params;
    const issue = await prisma.issue.findUnique({
        where: { id: issueId },
        include: {
            volume: true,
            articles: {
                where: { status: 'PUBLISHED' },
                orderBy: { publishedAt: 'asc' }
            }
        },
    });
    if (!issue)
        return res.status(404).json({ message: 'Issue not found' });
    res.json({ data: issue });
});
// Public: latest articles for sidebar
router.get('/public/articles/latest', async (_req, res) => {
    try {
        const articles = await prisma.article.findMany({
            where: { status: 'PUBLISHED' },
            take: 5,
            orderBy: { publishedAt: 'desc' },
            include: {
                issue: {
                    include: { volume: true }
                }
            }
        });
        res.json({ data: articles });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Public: all published articles for sitemap
router.get('/public/articles/all', async (_req, res) => {
    try {
        const articles = await prisma.article.findMany({
            where: { status: 'PUBLISHED' },
            select: {
                id: true,
                doi: true,
                updatedAt: true,
                issueId: true
            },
            orderBy: { publishedAt: 'desc' }
        });
        res.json({ data: articles });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Public: article details and increment views
router.get('/public/article/:articleId', async (req, res) => {
    const { articleId } = req.params;
    try {
        // Try to find by DOI first
        let article = await prisma.article.findFirst({
            where: { doi: articleId },
            include: { issue: { include: { volume: true } } }
        });
        // If not found by DOI, try by ID (if it looks like a UUID to avoid DB errors)
        if (!article) {
            // Basic UUID regex check
            const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(articleId);
            if (isUuid) {
                article = await prisma.article.findUnique({
                    where: { id: articleId },
                    include: { issue: { include: { volume: true } } }
                });
            }
        }
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        // Increment views
        await prisma.article.update({
            where: { id: article.id },
            data: { views: { increment: 1 } },
        });
        res.json({ data: article });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Public: Serve PDF by DOI
router.get(/^\/article_repo\/(.*)\.pdf$/, async (req, res) => {
    const doi = req.params[0];
    try {
        const article = await prisma.article.findFirst({
            where: { doi: doi },
        });
        if (!article || !article.pdfPath) {
            return res.status(404).json({ message: 'Article or PDF not found' });
        }
        // pdfPath stores api url ending with filename, e.g., /api/content/public/articles/pdf/filename.pdf
        const file = article.pdfPath.split('/').pop();
        const filePath = path.join(uploadDir, file);
        await fs.promises.access(filePath);
        res.setHeader('Content-Type', 'application/pdf');
        // Display in browser instead of forcing download
        res.setHeader('Content-Disposition', `inline; filename="${doi.replace(/\//g, '_')}.pdf"`);
        res.sendFile(filePath);
    }
    catch (err) {
        return res.status(404).end();
    }
});
// Public: serve stored PDFs
// Now gated through approval; use /download/:articleId instead
router.get('/public/articles/pdf/:file', async (_req, res) => {
    return res.status(403).json({ message: 'Direct download disabled' });
});
// Request access (Global)
router.post('/articles/:articleId/request-download', Protected, async (req, res) => {
    const { articleId } = req.params;
    const userId = req.user.id;
    const user = req.user;
    try {
        // If user already has full access, no need to request
        if (user.hasFullAccess) {
            return res.status(200).json({ message: 'You already have full access', data: { status: 'APPROVED' } });
        }
        // Check for ANY pending request - enforce global single request policy
        // We check if the user has ANY pending request, regardless of the article
        const pendingRequest = await prisma.downloadRequest.findFirst({
            where: {
                userId: req.user.id,
                status: 'PENDING'
            }
        });
        if (pendingRequest) {
            return res.status(200).json({ message: 'Request already pending', data: pendingRequest });
        }
        // Create new request
        // We still link it to an article for context, but the approval will be global
        const created = await prisma.downloadRequest.create({ data: { articleId, userId } });
        res.status(201).json({ message: 'Request created', data: created });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
// Editor: approve/deny
router.post('/download-requests/:id/approve', Protected, RequireEditor, async (req, res) => {
    const request = await prisma.downloadRequest.findUnique({
        where: { id: req.params.id },
        select: { userId: true }
    });
    if (!request) {
        return res.status(404).json({ message: 'Request not found' });
    }
    // Grant global full access to the user
    await prisma.user.update({
        where: { id: request.userId },
        data: { hasFullAccess: true }
    });
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
            article: {
                select: {
                    id: true,
                    title: true,
                    issue: {
                        include: { volume: true }
                    }
                }
            },
            user: {
                select: {
                    id: true,
                    userName: true,
                    email: true
                }
            },
        },
    });
    res.json({ data: list });
});
// Approved download endpoint
router.get('/articles/:articleId/download', Protected, async (req, res) => {
    const { articleId } = req.params;
    const user = req.user;
    const article = await prisma.article.findUnique({ where: { id: articleId } });
    if (!article || !article.pdfPath)
        return res.status(404).json({ message: 'Not found' });
    // STRICT GLOBAL ACCESS CHECK
    // Removed article-specific approval logic. Only users with hasFullAccess can download.
    if (!user.hasFullAccess) {
        return res.status(403).json({ message: 'Global access required' });
    }
    // pdfPath stores api url ending with filename
    const file = article.pdfPath.split('/').pop();
    const filePath = path.join(uploadDir, file);
    try {
        await fs.promises.access(filePath);
        res.setHeader('Content-Type', 'application/pdf');
        res.download(filePath);
    }
    catch {
        return res.status(404).end();
    }
});
router.get('/articles', Protected, RequireEditor, async (_req, res) => {
    const articles = await prisma.article.findMany({ where: { status: 'SUBMITTED' } });
    res.json({ data: articles });
});
// Editor: get published articles
router.get('/articles/published', Protected, RequireEditor, async (_req, res) => {
    const articles = await prisma.article.findMany({
        where: { status: 'PUBLISHED' },
        select: {
            id: true,
            title: true,
            articleType: true,
            abstract: true,
            keywords: true,
            doi: true,
            totalPages: true,
            views: true,
            publishedAt: true,
            createdAt: true,
            status: true,
            pdfPath: true,
            authorsJson: true,
            issueId: true,
            issue: {
                include: { volume: true }
            }
        }
    });
    res.json({ data: articles });
});
export default router;
//# sourceMappingURL=content.routes.js.map