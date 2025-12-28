"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';
import { useDownloadRequests, useApproveDownloadRequest, useDenyDownloadRequest } from '../../../hooks/useDownloadRequests';

const DownloadRequestsPage = () => {
  const { data: user, isLoading: authLoading, error: authError } = useAuth();
  const { data: downloadRequests = [], isLoading: downloadLoading, refetch } = useDownloadRequests();
  const approveDownloadMutation = useApproveDownloadRequest();
  const denyDownloadMutation = useDenyDownloadRequest();

  const [filter, setFilter] = useState('ALL'); // ALL, PENDING, APPROVED, DENIED

  const handleApprove = async (requestId) => {
    try {
      await approveDownloadMutation.mutateAsync(requestId);
      refetch();
    } catch (error) {
      console.error('Failed to approve request:', error);
      alert('Failed to approve request: ' + error.message);
    }
  };

  const handleDeny = async (requestId) => {
    try {
      await denyDownloadMutation.mutateAsync(requestId);
      refetch();
    } catch (error) {
      console.error('Failed to deny request:', error);
      alert('Failed to deny request: ' + error.message);
    }
  };

  // Loading states
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

  if (authError || !user) {
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

  // Filter and sort requests - PENDING first, then by date
  const filteredRequests = downloadRequests
    .filter(req => {
      if (filter === 'ALL') return true;
      return req.status === filter;
    })
    .sort((a, b) => {
      // Sort by status priority: PENDING > APPROVED > DENIED
      const statusPriority = { 'PENDING': 0, 'APPROVED': 1, 'DENIED': 2 };
      const priorityDiff = statusPriority[a.status] - statusPriority[b.status];

      if (priorityDiff !== 0) return priorityDiff;

      // If same status, sort by date (newest first)
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  // Statistics
  const stats = {
    total: downloadRequests.length,
    pending: downloadRequests.filter(r => r.status === 'PENDING').length,
    approved: downloadRequests.filter(r => r.status === 'APPROVED').length,
    denied: downloadRequests.filter(r => r.status === 'DENIED').length,
  };

  return (
    <div className="min-h-screen w-full text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Full Access Requests</h1>
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

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 text-center border-2 border-gray-200">
            <div className="text-2xl font-bold text-gray-700">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Full Access Requests</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center border-2 border-orange-200">
            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
            <div className="text-sm text-orange-800">Pending</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center border-2 border-green-200">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <div className="text-sm text-green-800">Approved</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center border-2 border-red-200">
            <div className="text-2xl font-bold text-red-600">{stats.denied}</div>
            <div className="text-sm text-red-800">Denied</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['ALL', 'PENDING', 'APPROVED', 'DENIED'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === status
                ? 'bg-[#083b7a] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b hidden sm:table-header-group">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Article</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Volume/Issue</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Requested By</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 block sm:table-row-group">
                {downloadLoading ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                      Loading requests...
                    </td>
                  </tr>
                ) : filteredRequests.length > 0 ? (
                  filteredRequests.map(req => (
                    <tr key={req.id} className="hover:bg-gray-50 block sm:table-row bg-white rounded-lg shadow-sm sm:shadow-none mb-4 sm:mb-0 border sm:border-0 p-4 sm:p-0">
                      <td className="sm:px-4 sm:py-3 block sm:table-cell mb-2 sm:mb-0">
                        <span className="sm:hidden font-semibold text-gray-700 block mb-1">Article:</span>
                        <div className="font-medium text-gray-900 line-clamp-2">
                          {req.article?.title || 'Unknown Article'}
                        </div>
                      </td>
                      <td className="sm:px-4 sm:py-3 text-sm text-gray-600 block sm:table-cell mb-2 sm:mb-0">
                        <span className="sm:hidden font-semibold text-gray-700 block mb-1">Volume/Issue:</span>
                        {req.article?.issue ? (
                          <div>
                            <div>Vol {req.article.issue.volume?.number ?? '—'}</div>
                            <div>Issue {req.article.issue.number ?? '—'}</div>
                          </div>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="sm:px-4 sm:py-3 text-sm text-gray-600 block sm:table-cell mb-2 sm:mb-0">
                        <span className="sm:hidden font-semibold text-gray-700 block mb-1">Requested By:</span>
                        <div>{req.user?.userName || 'Unknown'}</div>
                        <div className="text-xs text-gray-500">{req.user?.email || req.userId}</div>
                      </td>
                      <td className="sm:px-4 sm:py-3 block sm:table-cell mb-2 sm:mb-0">
                        <span className="sm:hidden font-semibold text-gray-700 block mb-1">Status:</span>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${req.status === 'PENDING' ? 'bg-orange-100 text-orange-800' :
                          req.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="sm:px-4 sm:py-3 text-sm text-gray-600 block sm:table-cell mb-4 sm:mb-0">
                        <span className="sm:hidden font-semibold text-gray-700 block mb-1">Date:</span>
                        {new Date(req.createdAt).toLocaleDateString()}
                      </td>
                      <td className="sm:px-4 sm:py-3 text-right block sm:table-cell">
                        <div className="flex gap-2 justify-end sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0">
                          {req.status === 'PENDING' && (
                            <>
                              <button
                                onClick={() => handleApprove(req.id)}
                                className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                                disabled={approveDownloadMutation.isLoading}
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleDeny(req.id)}
                                className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
                                disabled={denyDownloadMutation.isLoading}
                              >
                                Deny
                              </button>
                            </>
                          )}
                          {req.status === 'DENIED' && (
                            <button
                              onClick={() => handleApprove(req.id)}
                              className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                              disabled={approveDownloadMutation.isLoading}
                            >
                              Approve
                            </button>
                          )}
                          {req.status === 'APPROVED' && (
                            <span className="text-sm text-gray-500">No actions</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-12 text-center">
                      <div className="text-4xl mb-4">📥</div>
                      <div className="text-lg font-medium text-gray-700 mb-2">
                        No {filter !== 'ALL' ? filter.toLowerCase() : ''} requests found
                      </div>
                      <div className="text-sm text-gray-500">
                        Full Access requests will appear here
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadRequestsPage;
