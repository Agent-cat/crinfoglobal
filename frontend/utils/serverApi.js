
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function getPublicVolumes() {
  const res = await fetch(`${API_BASE}/content/public/volumes`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  if (!res.ok) throw new Error("Failed to fetch volumes");
  const data = await res.json();
  return data.data;
}

export async function getIssue(issueId) {
  const res = await fetch(`${API_BASE}/content/public/issue/${issueId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch issue");
  const data = await res.json();
  return data.data;
}

export async function getArticle(articleId) {
  const res = await fetch(`${API_BASE}/content/public/article/${articleId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  const data = await res.json();
  return data.data;
}

export async function getPublishedArticles() {
  const res = await fetch(`${API_BASE}/content/articles/published`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  const data = await res.json();
  return data.data;
}
