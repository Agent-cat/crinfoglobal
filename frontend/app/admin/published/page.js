"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { checkAuth, listPublishedArticles } from '../../../utils/api';

const PublishedArticlesPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [publishedArticles, setPublishedArticles] = useState([]);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
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
        setPublishedArticles(articles);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
      setLoading(false);
    };
    init();
  }, []);

  if (!authLoaded) {
    return (
      <div className="min-h-screen bg-white mt-16 py-8 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-6" />
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-gray-200 animate-pulse rounded" />
            ))}
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

  return (
    <div className="min-h-screen w-full text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Published Articles</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/admin" className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors text-center">
              ← Back to Admin
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{publishedArticles.length}</div>
            <div className="text-sm text-blue-800">Total Published</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {publishedArticles.filter(a => a.doi).length}
            </div>
            <div className="text-sm text-green-800">With DOI</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {publishedArticles.reduce((sum, a) => sum + (a.totalPages || 0), 0)}
            </div>
            <div className="text-sm text-purple-800">Total Pages</div>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Published Articles</h2>
          
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
                  <div className="h-3 bg-gray-200 animate-pulse rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : publishedArticles.length > 0 ? (
            <div className="space-y-4">
              {publishedArticles.map(a => (
                <div key={a.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Article Info */}
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 mb-2 text-lg">{a.title}</div>
                      <div className="text-sm text-gray-600 mb-2">{a.articleType}</div>
                      
                      {a.issue && (
                        <div className="text-sm text-gray-500 mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Volume {a.issue.volume?.number} • Issue {a.issue.number} ({a.issue.month} {a.issue.year})
                          </span>
                        </div>
                      )}
                      
                      {/* Article Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        {a.doi && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium">DOI:</span>
                            <span className="text-blue-600">{a.doi}</span>
                          </div>
                        )}
                        {a.totalPages && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium">Pages:</span>
                            <span>{a.totalPages}</span>
                          </div>
                        )}
                        {a.views && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium">Views:</span>
                            <span>{a.views}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-sm transition-colors"
                        onClick={() => setExpandedArticleId(expandedArticleId === a.id ? null : a.id)}
                      >
                        {expandedArticleId === a.id ? 'Hide Details' : 'View Details'}
                      </button>
                      {a.pdfPath && (
                        <a 
                          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm transition-colors text-center"
                          href={a.pdfPath.startsWith('/api/') ? `http://localhost:8000${a.pdfPath}` : a.pdfPath} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {expandedArticleId === a.id && (
                    <div className="text-sm text-gray-700 border-t pt-4 mt-4 space-y-3">
                      {a.keywords && (
                        <div>
                          <span className="font-medium">Keywords:</span>
                          <span className="ml-2">{a.keywords}</span>
                        </div>
                      )}
                      {a.abstract && (
                        <div>
                          <div className="font-medium mb-2">Abstract</div>
                          <div className="whitespace-pre-wrap text-gray-600 bg-gray-50 p-3 rounded">
                            {a.abstract}
                          </div>
                        </div>
                      )}
                      {a.publishedAt && (
                        <div>
                          <span className="font-medium">Published:</span>
                          <span className="ml-2">{new Date(a.publishedAt).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 bg-white rounded-lg border-2 border-dashed">
              <div className="text-4xl mb-4">📚</div>
              <div className="text-lg font-medium mb-2">No published articles</div>
              <div className="text-sm">Articles will appear here once they are published.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublishedArticlesPage;
