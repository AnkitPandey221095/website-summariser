const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>

      <p>Analyzing webpage...</p>
      <span>Fetching content and generating your summary</span>
    </div>
  );
};

export default Loading;