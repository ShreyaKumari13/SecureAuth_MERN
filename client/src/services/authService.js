import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (email, password) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getDashboard = async () => {
  const token = localStorage.getItem('token');
  return await axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: token }
  });
};
