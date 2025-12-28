
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";
const API_BASE = `${BASE_URL}/api`;

export async function getPublicVolumes() {
  console.log('Fetching volumes from:', `${API_BASE}/content/public/volumes`);
  const res = await fetch(`${API_BASE}/content/public/volumes`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch volumes");
  const data = await res.json();
  return data.data;
}

export async function getIssue(issueId) {
  const res = await fetch(`${API_BASE}/content/public/issue/${issueId}`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch issue");
  const data = await res.json();
  return data.data;
}

export async function getArticle(articleId) {
  const res = await fetch(`${API_BASE}/content/public/article/${encodeURIComponent(articleId)}`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  const data = await res.json();
  return data.data;
}

export async function getPublishedArticles() {
  const res = await fetch(`${API_BASE}/content/articles/published`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  const data = await res.json();
  return data.data;
}

export async function getLatestArticles() {
  const res = await fetch(`${API_BASE}/content/public/articles/latest`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch latest articles");
  const data = await res.json();
  return data.data;
}
