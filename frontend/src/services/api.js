import axios from "axios";

const API_URL = "http://localhost:3000/api" || "/api";

export const summarizeWebsite = async (url) => {
  const response = await axios.post(`${API_URL}/summarize`, {
    url,
  });

  return response.data;
};
