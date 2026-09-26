import { useState } from "react";

const UrlForm = ({ onSubmit, loading }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!url.trim()) {
      return;
    }

    onSubmit(url.trim());
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <span className="input-icon">🔗</span>

        <input
          type="url"
          placeholder="Paste a website URL..."
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          disabled={loading}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Summarizing..." : "✨ Summarize"}
      </button>
    </form>
  );
};

export default UrlForm;