import axios from "axios";
import * as cheerio from "cheerio";
import { generateSummary } from "../services/groqService.js";

export const summarizeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    // Validate URL
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid URL",
      });
    }

    // Fetch webpage
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    // Parse HTML
    const $ = cheerio.load(response.data);

    // Remove unwanted elements
    $("script, style, noscript, iframe, nav, footer, header").remove();

    // Extract visible text
    const text = $("body").text().replace(/\s+/g, " ").trim();

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Could not extract readable text from this webpage",
      });
    }

    // Limit content sent to AI
    const limitedText = text.slice(0, 15000);

    // Generate AI summary
    const summary = await generateSummary(limitedText);

    return res.status(200).json({
      success: true,
      message: "Website summarized successfully",
      data: {
        url,
        summary,
      },
    });
  } catch (error) {
    console.error("Summarization error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to summarize the webpage",
    });
  }
};