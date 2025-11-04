"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { checkAuth, listPublishedArticles, updateArticle } from '../../../utils/api';

const PublishedArticlesPage = () => {
  const router = useRouter();
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [publishedArticles, setPublishedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState(null);
  const [editForm, setEditForm] = useState({});

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

  const handleEditClick = (article) => {
    setEditingArticle(article);
    setEditForm({
      title: article.title || '',
      abstract: article.abstract || '',
      keywords: article.keywords || '',
      doi: article.doi || '',
      totalPages: article.totalPages || '',
      articleType: article.articleType || 'Research Article',
    });
  };

  const handleEditSave = async () => {
    if (!editingArticle) return;
    try {
      await updateArticle(editingArticle.id, editForm);
      // Refresh the articles list
      const articles = await listPublishedArticles();
      setPublishedArticles(articles);
      setEditingArticle(null);
      setEditForm({});
      alert('Article updated successfully!');
    } catch (error) {
      console.error('Failed to update article:', error);
      alert('Failed to update article: ' + error.message);
    }
  };

  const handleEditCancel = () => {
    setEditingArticle(null);
    setEditForm({});
  };

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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditClick(a);
                        }}
                        className="px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        ✏️ Edit
                      </button>
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

        {/* Edit Modal */}
        {editingArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Article</h2>
                
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                    />
                  </div>

                  {/* Article Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Article Type</label>
                    <select
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      value={editForm.articleType}
                      onChange={(e) => setEditForm({...editForm, articleType: e.target.value})}
                    >
                      <option value="Research Article">Research Article</option>
                      <option value="Review Article">Review Article</option>
                      <option value="Case Study">Case Study</option>
                      <option value="Short Communication">Short Communication</option>
                      <option value="Editorial">Editorial</option>
                    </select>
                  </div>

                  {/* Abstract */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Abstract</label>
                    <textarea
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      rows="6"
                      value={editForm.abstract}
                      onChange={(e) => setEditForm({...editForm, abstract: e.target.value})}
                    />
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      value={editForm.keywords}
                      onChange={(e) => setEditForm({...editForm, keywords: e.target.value})}
                      placeholder="Separate with commas"
                    />
                  </div>

                  {/* DOI */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DOI</label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      value={editForm.doi}
                      onChange={(e) => setEditForm({...editForm, doi: e.target.value})}
                    />
                  </div>

                  {/* Total Pages */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Pages</label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                      value={editForm.totalPages}
                      onChange={(e) => setEditForm({...editForm, totalPages: e.target.value})}
                    />
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleEditSave}
                    className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors font-medium"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleEditCancel}
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishedArticlesPage;
