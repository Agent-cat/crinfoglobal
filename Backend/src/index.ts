import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import contentRoutes from "./routes/content.routes.js";
import cors from "cors";
import fs from 'fs';
import path from 'path';
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads', 'articles');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.get("/", (_, res) => {
  res.send("hi");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost${process.env.PORT}`);
});
