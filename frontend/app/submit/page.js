"use client";
import React, { useEffect, useState } from 'react';
import { checkAuth, submitArticle } from '../../utils/api';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Step content components defined outside to prevent re-creation on each render
const Step1Content = ({ form, updateField }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Full Title <span className="text-red-500">*</span>
      </label>
      <input 
        type="text" 
        value={form.title} 
        onChange={(e) => updateField('title', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        placeholder="Enter your article title"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Article Type <span className="text-red-500">*</span>
      </label>
      <select 
        value={form.articleType} 
        onChange={(e) => updateField('articleType', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all"
      >
        <option value="">Select a type</option>
        <option value="Research Article">Research Article</option>
        <option value="Review">Review</option>
        <option value="Short Communication">Short Communication</option>
        <option value="Case Study">Case Study</option>
        <option value="Editorial">Editorial</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Keywords
      </label>
      <input 
        type="text" 
        value={form.keywords} 
        onChange={(e) => updateField('keywords', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        placeholder="e.g., AI, machine learning, data mining"
      />
      <p className="mt-1 text-xs text-gray-500">Separate keywords with commas</p>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Abstract <span className="text-red-500">*</span>
      </label>
      <textarea 
        value={form.abstract} 
        onChange={(e) => updateField('abstract', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        rows={8}
        placeholder="Provide a brief summary of your research..."
      />
    </div>
  </>
);

const Step2Content = ({ form, updateAuthor, addAuthor, removeAuthor }) => (
  <>
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Author Information</h3>
      <p className="text-sm text-gray-600">Add all authors who contributed to this research</p>
    </div>
    
    <div className="space-y-4">
      {form.authors.map((author, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border border-gray-200 rounded-lg p-5 bg-gray-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900">Author {index + 1}</h4>
            {form.authors.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeAuthor(index)} 
                className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name {index === 0 && <span className="text-red-500">*</span>}
              </label>
              <input 
                type="text" 
                value={author.name} 
                onChange={(e) => updateAuthor(index, 'name', e.target.value)} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] bg-white" 
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email {index === 0 && <span className="text-red-500">*</span>}
              </label>
              <input 
                type="email" 
                value={author.email} 
                onChange={(e) => updateAuthor(index, 'email', e.target.value)} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] bg-white" 
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
              <input 
                type="text" 
                value={author.affiliation} 
                onChange={(e) => updateAuthor(index, 'affiliation', e.target.value)} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] bg-white" 
                placeholder="Institution/Organization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Superscript</label>
              <input 
                type="text" 
                value={author.superscript} 
                onChange={(e) => updateAuthor(index, 'superscript', e.target.value)} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] bg-white" 
                placeholder="e.g., 1*"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <button 
      type="button" 
      onClick={addAuthor} 
      className="mt-4 px-4 py-2 rounded-lg border-2 border-[#083b7a] text-[#083b7a] hover:bg-[#e6f0ff] transition-colors font-medium flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Add Another Author
    </button>
  </>
);

const Step3Content = ({ form, updateField }) => (
  <>
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Information</h3>
      <p className="text-sm text-gray-600">Optional but recommended for transparency</p>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Conflict of Interest</label>
      <input 
        type="text" 
        value={form.conflictOfInterest} 
        onChange={(e) => updateField('conflictOfInterest', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        placeholder="The authors declare no conflict of interest."
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Funding Information</label>
      <textarea 
        value={form.fundingInfo} 
        onChange={(e) => updateField('fundingInfo', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        rows={3}
        placeholder="This work was supported by XYZ funding agency. Funding Reference ID: xxxxxxxxx"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Data Availability Statement</label>
      <textarea 
        value={form.dataAvailability} 
        onChange={(e) => updateField('dataAvailability', e.target.value)} 
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b7a] focus:border-transparent transition-all" 
        rows={3}
        placeholder="All data generated or analyzed during this study are included in this published article."
      />
    </div>
  </>
);

const Step4Content = ({ form, updateField }) => (
  <>
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Files</h3>
      <p className="text-sm text-gray-600">Upload your manuscript and any supporting files</p>
    </div>

    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#083b7a] transition-colors">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Main Submission File (Word/PDF) <span className="text-red-500">*</span>
        </label>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          onChange={(e) => updateField('mainFile', e.target.files?.[0] || null)} 
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#083b7a] file:text-white hover:file:bg-[#0a4ea3] file:cursor-pointer"
        />
        {form.mainFile && (
          <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {form.mainFile.name}
          </p>
        )}
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#083b7a] transition-colors">
        <label className="block text-sm font-medium text-gray-700 mb-3">Additional ZIP (Optional)</label>
        <input 
          type="file" 
          accept=".zip,application/zip,application/x-zip-compressed" 
          onChange={(e) => updateField('additionalZip', e.target.files?.[0] || null)} 
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#083b7a] file:text-white hover:file:bg-[#0a4ea3] file:cursor-pointer"
        />
        {form.additionalZip && (
          <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {form.additionalZip.name}
          </p>
        )}
        <p className="mt-2 text-xs text-gray-500">Upload supplementary materials, figures, or datasets</p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#083b7a] transition-colors">
        <label className="block text-sm font-medium text-gray-700 mb-3">Script File (Optional)</label>
        <input 
          type="file" 
          onChange={(e) => updateField('scriptFile', e.target.files?.[0] || null)} 
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#083b7a] file:text-white hover:file:bg-[#0a4ea3] file:cursor-pointer"
        />
        {form.scriptFile && (
          <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {form.scriptFile.name}
          </p>
        )}
        <p className="mt-2 text-xs text-gray-500">Upload any scripts or code files related to your research</p>
      </div>
    </div>
  </>
);

const SubmitPage = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
    scriptFile: null,
  });

  const steps = [
    { number: 1, title: 'Article Details', icon: '1' },
    { number: 2, title: 'Authors', icon: '2' },
    { number: 3, title: 'Additional Info', icon: '3' },
    { number: 4, title: 'Upload Files', icon: '4' },
  ];

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

  const validateStep = (step) => {
    switch(step) {
      case 1:
        return form.title && form.articleType && form.abstract;
      case 2:
        return form.authors.length > 0 && form.authors[0].name && form.authors[0].email;
      case 3:
        return true; // Optional fields
      case 4:
        return form.mainFile !== null;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setErrorMsg('');
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      setErrorMsg('Please fill in all required fields');
    }
  };

  const prevStep = () => {
    setErrorMsg('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { mainFile, additionalZip, scriptFile, authors, ...rest } = form;
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
      if (scriptFile) formData.append('script', scriptFile);
      await submitArticle(formData);
      
      // Show success modal instead of alert
      setShowSuccessModal(true);
      
      // Reset form and go back to step 1
      setCurrentStep(1);
      setForm((prev)=>({
        ...prev,
        title:'', articleType:'', keywords:'', abstract:'', conflictOfInterest:'', fundingInfo:'', dataAvailability:'',
        authors: [{ name:'', email:'', affiliation:'', superscript:'' }],
        mainFile:null, additionalZip:null, scriptFile:null,
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
                Article Submitted Successfully! 
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for submitting your article to <strong>Frontiers in Engineering and Informatics</strong>. 
                Your submission has been received and will undergo our peer review process.
              </p>
              
              {/* Additional Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Check your email for a confirmation message with submission details</li>
                  <li>• Our editorial team will review your submission</li>
                  <li>• We'll contact you within 2-3 business days</li>
                  <li>• You'll receive updates on the review process via email</li>
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

  // Render step content with proper props
  const renderStepContent = () => {
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      })
    };

    return (
      <AnimatePresence mode="wait" custom={currentStep}>
        <motion.div
          key={currentStep}
          custom={currentStep}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="space-y-6"
        >
          {currentStep === 1 && <Step1Content form={form} updateField={updateField} />}
          {currentStep === 2 && <Step2Content form={form} updateAuthor={updateAuthor} addAuthor={addAuthor} removeAuthor={removeAuthor} />}
          {currentStep === 3 && <Step3Content form={form} updateField={updateField} />}
          {currentStep === 4 && <Step4Content form={form} updateField={updateField} />}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <SuccessModal />
      <div className='min-h-screen text-black bg-white mt-16 py-8 px-5'>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Submit Your Article</h1>
            <p className="text-gray-600">Frontiers in Engineering and Informatics</p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                        currentStep > step.number 
                          ? 'bg-green-500 text-white' 
                          : currentStep === step.number 
                          ? 'bg-[#083b7a] text-white ring-4 ring-blue-100' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.icon
                      )}
                    </motion.div>
                    <div className="mt-2 text-center hidden md:block">
                      <div className={`text-sm font-medium ${currentStep === step.number ? 'text-[#083b7a]' : 'text-gray-500'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-2 relative">
                      <div className="absolute inset-0 bg-gray-200 rounded"></div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: currentStep > step.number ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-green-500 rounded"
                      ></motion.div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step Content */}
              {renderStepContent()}

              {/* Error Message */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  {errorMsg}
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <div className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </div>

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] font-medium transition-all"
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting || !validateStep(4)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      submitting || !validateStep(4)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SubmitPage;
