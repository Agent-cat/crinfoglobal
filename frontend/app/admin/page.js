"use client";
import React, { useEffect, useState } from 'react';
import { checkAuth, createVolume, createIssue, listVolumes, listSubmittedArticles, publishArticle, listDownloadRequests, approveDownloadRequest, denyDownloadRequest } from '../../utils/api';

const AdminPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [volumes, setVolumes] = useState([]);
  const [articles, setArticles] = useState([]);
  const [newVolumeNumber, setNewVolumeNumber] = useState('');
  const [newIssue, setNewIssue] = useState({ volumeId: '', number: '', month: '', year: '' });
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [downloadRequests, setDownloadRequests] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
        if (me?.role !== 'EDITOR') {
          setAuthLoaded(true);
          return;
        }
        const [v, a, r] = await Promise.all([listVolumes(), listSubmittedArticles(), listDownloadRequests()]);
        setVolumes(v);
        setArticles(a);
        setDownloadRequests(r);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
    };
    init();
  }, []);

  const handleCreateVolume = async (e) => {
    e.preventDefault();
    const num = parseInt(newVolumeNumber, 10);
    if (!num) return;
    const v = await createVolume(num);
    setVolumes((prev) => [...prev, v]);
    setNewVolumeNumber('');
  };

  const handleCreateIssue = async (e) => {
    e.preventDefault();
    const { volumeId, number, month, year } = newIssue;
    if (!volumeId || !number || !month || !year) return;
    const issue = await createIssue(volumeId, parseInt(number,10), month, parseInt(year,10));
    setVolumes((prev) => prev.map(v => v.id === volumeId ? { ...v, issues: [...(v.issues || []), issue] } : v));
    setNewIssue({ volumeId: '', number: '', month: '', year: '' });
  };

  const handlePublish = async (articleId, issueId) => {
    await publishArticle(articleId, issueId);
    setArticles((prev) => prev.filter(a => a.id !== articleId));
  };

  if (!authLoaded) {
    return <div className="min-h-screen bg-white mt-16 py-8 px-5"><div className="max-w-4xl mx-auto"><div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-6" /></div></div>;
  }

  if (!user) {
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
          <button onClick={() => history.back()} className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
            ← Back
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Volumes & Issues Section */}
          <section className="bg-gray-50 rounded-lg p-6">
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

          {/* Submitted Articles Section */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Submitted Articles</h2>
            <div className="space-y-4">
              {articles.map(a => (
                <div key={a.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-800 mb-1">{a.title}</div>
                  <div className="text-sm text-gray-600 mb-3">{a.articleType}</div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 mb-3">
                    <button
                      className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-sm transition-colors"
                      onClick={() => setExpandedArticleId(expandedArticleId === a.id ? null : a.id)}
                    >
                      {expandedArticleId === a.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <select className="flex-1 border rounded px-2 py-1 text-sm" defaultValue="">
                      <option value="" disabled>Select Issue</option>
                      {volumes.flatMap(v=> (v.issues||[]).map(i=> ({...i, volumeNumber: v.number}))).map(i => (
                        <option key={i.id} value={i.id}>Vol {i.volumeNumber} - Issue {i.number} ({i.month} {i.year})</option>
                      ))}
                    </select>
                    <button 
                      className="px-3 py-1 rounded bg-[#083b7a] text-white hover:bg-[#0a4ea3] text-sm transition-colors" 
                      onClick={(e)=>{
                        const select = e.currentTarget.previousSibling;
                        if (!select || !(select instanceof HTMLSelectElement) || !select.value) return;
                        handlePublish(a.id, select.value);
                      }}
                    >
                      Publish
                    </button>
                  </div>
                  
                  {expandedArticleId === a.id && (
                    <div className="text-sm text-gray-700 border-t pt-3 mt-3 space-y-2">
                      {a.keywords && <div><span className="font-medium">Keywords:</span> {a.keywords}</div>}
                      {a.abstract && (
                        <div>
                          <div className="font-medium mb-1">Abstract</div>
                          <div className="whitespace-pre-wrap text-gray-600">{a.abstract}</div>
                        </div>
                      )}
                      {a.pdfPath && (
                        <div className="flex items-center gap-2">
                          <a 
                            className="text-blue-700 hover:underline" 
                            href={a.pdfPath.startsWith('/api/') ? `http://localhost:8000${a.pdfPath}` : a.pdfPath} 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download PDF
                          </a>
                          {typeof a.totalPages === 'number' && (
                            <span className="text-gray-500">({a.totalPages} pages)</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {articles.length === 0 && (
                <div className="text-center text-gray-500 py-8 bg-white rounded-lg border">
                  No submissions pending
                </div>
              )}
            </div>
          </section>

          {/* Download Requests */}
          <section className="bg-gray-50 rounded-lg p-6">
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
    </div>
  );
};

export default AdminPage;

