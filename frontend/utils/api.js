import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const signin = async (email, password) => {
  const response = await api.post(`/signin`, { email, password });
  return response.data.data;
};

export const signup = async (email, userName, password) => {
  const response = await api.post(`/signup`, {
    email,
    userName,
    password,
  });
  return response.data.data;
};

export const logout = async () => {
  const res = await api.post(`/logout`);
  if (res.status !== 200) {
    throw new Error('Logout failed');
  }
};

export const checkAuth = async () => {
  const response = await api.get(`/check`);
  return response.data;
};
