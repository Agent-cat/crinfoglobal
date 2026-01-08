import { cache } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";
const API_BASE = `${BASE_URL}/api`;

export const getPublicVolumes = cache(async function getPublicVolumes() {
  console.log('Fetching volumes from:', `${API_BASE}/content/public/volumes`);
  const res = await fetch(`${API_BASE}/content/public/volumes`, {
    next: {
      revalidate: 3600, // 1 hour
      tags: ['volumes']
    },
  });
  if (!res.ok) throw new Error("Failed to fetch volumes");
  const data = await res.json();
  return data.data;
});

export const getIssue = cache(async function getIssue(issueId) {
  const res = await fetch(`${API_BASE}/content/public/issue/${issueId}`, {
    next: {
      revalidate: 900, // 15 mins
      tags: ['articles', `issue-${issueId}`]
    },
  });
  if (!res.ok) throw new Error("Failed to fetch issue");
  const data = await res.json();
  return data.data;
});

export const getArticle = cache(async function getArticle(articleId) {
  const res = await fetch(`${API_BASE}/content/public/article/${encodeURIComponent(articleId)}`, {
    next: {
      revalidate: 3600,
      tags: [`article-${articleId}`, 'articles']
    },
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  const data = await res.json();
  return data.data;
});

export const getPublishedArticles = cache(async function getPublishedArticles() {
  const res = await fetch(`${API_BASE}/content/articles/published`, {
    next: {
      revalidate: 900,
      tags: ['published-articles']
    },
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  const data = await res.json();
  return data.data;
});

export const getLatestArticles = cache(async function getLatestArticles() {
  const res = await fetch(`${API_BASE}/content/public/articles/latest`, {
    next: {
      revalidate: 600, // 10 mins
      tags: ['latest-articles']
    },
  });
  if (!res.ok) throw new Error("Failed to fetch latest articles");
  const data = await res.json();
  return data.data;
});

export const getAllPublishedArticles = cache(async function getAllPublishedArticles() {
  const res = await fetch(`${API_BASE}/content/public/articles/all`, {
    next: {
      revalidate: 3600,
      tags: ['articles-all']
    },
  });
  if (!res.ok) throw new Error("Failed to fetch all published articles");
  const data = await res.json();
  return data.data;
});
