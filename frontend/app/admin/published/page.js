"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { checkAuth, listPublishedArticles } from '../../../utils/api';

const PublishedArticlesPage = () => {
  const router = useRouter();
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [publishedArticles, setPublishedArticles] = useState([]);
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
      <div className="min-h-screen text-justify bg-white mt-16 py-8 px-5">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {publishedArticles.map(a => (
                <div 
                  key={a.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  onClick={() => router.push(`/admin/published/${a.id}`)}
                >
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#083b7a] transition-colors line-clamp-2">
                          {a.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-black text-white rounded">
                            {a.articleType}
                          </span>
                          {a.issue && (
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-white text-black rounded">
                              Vol {a.issue.volume?.number} • Issue {a.issue.number}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Abstract Preview */}
                    {a.abstract && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {a.abstract}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                      {a.doi && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="line-clamp-1">{a.doi}</span>
                        </div>
                      )}
                      {a.totalPages && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>{a.totalPages} pages</span>
                        </div>
                      )}
                      {a.publishedAt && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{new Date(a.publishedAt).toLocaleDateString()}</span>
                        </div>
                      )}
                      {a.views && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{a.views} views</span>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs font-medium text-gray-500">Click to view details</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#083b7a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
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
