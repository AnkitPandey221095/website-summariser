import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateSummary = async (text) => {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
You are a website summarization assistant.

Analyze the provided webpage content and return a concise summary.

Return ONLY valid JSON in this exact structure:

{
  "title": "A short title for the webpage",
  "summary": "A concise 3-5 sentence summary",
  "keyPoints": [
    "Important point 1",
    "Important point 2",
    "Important point 3"
  ]
}

Do not include markdown.
Do not include code fences.
Do not add any text outside the JSON.
        `,
      },
      {
        role: "user",
        content: `Summarize this webpage:

${text}`,
      },
    ],

    model: "openai/gpt-oss-20b",

    temperature: 0.2,

    max_tokens: 500,

    response_format: {
      type: "json_object",
    },
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("No response received from Groq");
  }

  return JSON.parse(content);
};