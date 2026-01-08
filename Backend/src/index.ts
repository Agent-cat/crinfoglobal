import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import contentRoutes from "./routes/content.routes.js";
import cors from "cors";
import fs from "fs";
import path from "path";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
// Increase body parser limits to handle larger file uploads
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Security headers middleware
app.use((req, res, next) => {
  // Content Security Policy - prevent XSS attacks
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' " + (process.env.FRONTEND_URL || 'http://localhost:3000') + "; frame-ancestors 'none';"
  );

  // XSS Protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  next();
});
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

// Ensure uploads directory exists
// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), "uploads", "articles");
(async () => {
  try {
    await fs.promises.access(uploadDir);
  } catch {
    await fs.promises.mkdir(uploadDir, { recursive: true });
  }
})();

app.get("/", (_, res) => {
  res.send("hi");
});
const PORT = parseInt(process.env.PORT || "8000", 10);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
