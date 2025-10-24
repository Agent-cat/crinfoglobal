"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { checkAuth, listSubmittedArticles, listVolumes, publishArticle, listPublishedArticles } from '../../../utils/api';

const SubmittedArticlesPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [submittedArticles, setSubmittedArticles] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
        if (me?.role !== 'EDITOR') {
          setAuthLoaded(true);
          return;
        }
        const [articles, vols] = await Promise.all([listSubmittedArticles(), listVolumes()]);
        setSubmittedArticles(articles);
        setVolumes(vols);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
      setLoading(false);
    };
    init();
  }, []);

  const handlePublish = async (articleId, issueId) => {
    if (!issueId) {
      alert('Please select an issue first');
      return;
    }
    
    setPublishing(prev => ({ ...prev, [articleId]: true }));
    try {
      await publishArticle(articleId, issueId);
      setSubmittedArticles((prev) => prev.filter(a => a.id !== articleId));
      
      // Refresh published articles count
      const published = await listPublishedArticles();
      console.log(`Article published! Total published: ${published.length}`);
    } catch (error) {
      console.error('Failed to publish article:', error);
      alert('Failed to publish article. Please try again.');
    } finally {
      setPublishing(prev => ({ ...prev, [articleId]: false }));
    }
  };

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
          <h1 className="text-2xl md:text-3xl font-bold">Submitted Articles</h1>
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
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{submittedArticles.length}</div>
            <div className="text-sm text-orange-800">Pending Review</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {submittedArticles.filter(a => a.pdfPath).length}
            </div>
            <div className="text-sm text-blue-800">With PDF</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {submittedArticles.reduce((sum, a) => sum + (a.totalPages || 0), 0)}
            </div>
            <div className="text-sm text-green-800">Total Pages</div>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Submitted Articles</h2>
          
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
                  <div className="h-3 bg-gray-200 animate-pulse rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : submittedArticles.length > 0 ? (
            <div className="space-y-4">
              {submittedArticles.map(a => (
                <div key={a.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Article Info */}
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 mb-2 text-lg">{a.title}</div>
                      <div className="text-sm text-gray-600 mb-2">{a.articleType}</div>
                      
                      {/* Article Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        {a.totalPages && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium">Pages:</span>
                            <span>{a.totalPages}</span>
                          </div>
                        )}
                        {a.createdAt && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium">Submitted:</span>
                            <span>{new Date(a.createdAt).toLocaleDateString()}</span>
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
                      
                      {/* Publish Section */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="font-medium mb-3 text-blue-800">Publish Article</div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <select 
                            className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            defaultValue=""
                            id={`issue-select-${a.id}`}
                          >
                            <option value="" disabled>Select Issue</option>
                            {volumes.flatMap(v => (v.issues || []).map(i => ({ ...i, volumeNumber: v.number }))).map(i => (
                              <option key={i.id} value={i.id}>
                                Vol {i.volumeNumber} - Issue {i.number} ({i.month} {i.year})
                              </option>
                            ))}
                          </select>
                          <button 
                            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => {
                              const select = document.getElementById(`issue-select-${a.id}`);
                              handlePublish(a.id, select.value);
                            }}
                            disabled={publishing[a.id]}
                          >
                            {publishing[a.id] ? 'Publishing...' : 'Publish'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 bg-white rounded-lg border-2 border-dashed">
              <div className="text-4xl mb-4">📝</div>
              <div className="text-lg font-medium mb-2">No submitted articles</div>
              <div className="text-sm">Articles will appear here once they are submitted for review.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmittedArticlesPage;
