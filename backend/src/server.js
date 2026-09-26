import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", summaryRoutes);

// Frontend build directory
const frontendPath = path.join(__dirname, "../../frontend/dist");

// Serve React static files
app.use(express.static(frontendPath));

// React SPA fallback
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});