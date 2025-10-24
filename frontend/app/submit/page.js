"use client";
import React, { useEffect, useState } from 'react';
import { checkAuth, submitArticle } from '../../utils/api';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const SubmitPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { mainFile, additionalZip, authors, ...rest } = form;
    try {
      setErrorMsg('');
      setSubmitting(true);
      const formData = new FormData();
      Object.entries(rest).forEach(([k,v]) => {
        if (v !== undefined && v !== null) formData.append(k, v);
      });
      formData.append('authors', JSON.stringify(authors));
      if (mainFile) formData.append('pdf', mainFile);
      if (additionalZip) formData.append('attachments', additionalZip);
      await submitArticle(formData);
      
      // Show success modal instead of alert
      setShowSuccessModal(true);
      
      setForm((prev)=>({
        ...prev,
        title:'', articleType:'', keywords:'', abstract:'', conflictOfInterest:'', fundingInfo:'', dataAvailability:'',
        authors: [{ name:'', email:'', affiliation:'', superscript:'' }],
        mainFile:null, additionalZip:null,
      }));
    } catch (err) {
      setErrorMsg('Failed to submit article');
    }
    finally { setSubmitting(false); }
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

  // Success Modal Component
  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Article Submitted Successfully! 🎉
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for submitting your article to <strong>Frontiers in Engineering and Informatics</strong>. 
                Your submission has been received and will undergo our peer review process.
              </p>
              
              {/* Additional Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Our editorial team will review your submission</li>
                  <li>• We'll contact you within 2-3 business days</li>
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 bg-[#083b7a] hover:bg-[#0a4ea3] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Continue
                </button>
                <Link
                  href="/volumes"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                  onClick={() => setShowSuccessModal(false)}
                >
                  View Publications
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <SuccessModal />
      <div className='min-h-screen text-black text-md bg-white mt-16 py-8 px-5'>
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
            <button type="submit" disabled={submitting} className={`px-6 py-2.5 rounded-lg font-semibold text-white ${submitting? 'bg-[#0a4ea3]/60 cursor-not-allowed' : 'bg-[#083b7a] hover:bg-[#0a4ea3]'}`}>
              {submitting ? 'Submitting...' : 'Submit Article'}
            </button>
            {errorMsg && <span className="ml-3 text-sm text-red-600">{errorMsg}</span>}
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SubmitPage;
