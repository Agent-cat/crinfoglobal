import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";
const CONTENT_URL = "http://localhost:8000/api/content";

// Get token from localStorage
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('jwt');
  }
  return null;
};

// Set token in localStorage
const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', token);
  }
};

// Remove token from localStorage
const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
  }
};

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add request interceptor to include JWT token in headers
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signin = async (email, password) => {
  const response = await api.post(`/signin`, { email, password });
  // Extract token from response if available
  if (response.data.token) {
    setToken(response.data.token);
  }
  return response.data.data;
};

export const signup = async (email, userName, password) => {
  const response = await api.post(`/signup`, {
    email,
    userName,
    password,
  });
  return response.data;
};

export const verifyOTP = async (email, otp) => {
  const response = await api.post(`/verify-otp`, { email, otp });
  return response.data;
};

export const resendOTP = async (email) => {
  const response = await api.post(`/resend-otp`, { email });
  return response.data;
};

export const logout = async () => {
  try {
    const res = await api.post(`/logout`);
    removeToken(); // Remove token from localStorage
    if (res.status !== 200) {
      throw new Error('Logout failed');
    }
  } catch (error) {
    // Even if logout fails on server, remove token locally
    removeToken();
    throw error;
  }
};

export const checkAuth = async () => {
  const token = getToken();
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await api.get(`/check`);
  return response.data.data;
};

// Content/admin API
const contentApi = axios.create({ baseURL: CONTENT_URL, withCredentials: true });

// Add request interceptor to include JWT token in headers for content API
contentApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createVolume = async (number) => {
  const res = await contentApi.post(`/volumes`, { number });
  return res.data.data;
};

export const createIssue = async (volumeId, number, month, year) => {
  const res = await contentApi.post(`/volumes/${volumeId}/issues`, { number, month, year });
  return res.data.data;
};

export const listVolumes = async () => {
  const res = await contentApi.get(`/volumes`);
  return res.data.data;
};

export const updateVolume = async (volumeId, number) => {
  const res = await contentApi.put(`/volumes/${volumeId}`, { number });
  return res.data.data;
};

export const deleteVolume = async (volumeId) => {
  const res = await contentApi.delete(`/volumes/${volumeId}`);
  return res.data;
};

export const updateIssue = async (issueId, number, month, year) => {
  const res = await contentApi.put(`/issues/${issueId}`, { number, month, year });
  return res.data.data;
};

export const deleteIssue = async (issueId) => {
  const res = await contentApi.delete(`/issues/${issueId}`);
  return res.data;
};

export const listPublicVolumes = async () => {
  const res = await contentApi.get(`/public/volumes`);
  return res.data.data;
};

export const submitArticle = async (payload) => {
  const res = await contentApi.post(`/articles`, payload);
  return res.data.data;
};

export const listSubmittedArticles = async () => {
  const res = await contentApi.get(`/articles`);
  return res.data.data;
};

export const listPublishedArticles = async () => {
  const res = await contentApi.get(`/articles/published`);
  return res.data.data;
};

export const publishArticle = async (articleId, issueId) => {
  const res = await contentApi.post(`/articles/${articleId}/publish`, { issueId });
  return res.data.data;
};

export const updateArticle = async (articleId, data) => {
  const res = await contentApi.put(`/articles/${articleId}`, data);
  return res.data.data;
};

export const createAndPublishArticle = async (formData) => {
  const response = await contentApi.post('/articles/create-publish', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data;
};

export const fetchIssue = async (issueId) => {
  const res = await contentApi.get(`/public/issue/${issueId}`);
  return res.data.data;
};

export const fetchArticle = async (articleId) => {
  const res = await contentApi.get(`/public/article/${articleId}`);
  return res.data.data;
};

export const requestDownload = async (articleId) => {
  const res = await contentApi.post(`/articles/${articleId}/request-download`);
  return res.data.data;
};

export const listDownloadRequests = async () => {
  const res = await contentApi.get(`/download-requests`);
  return res.data.data;
};

export const approveDownloadRequest = async (id) => {
  const res = await contentApi.post(`/download-requests/${id}/approve`);
  return res.data.data;
};

export const denyDownloadRequest = async (id) => {
  const res = await contentApi.post(`/download-requests/${id}/deny`);
  return res.data.data;
};

export const downloadArticlePdf = async (articleId) => {
  // Attempts a gated download; throws on 403/404 etc.
  const res = await contentApi.get(`/articles/${articleId}/download`, { responseType: 'blob' });
  return res;
};
