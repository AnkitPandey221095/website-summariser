const SummaryCard = ({ result }) => {
  if (!result) {
    return null;
  }

  const { title, summary, keyPoints } = result;

  return (
    <section className="summary-card">
      <div className="summary-header">
        <span className="summary-badge">AI SUMMARY</span>

        <h2>{title}</h2>
      </div>

      <div className="summary-section">
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>

      <div className="summary-section">
        <h3>Key Points</h3>

        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>
              <span>✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SummaryCard;