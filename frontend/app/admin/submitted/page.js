"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';
import { useSubmittedArticles, usePublishArticle } from '../../../hooks/useArticles';
import { useVolumes } from '../../../hooks/useVolumes';
import { sanitizeText } from '../../../utils/sanitize';
import { revalidateContent } from '@/app/actions';

const SubmittedArticlesPage = () => {
  const router = useRouter();
  const { data: user, isLoading: authLoading } = useAuth();
  const { data: submittedArticles = [], isLoading: articlesLoading } = useSubmittedArticles();
  const { data: volumes = [], isLoading: volumesLoading } = useVolumes();
  const publishArticleMutation = usePublishArticle();

  const handlePublish = async (articleId, issueId) => {
    if (!issueId) {
      alert('Please select an issue first');
      return;
    }

    try {
      await publishArticleMutation.mutateAsync({ articleId, issueId });
      await revalidateContent('articles');
      await revalidateContent('volumes');
      alert('Article published successfully!');
    } catch (error) {
      console.error('Failed to publish article:', error);
      alert('Failed to publish article. Please try again.');
    }
  };

  const loading = authLoading || articlesLoading || volumesLoading;

  if (authLoading) {
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
    <div className="min-h-screen w-full text-justify text-black bg-white mt-16 py-8 px-5">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {submittedArticles.map(a => (
                <div
                  key={a.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  onClick={() => router.push(`/admin/submitted/${a.id}`)}
                >
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#083b7a] transition-colors line-clamp-2">
                          {sanitizeText(a.title || '')}
                        </h3>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">
                          {a.articleType}
                        </span>
                      </div>
                    </div>

                    {/* Abstract Preview */}
                    {a.abstract && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {sanitizeText(a.abstract)}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                      {a.totalPages && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>{a.totalPages} pages</span>
                        </div>
                      )}
                      {a.createdAt && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{new Date(a.createdAt).toLocaleDateString()}</span>
                        </div>
                      )}
                      {a.keywords && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span className="line-clamp-1">{a.keywords.split(',').length} keywords</span>
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
