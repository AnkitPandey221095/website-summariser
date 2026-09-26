# ✦ AI Website Summariser

> Turn any public webpage into a clear, concise AI-generated summary in seconds.

An AI-powered web application that allows users to enter any public webpage URL, extracts the visible content from the webpage, processes the content using an AI model, and generates a structured summary with key points.

---

## 🚀 Live Demo

🔗 **Live Application:**  
https://website-summariser.onrender.com/

---

## 📸 Demo

### Application UI

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/5a1e3cb8-b790-4e25-9745-6d8b8b39a231" />

### AI Generated Summary

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/d441fcbc-3121-45d9-a414-46d8f93c7fa3" />

> Screenshots demonstrate the application's responsive UI, URL input, loading state, and AI-generated summary.

---

## 📌 About the Project

Reading long webpages can be time-consuming when users only need the important information.

The **AI Website Summariser** solves this problem by allowing users to provide a public webpage URL. The application:

1. Accepts a webpage URL from the user.
2. Fetches the webpage from the backend.
3. Extracts readable text from the HTML.
4. Sends the extracted content to a Groq-hosted LLM.
5. Generates a structured AI summary.
6. Displays the summary and key points through a clean web interface.

The project was developed as an AI-focused full-stack web application demonstrating frontend development, backend API development, web content extraction, and AI integration.

---

# ✨ Features

- 🔗 Accept any public webpage URL
- 🌐 Fetch webpage content using the backend
- 🧹 Extract readable text using HTML parsing
- 🤖 AI-powered summarization using Groq
- 📝 Structured summary generation
- 📌 Key points extraction
- ⏳ Loading state while processing
- ⚠️ User-friendly error handling
- 📱 Responsive UI
- 🔐 API key protected through environment variables
- 🚀 Production-ready frontend/backend architecture

---

# 🏗️ Architecture

The application follows a simple full-stack architecture where the React frontend communicates with an Express backend.

```text
                    ┌──────────────────────┐
                    │      User Browser    │
                    │                      │
                    │    React + Vite UI   │
                    └──────────┬───────────┘
                               │
                               │ POST /api/summarize
                               ▼
                    ┌──────────────────────┐
                    │   Node.js + Express  │
                    │                      │
                    │   API Controller     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Web Fetching      │
                    │                      │
                    │ Axios + Cheerio      │
                    └──────────┬───────────┘
                               │
                               │ Extracted text
                               ▼
                    ┌──────────────────────┐
                    │       Groq API       │
                    │                      │
                    │   LLM Processing     │
                    └──────────┬───────────┘
                               │
                               │ Structured JSON
                               ▼
                    ┌──────────────────────┐
                    │    Express Backend   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      React UI        │
                    │                      │
                    │ Summary + Key Points │
                    └──────────────────────┘
