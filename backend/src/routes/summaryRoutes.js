import express from "express";
import { summarizeWebsite } from "../controllers/summaryController.js";

const router = express.Router();

router.post("/summarize", summarizeWebsite);

export default router;