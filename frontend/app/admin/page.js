"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { createVolume, createIssue, updateVolume, deleteVolume, updateIssue, deleteIssue } from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import { useVolumes } from '../../hooks/useVolumes';
import { useSubmittedArticles, usePublishedArticles, usePublishArticle } from '../../hooks/useArticles';
import { useDownloadRequests, useApproveDownloadRequest, useDenyDownloadRequest } from '../../hooks/useDownloadRequests';

const AdminPage = () => {
  // TanStack Query hooks
  const { data: user, isLoading: authLoading, error: authError } = useAuth();
  const { data: volumes = [], isLoading: volumesLoading, refetch: refetchVolumes } = useVolumes();
  const { data: submittedArticles = [], isLoading: submittedLoading } = useSubmittedArticles();
  const { data: publishedArticles = [], isLoading: publishedLoading } = usePublishedArticles();
  const { data: downloadRequests = [], isLoading: downloadLoading } = useDownloadRequests();

  const publishArticleMutation = usePublishArticle();
  const approveDownloadMutation = useApproveDownloadRequest();
  const denyDownloadMutation = useDenyDownloadRequest();

  // Local state
  const [newVolumeNumber, setNewVolumeNumber] = useState('');
  const [newIssue, setNewIssue] = useState({ volumeId: '', number: '', month: '', year: '' });
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [publishing, setPublishing] = useState({});
  const [editingVolume, setEditingVolume] = useState(null);
  const [editingIssue, setEditingIssue] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { type: 'volume'|'issue', id: string, name: string }

  const handleCreateVolume = async (e) => {
    e.preventDefault();
    const num = parseInt(newVolumeNumber, 10);
    if (!num) return;
    try {
      await createVolume(num);
      setNewVolumeNumber('');
      refetchVolumes();
    } catch (error) {
      console.error('Failed to create volume:', error);
      alert('Failed to create volume: ' + error.message);
    }
  };

  const handleCreateIssue = async (e) => {
    e.preventDefault();
    const { volumeId, number, month, year } = newIssue;
    if (!volumeId || !number || !month || !year) return;
    try {
      await createIssue(volumeId, parseInt(number, 10), month, parseInt(year, 10));
      setNewIssue({ volumeId: '', number: '', month: '', year: '' });
      refetchVolumes();
    } catch (error) {
      console.error('Failed to create issue:', error);
      alert('Failed to create issue: ' + error.message);
    }
  };

  const handlePublish = async (articleId, issueId) => {
    try {
      await publishArticleMutation.mutateAsync({ articleId, issueId });
    } catch (error) {
      console.error('Failed to publish article:', error);
    }
  };

  const handleUpdateVolume = async (volumeId, number) => {
    try {
      await updateVolume(volumeId, parseInt(number, 10));
      setEditingVolume(null);
      refetchVolumes();
    } catch (error) {
      console.error('Failed to update volume:', error);
      alert('Failed to update volume: ' + error.message);
    }
  };

  const handleDeleteVolume = async (volumeId) => {
    try {
      await deleteVolume(volumeId);
      setDeleteConfirm(null);
      refetchVolumes();
    } catch (error) {
      console.error('Failed to delete volume:', error);
      alert('Failed to delete volume: ' + error.message);
    }
  };

  const handleUpdateIssue = async (issueId, number, month, year) => {
    try {
      await updateIssue(issueId, parseInt(number, 10), month, parseInt(year, 10));
      setEditingIssue(null);
      refetchVolumes();
    } catch (error) {
      console.error('Failed to update issue:', error);
      alert('Failed to update issue: ' + error.message);
    }
  };

  const handleDeleteIssue = async (issueId) => {
    try {
      await deleteIssue(issueId);
      setDeleteConfirm(null);
      refetchVolumes();
    } catch (error) {
      console.error('Failed to delete issue:', error);
      alert('Failed to delete issue: ' + error.message);
    }
  };

  // Loading states
  if (authLoading) {
    return <div className="min-h-screen bg-white mt-16 py-8 px-5"><div className="max-w-4xl mx-auto"><div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-6" /></div></div>;
  }

  if (authError || !user) {
    return <div className="min-h-screen bg-white mt-16 py-8 px-5"><div className="max-w-2xl mx-auto text-center">Please sign in.</div></div>;
  }

  if (user.role !== 'EDITOR') {
    return <div className="min-h-screen bg-white mt-16 py-8 px-5"><div className="max-w-2xl mx-auto text-center">Forbidden. Editor access required.</div></div>;
  }

  return (
    <div className="min-h-screen w-full text-justify text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Panel</h1>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/admin/submitted" className="px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm text-center">
              Submitted Articles
            </Link>
            <Link href="/admin/published" className="px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm text-center">
              Published Articles
            </Link>
            <Link href="/admin/publish" className="px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors text-sm text-center">
              📨 Publish Articles
            </Link>
            <Link href="/admin/download-requests" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm text-center">
              📥 Full Access Requests
            </Link>
            <button onClick={() => window.history.back()} className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
              ← Back
            </button>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Volumes & Issues Section */}
          <section className="bg-gray-50 w-full rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Volumes & Issues Management</h2>

            {/* Add Volume Form */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Add New Volume</h3>
              <form onSubmit={handleCreateVolume} className="flex gap-2">
                <input
                  type="number"
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                  placeholder="Volume number"
                  value={newVolumeNumber}
                  onChange={(e) => setNewVolumeNumber(e.target.value)}
                />
                <button className="px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors">
                  Add Volume
                </button>
              </form>
            </div>

            {/* Add Issue Form */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Add New Issue</h3>
              <form onSubmit={handleCreateIssue} className="space-y-3">
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                  value={newIssue.volumeId}
                  onChange={(e) => setNewIssue(s => ({ ...s, volumeId: e.target.value }))}
                >
                  <option value="">Select Volume</option>
                  {volumes.map(v => <option key={v.id} value={v.id}>Volume {v.number}</option>)}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="number"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    placeholder="Issue #"
                    value={newIssue.number}
                    onChange={(e) => setNewIssue(s => ({ ...s, number: e.target.value }))}
                  />
                  <select
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={newIssue.month}
                    onChange={(e) => setNewIssue(s => ({ ...s, month: e.target.value }))}
                  >
                    <option value="">Month</option>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    placeholder="Year"
                    value={newIssue.year}
                    onChange={(e) => setNewIssue(s => ({ ...s, year: e.target.value }))}
                  />
                </div>
                <button className="w-full px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors">
                  Add Issue
                </button>
              </form>
            </div>

            {/* Volumes Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <h3 className="font-medium text-gray-700 p-4 bg-gray-100 border-b">Existing Volumes</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Volume Number</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Issues</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {volumes.map(v => (
                      <React.Fragment key={v.id}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            {editingVolume?.id === v.id ? (
                              <input
                                type="number"
                                className="border rounded px-2 py-1 w-24"
                                value={editingVolume.number}
                                onChange={(e) => setEditingVolume({ ...editingVolume, number: e.target.value })}
                              />
                            ) : (
                              <span className="font-semibold text-gray-800">Volume {v.number}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {v.issues?.length || 0} issue(s)
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex gap-2 justify-end">
                              {editingVolume?.id === v.id ? (
                                <>
                                  <button
                                    onClick={() => handleUpdateVolume(v.id, editingVolume.number)}
                                    className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => setEditingVolume(null)}
                                    className="px-3 py-1 text-sm rounded bg-gray-500 text-white hover:bg-gray-600"
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => setEditingVolume({ id: v.id, number: v.number })}
                                    className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirm({ type: 'volume', id: v.id, name: `Volume ${v.number}`, issueCount: v.issues?.length || 0 })}
                                    className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                        {/* Issues sub-table */}
                        {v.issues && v.issues.length > 0 && (
                          <tr>
                            <td colSpan="3" className="px-4 py-2 bg-gray-50">
                              <div className="ml-8">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b border-gray-300">
                                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Issue #</th>
                                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Month</th>
                                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Year</th>
                                      <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {v.issues.map(issue => (
                                      <tr key={issue.id} className="border-b border-gray-200">
                                        <td className="px-4 py-2">
                                          {editingIssue?.id === issue.id ? (
                                            <input
                                              type="number"
                                              className="border rounded px-2 py-1 w-20"
                                              value={editingIssue.number}
                                              onChange={(e) => setEditingIssue({ ...editingIssue, number: e.target.value })}
                                            />
                                          ) : (
                                            <span className="text-sm">#{issue.number}</span>
                                          )}
                                        </td>
                                        <td className="px-4 py-2">
                                          {editingIssue?.id === issue.id ? (
                                            <select
                                              className="border rounded px-2 py-1"
                                              value={editingIssue.month}
                                              onChange={(e) => setEditingIssue({ ...editingIssue, month: e.target.value })}
                                            >
                                              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                                                <option key={m} value={m}>{m}</option>
                                              ))}
                                            </select>
                                          ) : (
                                            <span className="text-sm">{issue.month}</span>
                                          )}
                                        </td>
                                        <td className="px-4 py-2">
                                          {editingIssue?.id === issue.id ? (
                                            <input
                                              type="number"
                                              className="border rounded px-2 py-1 w-24"
                                              value={editingIssue.year}
                                              onChange={(e) => setEditingIssue({ ...editingIssue, year: e.target.value })}
                                            />
                                          ) : (
                                            <span className="text-sm">{issue.year}</span>
                                          )}
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                          <div className="flex gap-2 justify-end">
                                            {editingIssue?.id === issue.id ? (
                                              <>
                                                <button
                                                  onClick={() => handleUpdateIssue(issue.id, editingIssue.number, editingIssue.month, editingIssue.year)}
                                                  className="px-2 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                                                >
                                                  Save
                                                </button>
                                                <button
                                                  onClick={() => setEditingIssue(null)}
                                                  className="px-2 py-1 text-xs rounded bg-gray-500 text-white hover:bg-gray-600"
                                                >
                                                  Cancel
                                                </button>
                                              </>
                                            ) : (
                                              <>
                                                <button
                                                  onClick={() => setEditingIssue({ id: issue.id, number: issue.number, month: issue.month, year: issue.year })}
                                                  className="px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700"
                                                >
                                                  Edit
                                                </button>
                                                <button
                                                  onClick={() => setDeleteConfirm({ type: 'issue', id: issue.id, name: `Issue #${issue.number} (${issue.month} ${issue.year})` })}
                                                  className="px-2 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700"
                                                >
                                                  Delete
                                                </button>
                                              </>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                {volumes.length === 0 && (
                  <div className="text-center text-gray-500 py-8">No volumes created yet</div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                Confirm Deletion
              </h3>

              <p className="text-center text-gray-600 mb-4">
                Are you sure you want to delete <span className="font-semibold text-gray-900">{deleteConfirm.name}</span>?
              </p>

              {deleteConfirm.type === 'volume' && deleteConfirm.issueCount > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ This will also delete <span className="font-semibold">{deleteConfirm.issueCount} issue(s)</span> associated with this volume.
                  </p>
                </div>
              )}

              <p className="text-center text-sm text-gray-500 mb-6">
                This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (deleteConfirm.type === 'volume') {
                      handleDeleteVolume(deleteConfirm.id);
                    } else {
                      handleDeleteIssue(deleteConfirm.id);
                    }
                  }}
                  className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
