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
