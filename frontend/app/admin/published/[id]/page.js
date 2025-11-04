"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { checkAuth, listPublishedArticles } from '../../../../utils/api';

const PublishedArticleDetailPage = () => {
  const params = useParams();
  const articleId = params.id;
  
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
        if (me?.role !== 'EDITOR') {
          setAuthLoaded(true);
          return;
        }
        const articles = await listPublishedArticles();
        const foundArticle = articles.find(a => a.id === articleId);
        setArticle(foundArticle);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
      setLoading(false);
    };
    init();
  }, [articleId]);

  const formatAuthors = (authorsJson) => {
    if (!authorsJson) return 'N/A';
    try {
      const authors = typeof authorsJson === 'string' ? JSON.parse(authorsJson) : authorsJson;
      return authors.map(a => a.name + (a.superscript ? `^${a.superscript}` : '')).join(', ');
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
          <Link href="/admin/published" className="text-[#083b7a] hover:underline">
            ← Back to Published Articles
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
            href="/admin/published" 
            className="flex items-center gap-2 text-gray-600 hover:text-[#083b7a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Published Articles</span>
          </Link>
        </div>

        {/* Article Details Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-50 to-white p-6 border-b border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded">
                  {article.articleType}
                </span>
                {article.issue && (
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded">
                    Vol {article.issue.volume?.number} • Issue {article.issue.number}
                  </span>
                )}
              </div>
              {article.publishedAt && (
                <span className="text-sm text-gray-500">
                  Published: {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {article.doi && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-medium">DOI: {article.doi}</span>
                </div>
              )}
              {article.totalPages && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">{article.totalPages} pages</span>
                </div>
              )}
              {article.views && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="font-medium">{article.views} views</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            {/* Publication Info */}
            {article.issue && (
              <div className="bg-blue-50 rounded-lg p-4">
                <h2 className="text-sm font-semibold text-blue-900 mb-2">Publication Details</h2>
                <div className="text-sm text-blue-800">
                  <p>Volume {article.issue.volume?.number}, Issue {article.issue.number}</p>
                  <p>{article.issue.month} {article.issue.year}</p>
                </div>
              </div>
            )}

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
                  {article.abstract}
                </div>
              </div>
            )}

            {/* Keywords */}
            {article.keywords && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h2>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.split(',').map((keyword, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {keyword.trim()}
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
                    <p className="text-gray-600 text-sm">{article.conflictOfInterest}</p>
                  </div>
                )}
                
                {article.fundingInfo && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Funding Information</h3>
                    <p className="text-gray-600 text-sm">{article.fundingInfo}</p>
                  </div>
                )}
                
                {article.dataAvailability && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Data Availability</h3>
                    <p className="text-gray-600 text-sm">{article.dataAvailability}</p>
                  </div>
                )}
              </div>
            )}

            {/* PDF Download */}
            {article.pdfPath && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Full Text</h2>
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                  href={article.pdfPath.startsWith('/api/') ? `http://localhost:8000${article.pdfPath}` : article.pdfPath} 
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

            {/* Citation */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">How to Cite</h2>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Title:</strong> {article.title}</p>
                <p><strong>Authors:</strong> {formatAuthors(article.authorsJson)}</p>
                {article.issue && (
                  <>
                    <p><strong>Volume:</strong> {article.issue.volume?.number}</p>
                    <p><strong>Issue:</strong> {article.issue.number}</p>
                    <p><strong>Published:</strong> {article.issue.month} {article.issue.year}</p>
                  </>
                )}
                {article.doi && <p><strong>DOI:</strong> {article.doi}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedArticleDetailPage;
