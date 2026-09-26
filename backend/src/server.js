import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", summaryRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Website Summariser API is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});