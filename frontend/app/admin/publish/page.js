"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';
import { useVolumes } from '../../../hooks/useVolumes';
import { useSubmittedArticles, usePublishedArticles, useCreateAndPublishArticle, usePublishArticle } from '../../../hooks/useArticles';
import { useDownloadRequests } from '../../../hooks/useDownloadRequests';

const PublishArticlesPage = () => {
  // TanStack Query hooks
  const { data: user, isLoading: authLoading, error: authError } = useAuth();
  const { data: volumes = [], isLoading: volumesLoading } = useVolumes();
  const { data: submittedArticles = [], isLoading: submittedLoading } = useSubmittedArticles();
  const { data: publishedArticles = [], isLoading: publishedLoading } = usePublishedArticles();
  const { data: downloadRequests = [], isLoading: downloadLoading } = useDownloadRequests();

  // Mutations
  const createAndPublishMutation = useCreateAndPublishArticle();

  // Local state
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [publishing, setPublishing] = useState({});

  // Publish article form state
  const [publishForm, setPublishForm] = useState({
    title: '',
    abstract: '',
    keywords: '',
    pages: '',
    doi: '',
    issueId: '',
    file: null,
    scriptFile: null,
    authors: [{ name: '', email: '', affiliation: '', superscript: '' }]
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const publishArticleMutation = usePublishArticle();

  const handlePublish = async (articleId, issueId) => {
    if (!issueId) {
      alert('Please select an issue first');
      return;
    }

    try {
      await publishArticleMutation.mutateAsync({ articleId, issueId });
      alert('Article published successfully!');
    } catch (error) {
      console.error('Failed to publish article:', error);
      alert('Failed to publish article. Please try again.');
    }
  };

  const addAuthor = () => {
    setPublishForm(prev => ({
      ...prev,
      authors: [...prev.authors, { name: '', email: '', affiliation: '', superscript: '' }]
    }));
  };

  const removeAuthor = (index) => {
    setPublishForm(prev => ({
      ...prev,
      authors: prev.authors.filter((_, i) => i !== index)
    }));
  };

  const updateAuthor = (index, field, value) => {
    setPublishForm(prev => ({
      ...prev,
      authors: prev.authors.map((author, i) =>
        i === index ? { ...author, [field]: value } : author
      )
    }));
  };

  const handlePublishArticle = async (e) => {
    e.preventDefault();

    // Validate form
    if (!publishForm.title || !publishForm.abstract || !publishForm.issueId) {
      setSubmitMessage('Please fill in all required fields (Title, Abstract, and Issue)');
      return;
    }

    if (!publishForm.authors.some(author => author.name && author.email)) {
      setSubmitMessage('Please add at least one author with name and email');
      return;
    }

    setSubmitMessage('');

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('title', publishForm.title);
      formData.append('abstract', publishForm.abstract);
      formData.append('keywords', publishForm.keywords);
      formData.append('pages', publishForm.pages);
      formData.append('doi', publishForm.doi);
      formData.append('issueId', publishForm.issueId);
      formData.append('authors', JSON.stringify(publishForm.authors));

      if (publishForm.file) {
        formData.append('file', publishForm.file);
      }

      if (publishForm.scriptFile) {
        formData.append('script', publishForm.scriptFile);
      }

      // Use TanStack Query mutation
      await createAndPublishMutation.mutateAsync(formData);

      setSubmitMessage('Article published successfully!');

      // Reset form
      setPublishForm({
        title: '',
        abstract: '',
        keywords: '',
        pages: '',
        doi: '',
        issueId: '',
        file: null,
        scriptFile: null,
        authors: [{ name: '', email: '', affiliation: '', superscript: '' }]
      });

    } catch (error) {
      console.error('Failed to publish article:', error);
      setSubmitMessage(error.response?.data?.message || 'Failed to publish article. Please try again.');
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
          <h1 className="text-2xl md:text-3xl font-bold">Publish Articles</h1>
          <div className="flex gap-3">
            <Link href="/admin" className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
              ← Back to Admin
            </Link>
          </div>
        </div>

        {/* Publish New Article Form */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Publish New Article</h2>

          {submitMessage && (
            <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handlePublishArticle} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Article <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    onChange={(e) => setPublishForm(prev => ({ ...prev, file: e.target.files[0] }))}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {publishForm.file ? publishForm.file.name : 'No file chosen'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Script File (Optional)
                  </label>
                  <input
                    type="file"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    onChange={(e) => setPublishForm(prev => ({ ...prev, scriptFile: e.target.files[0] }))}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {publishForm.scriptFile ? publishForm.scriptFile.name : 'Upload any scripts or code files related to the research'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={publishForm.title}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Article title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Abstract <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] h-24"
                    value={publishForm.abstract}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, abstract: e.target.value }))}
                    placeholder="Article abstract"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={publishForm.keywords}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, keywords: e.target.value }))}
                    placeholder="Keywords (comma separated)"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pages</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={publishForm.pages}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, pages: e.target.value }))}
                    placeholder="e.g., 1-15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">DOI</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={publishForm.doi}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, doi: e.target.value }))}
                    placeholder="DOI"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Issue <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                    value={publishForm.issueId}
                    onChange={(e) => setPublishForm(prev => ({ ...prev, issueId: e.target.value }))}
                    required
                  >
                    <option value="">Select Issue</option>
                    {volumes.flatMap(v => (v.issues || []).map(i => ({ ...i, volumeNumber: v.number }))).map(i => (
                      <option key={i.id} value={i.id}>Vol {i.volumeNumber} - Issue {i.number} ({i.month} {i.year})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Authors Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Authors</h3>
              <div className="space-y-4">
                {publishForm.authors.map((author, index) => (
                  <div key={index} className="grid md:grid-cols-4 gap-4 p-4 border rounded-lg bg-gray-50">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                        value={author.name}
                        onChange={(e) => updateAuthor(index, 'name', e.target.value)}
                        placeholder="Author name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                        value={author.email}
                        onChange={(e) => updateAuthor(index, 'email', e.target.value)}
                        placeholder="Author email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                        value={author.affiliation}
                        onChange={(e) => updateAuthor(index, 'affiliation', e.target.value)}
                        placeholder="Institution"
                      />
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Superscript</label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]"
                          value={author.superscript}
                          onChange={(e) => updateAuthor(index, 'superscript', e.target.value)}
                          placeholder="1, 2, etc."
                        />
                      </div>
                      {publishForm.authors.length > 1 && (
                        <button
                          type="button"
                          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                          onClick={() => removeAuthor(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={addAuthor}
                >
                  ➕ Add Author
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={createAndPublishMutation.isPending}
                className="flex items-center gap-2 px-6 py-2 bg-[#083b7a] text-white rounded-lg hover:bg-[#0a4ea3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {createAndPublishMutation.isPending ? 'Publishing...' : '📨 Upload Article'}
              </button>
            </div>
          </form>
        </section>

        {/* Submitted Articles Section */}
        <section className="bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Submitted Articles</h2>
          <div className="space-y-4">
            {submittedArticles.map(a => (
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
                    {volumes.flatMap(v => (v.issues || []).map(i => ({ ...i, volumeNumber: v.number }))).map(i => (
                      <option key={i.id} value={i.id}>Vol {i.volumeNumber} - Issue {i.number} ({i.month} {i.year})</option>
                    ))}
                  </select>
                  <button
                    className="px-3 py-1 rounded bg-[#083b7a] text-white hover:bg-[#0a4ea3] text-sm transition-colors"
                    onClick={(e) => {
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
            {submittedArticles.length === 0 && (
              <div className="text-center text-gray-500 py-8 bg-white rounded-lg border">
                No submissions pending
              </div>
            )}
          </div>
        </section>

        {/* Published Articles Section */}
        <section className="bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Published Articles</h2>
          <div className="space-y-4">
            {publishedArticles.map(a => (
              <div key={a.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-800 mb-1">{a.title}</div>
                <div className="text-sm text-gray-600 mb-2">{a.articleType}</div>
                {a.issue && (
                  <div className="text-sm text-gray-500 mb-2">
                    Volume {a.issue.volume?.number} • Issue {a.issue.number} ({a.issue.month} {a.issue.year})
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <button
                    className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-sm transition-colors"
                    onClick={() => setExpandedArticleId(expandedArticleId === a.id ? null : a.id)}
                  >
                    {expandedArticleId === a.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                {expandedArticleId === a.id && (
                  <div className="text-sm text-gray-700 border-t pt-3 mt-3 space-y-2">
                    {a.doi && <div><span className="font-medium">DOI:</span> {a.doi}</div>}
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
            {publishedArticles.length === 0 && (
              <div className="text-center text-gray-500 py-8 bg-white rounded-lg border">
                No published articles
              </div>
            )}
          </div>
        </section>

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
                  {req.status !== 'APPROVED' && <button className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm" onClick={async () => { await approveDownloadRequest(req.id); setDownloadRequests((prev) => prev.map(r => r.id === req.id ? { ...r, status: 'APPROVED' } : r)); }}>Approve</button>}
                  {req.status === 'PENDING' && <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm" onClick={async () => { await denyDownloadRequest(req.id); setDownloadRequests((prev) => prev.map(r => r.id === req.id ? { ...r, status: 'DENIED' } : r)); }}>Deny</button>}
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

export default PublishArticlesPage;
