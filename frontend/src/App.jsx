import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import UrlForm from "./components/UrlForm";
import Loading from "./components/Loading";
import SummaryCard from "./components/SummaryCard";
import { summarizeWebsite } from "./services/api";


const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSummarize = async (url) => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await summarizeWebsite(url);

      if (response.success) {
        setResult(response.data.summary);
      } else {
        setError(response.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Summarization error:", error);

      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError(
          "Unable to summarize the webpage. Please check the URL and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">✦ AI POWERED</span>

            <h1>
              Understand any website
              <span> in seconds.</span>
            </h1>

            <p>
              Paste a public website URL and let AI extract the important
              information for you.
            </p>

            <UrlForm onSubmit={handleSummarize} loading={loading} />
          </div>
        </section>

        {error && (
          <div className="error-message">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {loading && <Loading />}

        {!loading && result && <SummaryCard result={result} />}
      </main>

      <footer className="footer">
        <p>Built with React, Node.js & Groq AI</p>
      </footer>
    </div>
  );
};

export default App;