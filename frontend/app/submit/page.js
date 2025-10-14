"use client";
import React, { useEffect, useState } from 'react';
import { checkAuth } from '../../utils/api';
import Link from 'next/link';

const SubmitPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    title: '',
    articleType: '',
    keywords: '',
    abstract: '',
    conflictOfInterest: '',
    fundingInfo: '',
    dataAvailability: '',
    authors: [
      { name: '', email: '', affiliation: '', superscript: '' }
    ],
    mainFile: null,
    additionalZip: null,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
    };
    load();
  }, []);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateAuthor = (index, field, value) => {
    setForm((prev) => {
      const authors = prev.authors.slice();
      authors[index] = { ...authors[index], [field]: value };
      return { ...prev, authors };
    });
  };

  const addAuthor = () => {
    setForm((prev) => ({
      ...prev,
      authors: [...prev.authors, { name: '', email: '', affiliation: '', superscript: '' }]
    }));
  };

  const removeAuthor = (index) => {
    setForm((prev) => ({
      ...prev,
      authors: prev.authors.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend submission endpoint when available
    // For now, just log payload to verify
    // Avoid logging files in production; this is temporary
    const { mainFile, additionalZip, ...rest } = form;
    console.log('Submission payload (without files):', rest);
    console.log('Main file:', mainFile);
    console.log('Additional zip:', additionalZip);
    alert('Submission saved locally. Backend integration pending.');
  };

  if (!authLoaded) {
    return (
      <div className='min-h-screen bg-white mt-16 py-8 px-5'>
        <div className="max-w-4xl mx-auto">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-6" />
          <div className="space-y-3">
            <div className="h-10 bg-gray-200 animate-pulse rounded" />
            <div className="h-10 bg-gray-200 animate-pulse rounded" />
            <div className="h-24 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='min-h-screen text-black flex items-center justify-center bg-white mt-16 py-8 px-5'>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Please sign in to submit an article</h1>
          <p className="mb-6 text-gray-600">You must be logged in to access the submission form.</p>
          <div className="flex items-center justify-center space-x-3">
            <Link href="/auth/signin" className="px-5 py-2.5 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3]">Sign In</Link>
            <Link href="/auth/signup" className="px-5 py-2.5 rounded-lg border border-[#083b7a] text-[#083b7a] hover:bg-[#e6f0ff]">Create Account</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen text-black text-xl bg-white mt-16 py-8 px-5'>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Submit Your Article to Frontiers in Engineering and Informatics</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Title</label>
            <input type="text" value={form.title} onChange={(e) => updateField('title', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Article Type</label>
            <select value={form.articleType} onChange={(e) => updateField('articleType', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" required>
              <option value="">Select a type</option>
              <option value="Research Article">Research Article</option>
              <option value="Review">Review</option>
              <option value="Short Communication">Short Communication</option>
              <option value="Case Study">Case Study</option>
              <option value="Editorial">Editorial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
            <input type="text" value={form.keywords} onChange={(e) => updateField('keywords', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" placeholder="e.g., AI, machine learning, data mining" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Abstract</label>
            <textarea value={form.abstract} onChange={(e) => updateField('abstract', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" rows={6} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Conflict of Interest</label>
            <input type="text" value={form.conflictOfInterest} onChange={(e) => updateField('conflictOfInterest', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" placeholder="The authors declare no conflict of interest." />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Funding Information</label>
            <input type="text" value={form.fundingInfo} onChange={(e) => updateField('fundingInfo', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" placeholder="This work was supported by XYZ funding agency. Funding Reference ID: xxxxxxxxx" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data Availability Statement</label>
            <input type="text" value={form.dataAvailability} onChange={(e) => updateField('dataAvailability', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" placeholder="All data generated or analyzed during this study are included in this published article." />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Authors</h2>
            <div className="space-y-4">
              {form.authors.map((author, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" value={author.name} onChange={(e) => updateAuthor(index, 'name', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" required={index===0} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" value={author.email} onChange={(e) => updateAuthor(index, 'email', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" required={index===0} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
                      <input type="text" value={author.affiliation} onChange={(e) => updateAuthor(index, 'affiliation', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Superscript (e.g., 1*)</label>
                      <input type="text" value={author.superscript} onChange={(e) => updateAuthor(index, 'superscript', e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3]" />
                    </div>
                  </div>
                  <div className="flex justify-end mt-3">
                    {form.authors.length > 1 && (
                      <button type="button" onClick={() => removeAuthor(index)} className="text-red-600 hover:text-red-700 text-sm font-medium">
                        Remove Author
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={addAuthor} className="mt-3 px-4 py-2 rounded-lg border border-[#083b7a] text-[#083b7a] hover:bg-[#e6f0ff]">
              + Add Author
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Main Submission File (Word/PDF)</label>
            <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => updateField('mainFile', e.target.files?.[0] || null)} className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#083b7a] file:text-white hover:file:bg-[#0a4ea3]" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Additional ZIP (Optional)</label>
            <input type="file" accept=".zip,application/zip,application/x-zip-compressed" onChange={(e) => updateField('additionalZip', e.target.files?.[0] || null)} className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#083b7a] file:text-white hover:file:bg-[#0a4ea3]" />
          </div>

          <div className="pt-2">
            <button type="submit" className="px-6 py-2.5 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] font-semibold">
              Submit Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;
