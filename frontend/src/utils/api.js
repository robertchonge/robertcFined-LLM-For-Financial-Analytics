import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

export const uploadFinancialFile = async (formData) => {
  const response = await axios.post(`${API_BASE}/upload-financials/`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};
