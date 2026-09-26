import axios from "axios";

const API_URL = "/api";

export const summarizeWebsite = async (url) => {
  const response = await axios.post(`${API_URL}/summarize`, {
    url,
  });

  return response.data;
};
