import express, { type Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { Protected } from '../middlewares/auth.middleware.js';
import { RequireEditor } from '../middlewares/auth.middleware.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads', 'articles');
const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb: (error: any, destination: string) => void) => cb(null, uploadDir),
  filename: (_req: Request, file: Express.Multer.File, cb: (error: any, filename: string) => void) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

const prisma = new PrismaClient();
const router = express.Router();

// Volumes
router.post('/volumes', Protected, RequireEditor, async (req: any, res: any) => {
  const { number } = req.body;
  try {
    const volume = await prisma.volume.create({ data: { number } });
    res.status(201).json({ message: 'Created', data: volume });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
});

router.post('/volumes/:volumeId/issues', Protected, RequireEditor, async (req: any, res: any) => {
  const { volumeId } = req.params;
  const { number, month, year } = req.body;
  try {
    const issue = await prisma.issue.create({ data: { number, month, year, volumeId } });
    res.status(201).json({ message: 'Created', data: issue });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
});

// Submission: create Article in SUBMITTED state
router.post('/articles', Protected, upload.single('pdf'), async (req: any, res: any) => {
  const { title, articleType, keywords, abstract, conflictOfInterest, fundingInfo, dataAvailability, authors } = req.body;
  try {
    if (!title || !articleType || !abstract) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    // compute pages if a PDF was uploaded (best-effort heuristic)
    let pdfPublicPath: string | null = null;
    let totalPages: number | null = null;
    if (req.file?.path) {
      pdfPublicPath = `/api/content/public/articles/pdf/${path.basename(req.file.path)}`;
      try {
        const buffer = fs.readFileSync(req.file.path);
        const text = buffer.toString('latin1');
        const matches = text.match(/\/Type\s*\/Page\b/g);
        if (matches && matches.length > 0) {
          totalPages = matches.length;
        }
      } catch (_) {
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
    res.status(201).json({ message: 'Submitted', data: article });
  } catch (e: any) {
    console.error('Submit article error:', e);
    res.status(400).json({ message: e?.message || 'Submission failed' });
  }
});

// Editor: publish Article by assigning issue
router.post('/articles/:articleId/publish', Protected, RequireEditor, async (req: any, res: any) => {
  const { articleId } = req.params;
  const { issueId } = req.body;
  try {
    const updated = await prisma.article.update({
      where: { id: articleId },
      data: { issueId, status: 'PUBLISHED' },
    });
    res.status(200).json({ message: 'Published', data: updated });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
});

// Fetch for admin panel
router.get('/volumes', Protected, RequireEditor, async (_req: any, res: any) => {
  const volumes = await prisma.volume.findMany({ include: { issues: true } });
  res.json({ data: volumes });
});

// Public fetch volumes with issues (no articles) for site display
router.get('/public/volumes', async (_req: any, res: any) => {
  const volumes = await prisma.volume.findMany({
    include: { issues: true },
    orderBy: { number: 'desc' },
  });
  res.json({ data: volumes });
});

// Public: issue with its published articles
router.get('/public/issue/:issueId', async (req: any, res: any) => {
  const { issueId } = req.params;
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
    include: { volume: true, articles: { where: { status: 'PUBLISHED' } } },
  });
  if (!issue) return res.status(404).json({ message: 'Issue not found' });
  res.json({ data: issue });
});

// Public: article details and increment views
router.get('/public/article/:articleId', async (req: any, res: any) => {
  const { articleId } = req.params;
  const article = await prisma.article.update({
    where: { id: articleId },
    data: { views: { increment: 1 } },
  });
  res.json({ data: article });
});

// Public: serve stored PDFs
// Now gated through approval; use /download/:articleId instead
router.get('/public/articles/pdf/:file', async (_req: any, res: any) => {
  return res.status(403).json({ message: 'Direct download disabled' });
});

// Request PDF access
router.post('/articles/:articleId/request-download', Protected, async (req: any, res: any) => {
  const { articleId } = req.params;
  const userId = req.user.id;
  try {
    const existing = await prisma.downloadRequest.findFirst({ where: { articleId, userId, status: { in: ['PENDING','APPROVED'] } } });
    if (existing) return res.json({ message: 'Already requested', data: existing });
    const created = await prisma.downloadRequest.create({ data: { articleId, userId } });
    res.status(201).json({ message: 'Request created', data: created });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
});

// Editor: approve/deny
router.post('/download-requests/:id/approve', Protected, RequireEditor, async (req: any, res: any) => {
  const updated = await prisma.downloadRequest.update({ where: { id: req.params.id }, data: { status: 'APPROVED' } });
  res.json({ data: updated });
});
router.post('/download-requests/:id/deny', Protected, RequireEditor, async (req: any, res: any) => {
  const updated = await prisma.downloadRequest.update({ where: { id: req.params.id }, data: { status: 'DENIED' } });
  res.json({ data: updated });
});

router.get('/download-requests', Protected, RequireEditor, async (_req: any, res: any) => {
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
router.get('/articles/:articleId/download', Protected, async (req: any, res: any) => {
  const { articleId } = req.params;
  const userId = req.user.id;
  const article = await prisma.article.findUnique({ where: { id: articleId } });
  if (!article || !article.pdfPath) return res.status(404).json({ message: 'Not found' });
  const approved = await prisma.downloadRequest.findFirst({ where: { articleId, userId, status: 'APPROVED' } });
  if (!approved) return res.status(403).json({ message: 'Not approved' });
  // pdfPath stores api url ending with filename
  const file = article.pdfPath.split('/').pop() as string;
  const filePath = path.join(uploadDir, file);
  if (!fs.existsSync(filePath)) return res.status(404).end();
  res.setHeader('Content-Type', 'application/pdf');
  res.download(filePath);
});

router.get('/articles', Protected, RequireEditor, async (_req: any, res: any) => {
  const articles = await prisma.article.findMany({ where: { status: 'SUBMITTED' } });
  res.json({ data: articles });
});

export default router;

