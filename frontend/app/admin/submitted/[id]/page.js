"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { checkAuth, listSubmittedArticles, listVolumes, publishArticle, BASE_URL } from '../../../../utils/api';
import { revalidateContent } from '@/app/actions';
import { sanitizeText, sanitizeKeywords, sanitizeAuthor } from '../../../../utils/sanitize';

const SubmittedArticleDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id;

  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [article, setArticle] = useState(null);
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssueId, setSelectedIssueId] = useState('');
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
        if (me?.role !== 'EDITOR') {
          setAuthLoaded(true);
          return;
        }
        const [articles, vols] = await Promise.all([
          listSubmittedArticles(),
          listVolumes()
        ]);
        const foundArticle = articles.find(a => a.id === articleId);
        setArticle(foundArticle);
        setVolumes(vols);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
      setLoading(false);
    };
    init();
  }, [articleId]);

  const handlePublish = async () => {
    if (!selectedIssueId) {
      alert('Please select an issue first');
      return;
    }

    setPublishing(true);
    try {
      await publishArticle(articleId, selectedIssueId);
      await revalidateContent('articles');
      await revalidateContent('volumes');
      alert('Article published successfully!');
      router.push('/admin/submitted');
    } catch (error) {
      console.error('Failed to publish article:', error);
      alert('Failed to publish article. Please try again.');
    } finally {
      setPublishing(false);
    }
  };

  const formatAuthors = (authorsJson) => {
    if (!authorsJson) return 'N/A';
    try {
      const authors = typeof authorsJson === 'string' ? JSON.parse(authorsJson) : authorsJson;
      if (!Array.isArray(authors)) return 'N/A';
      const sanitized = authors.map(sanitizeAuthor).filter(a => a !== null);
      return sanitized.map(a => sanitizeText(a.name) + (a.superscript ? `^${sanitizeText(a.superscript)}` : '')).join(', ');
    } catch {
      return 'N/A';
    }
  };

  if (!authLoaded || loading) {
    return (
      <div className="min-h-screen bg-white mt-16 py-8 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-6" />
          <div className="bg-white border rounded-lg p-6">
            <div className="h-8 bg-gray-200 animate-pulse rounded mb-4" />
            <div className="h-4 bg-gray-200 animate-pulse rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white mt-16 py-8 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Please sign in</h1>
          <Link href="/auth/signin" className="text-blue-600 hover:underline">
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (user.role !== 'EDITOR') {
    return (
      <div className="min-h-screen bg-white mt-16 py-8 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Forbidden</h1>
          <p className="text-gray-600">Editor access required.</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white mt-16 py-8 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
          <Link href="/admin/submitted" className="text-[#083b7a] hover:underline">
            ← Back to Submitted Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/admin/submitted"
            className="flex items-center gap-2 text-gray-600 hover:text-[#083b7a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Submitted Articles</span>
          </Link>
        </div>

        {/* Article Details Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded">
                {article.articleType}
              </span>
              <span className="text-sm text-gray-500">
                Submitted: {new Date(article.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sanitizeText(article.title || '')}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {article.totalPages && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">{article.totalPages} pages</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            {/* Authors */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Authors</h2>
              <p className="text-gray-700">{formatAuthors(article.authorsJson)}</p>
            </div>

            {/* Abstract */}
            {article.abstract && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Abstract</h2>
                <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {sanitizeText(article.abstract)}
                </div>
              </div>
            )}

            {/* Keywords */}
            {article.keywords && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h2>
                <div className="flex flex-wrap gap-2">
                  {sanitizeKeywords(article.keywords).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Information */}
            {(article.conflictOfInterest || article.fundingInfo || article.dataAvailability) && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Additional Information</h2>

                {article.conflictOfInterest && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Conflict of Interest</h3>
                    <p className="text-gray-600 text-sm">{sanitizeText(article.conflictOfInterest)}</p>
                  </div>
                )}

                {article.fundingInfo && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Funding Information</h3>
                    <p className="text-gray-600 text-sm">{sanitizeText(article.fundingInfo)}</p>
                  </div>
                )}

                {article.dataAvailability && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Data Availability</h3>
                    <p className="text-gray-600 text-sm">{sanitizeText(article.dataAvailability)}</p>
                  </div>
                )}
              </div>
            )}

            {/* PDF Download */}
            {article.pdfPath && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Manuscript</h2>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                  href={article.pdfPath.startsWith('/api/') ? `${BASE_URL}${article.pdfPath}` : article.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Publish Section */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Publish Article</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select an issue to publish this article to. Once published, the article will be moved to the published articles list.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] bg-white"
              value={selectedIssueId}
              onChange={(e) => setSelectedIssueId(e.target.value)}
            >
              <option value="">Select Issue</option>
              {volumes.flatMap(v =>
                (v.issues || []).map(i => ({
                  ...i,
                  volumeNumber: v.number
                }))
              ).map(i => (
                <option key={i.id} value={i.id}>
                  Volume {i.volumeNumber} - Issue {i.number} ({i.month} {i.year})
                </option>
              ))}
            </select>
            <button
              className="px-6 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              onClick={handlePublish}
              disabled={publishing || !selectedIssueId}
            >
              {publishing ? 'Publishing...' : 'Publish Article'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedArticleDetailPage;
