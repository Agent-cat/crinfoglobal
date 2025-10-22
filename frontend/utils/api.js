import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";
const CONTENT_URL = "http://localhost:8000/api/content";

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
  const res = await api.post(`/logout`);
  if (res.status !== 200) {
    throw new Error('Logout failed');
  }
};

export const checkAuth = async () => {
  const response = await api.get(`/check`);
  return response.data;
};

// Content/admin API
const contentApi = axios.create({ baseURL: CONTENT_URL, withCredentials: true });

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

export const publishArticle = async (articleId, issueId) => {
  const res = await contentApi.post(`/articles/${articleId}/publish`, { issueId });
  return res.data.data;
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
