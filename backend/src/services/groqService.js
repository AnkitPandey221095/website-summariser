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
        content:
          "You are a helpful website summarization assistant. Summarize webpage content clearly and concisely.",
      },
      {
        role: "user",
        content: `Summarize the following webpage content in 5-7 concise sentences. Focus only on the important information.

Webpage content:
${text}`,
      },
    ],
    model: "openai/gpt-oss-20b",
    temperature: 0.3,
    max_tokens: 300,
  });

  return completion.choices[0]?.message?.content;
};