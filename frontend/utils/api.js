import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signin = async (email, password) => {
  const response = await api.post(`/signin`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data.user;
};

export const signup = async (email, userName, password) => {
  const response = await api.post(`/signup`, {
    email,
    userName,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data.user;
};

export const logout = async () => {
  localStorage.removeItem('token');
};

export const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error("No token found");
  }
  const response = await api.get(`/check`);
  return response.data;
};
