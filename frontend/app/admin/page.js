"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { createVolume, createIssue } from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import { useVolumes } from '../../hooks/useVolumes';
import { useSubmittedArticles, usePublishedArticles, usePublishArticle } from '../../hooks/useArticles';
import { useDownloadRequests, useApproveDownloadRequest, useDenyDownloadRequest } from '../../hooks/useDownloadRequests';

const AdminPage = () => {
  // TanStack Query hooks
  const { data: user, isLoading: authLoading, error: authError } = useAuth();
  const { data: volumes = [], isLoading: volumesLoading } = useVolumes();
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

  const handleCreateVolume = async (e) => {
    e.preventDefault();
    const num = parseInt(newVolumeNumber, 10);
    if (!num) return;
    try {
      await createVolume(num);
      // TanStack Query will automatically refetch volumes due to invalidation
      setNewVolumeNumber('');
    } catch (error) {
      console.error('Failed to create volume:', error);
    }
  };

  const handleCreateIssue = async (e) => {
    e.preventDefault();
    const { volumeId, number, month, year } = newIssue;
    if (!volumeId || !number || !month || !year) return;
    try {
      await createIssue(volumeId, parseInt(number,10), month, parseInt(year,10));
      // TanStack Query will automatically refetch volumes due to invalidation
      setNewIssue({ volumeId: '', number: '', month: '', year: '' });
    } catch (error) {
      console.error('Failed to create issue:', error);
    }
  };

  const handlePublish = async (articleId, issueId) => {
    try {
      await publishArticleMutation.mutateAsync({ articleId, issueId });
      // TanStack Query will automatically refetch articles due to invalidation
    } catch (error) {
      console.error('Failed to publish article:', error);
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
    <div className="min-h-screen w-full text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Panel</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/admin/submitted" className="px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm">
              📝 Submitted Articles
            </Link>
            <Link href="/admin/published" className="px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm">
              📚 Published Articles
            </Link>
            <Link href="/admin/publish" className="px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors text-sm">
              📨 Publish Articles
            </Link>
            <button onClick={() => window.history.back()} className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
              ← Back
            </button>
          </div>
        </div>

        <div className="grid  gap-8">
          {/* Volumes & Issues Section */}
          <section className="bg-gray-50 w-full rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Volumes & Issues</h2>
            
            {/* Add Volume Form */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Add New Volume</h3>
              <form onSubmit={handleCreateVolume} className="flex gap-2">
                <input 
                  type="number" 
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]" 
                  placeholder="Volume number" 
                  value={newVolumeNumber} 
                  onChange={(e)=>setNewVolumeNumber(e.target.value)} 
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
                  onChange={(e)=>setNewIssue(s=>({...s, volumeId: e.target.value}))}
                >
                  <option value="">Select Volume</option>
                  {volumes.map(v=> <option key={v.id} value={v.id}>Volume {v.number}</option>)}
                </select>
                <div className="grid grid-cols-3 gap-2">
                  <input 
                    type="number" 
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]" 
                    placeholder="Issue #" 
                    value={newIssue.number} 
                    onChange={(e)=>setNewIssue(s=>({...s, number: e.target.value}))} 
                  />
                  <select 
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]" 
                    value={newIssue.month} 
                    onChange={(e)=>setNewIssue(s=>({...s, month: e.target.value}))}
                  >
                    <option value="">Month</option>
                    {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <input 
                    type="number" 
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]" 
                    placeholder="Year" 
                    value={newIssue.year} 
                    onChange={(e)=>setNewIssue(s=>({...s, year: e.target.value}))} 
                  />
                </div>
                <button className="w-full px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors">
                  Add Issue
                </button>
              </form>
            </div>
            {/* Volumes List */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Existing Volumes</h3>
              {volumes.map(v => (
                <div key={v.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-lg text-gray-800">Volume {v.number}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Issues: {v.issues?.map(i=>`#${i.number} ${i.month} ${i.year}`).join(', ') || 'None'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats Section */}
          {/* <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Stats</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{submittedArticles.length}</div>
                    <div className="text-sm text-gray-600">Submitted Articles</div>
                  </div>
                  <Link href="/admin/submitted" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{publishedArticles.length}</div>
                    <div className="text-sm text-gray-600">Published Articles</div>
                  </div>
                  <Link href="/admin/published" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{volumes.length}</div>
                    <div className="text-sm text-gray-600">Total Volumes</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {volumes.reduce((sum, v) => sum + (v.issues?.length || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-600">Total Issues</div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>

        {/* Download Requests */}
        <section className="bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Download Requests</h2>
          <div className="space-y-3">
            {downloadRequests.map(req => (
              <div key={req.id} className="bg-white border rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-sm text-gray-700">
                  <div className="font-semibold text-gray-900">{req.article?.title || '—'}</div>
                  <div className="text-gray-600">
                    Volume {req.article?.issue?.volume?.number ?? '—'}
                    {typeof req.article?.issue?.number === 'number' && (<span> • Issue {req.article.issue.number}</span>)}
                  </div>
                  <div className="text-gray-600">Request by: {req.user?.email || req.userId}</div>
                  <div><span className="font-medium">Status:</span> {req.status}</div>
                </div>
                <div className="flex gap-2">
                  {req.status !== 'APPROVED' && <button className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm" onClick={async()=>{ await approveDownloadRequest(req.id); setDownloadRequests((prev)=>prev.map(r=> r.id===req.id ? {...r, status:'APPROVED'} : r)); }}>Approve</button>}
                  {req.status === 'PENDING' && <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm" onClick={async()=>{ await denyDownloadRequest(req.id); setDownloadRequests((prev)=>prev.map(r=> r.id===req.id ? {...r, status:'DENIED'} : r)); }}>Deny</button>}
                </div>
              </div>
            ))}
            {downloadRequests.length === 0 && (
              <div className="text-center text-gray-500 py-8 bg-white rounded-lg border">No download requests</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;

