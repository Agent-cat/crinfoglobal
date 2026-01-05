
"use client";
import React, { useState, useEffect } from 'react'
import { requestDownload, downloadArticlePdf } from '../../../utils/api'

import Link from 'next/link'
import { useAuth } from '../../../hooks/useAuth'

export default function ArticleContent({ article, initialTab }) {
    const [showModal, setShowModal] = useState(false)
    const [tab, setTab] = useState(initialTab || 'abstract')
    const [citationStyles, setCitationStyles] = useState({ apa: '', vancouver: '', bibtex: '' })
    const [activeStyle, setActiveStyle] = useState('apa')
    const [loadingCitation, setLoadingCitation] = useState(false)
    const [showCitation, setShowCitation] = useState(false)

    const authors = typeof article.authorsJson === 'string'
        ? JSON.parse(article.authorsJson)
        : article.authorsJson;

    const handleDownload = async () => {
        try {
            const res = await downloadArticlePdf(article.id);
            const blobUrl = window.URL.createObjectURL(res.data);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = `${article.title.substring(0, 30)}.pdf`;
            a.click();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            // Check auth state to see if they have global access (this should have succeeded if so)
            // But if it failed (403), show modal
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (tab === 'cite' && !citationStyles.apa) {
            generateCitations();
        }
    }, [tab, citationStyles.apa]);

    const generateCitations = async () => {
        setLoadingCitation(true);
        try {
            // Dynamically import citation-js only when needed
            const { default: Cite } = await import('citation-js');

            const authorsList = authors || [];
            const cslAuthors = authorsList.map(a => ({
                literal: a.name.trim()
            }));

            const date = article.publishedAt ? new Date(article.publishedAt) : new Date();

            const data = [{
                id: article.id,
                type: 'article-journal',
                title: article.title,
                author: cslAuthors,
                issued: {
                    'date-parts': [[date.getFullYear(), date.getMonth() + 1, date.getDate()]]
                },
                'container-title': 'Frontiers in Engineering and Informatics',
                volume: article.volume?.number,
                issue: article.issue?.number,
                page: article.startPage && article.endPage ? `${article.startPage}-${article.endPage}` : undefined,
                DOI: article.doi,
                ISSN: '3049-3412',
                publisher: 'Crinfo Global Publishers'
            }];

            const cite = new Cite(data);

            setCitationStyles({
                apa: cite.format('bibliography', { template: 'apa', lang: 'en-US' }),
                vancouver: cite.format('bibliography', { template: 'vancouver', lang: 'en-US' }),
                bibtex: cite.format('bibtex')
            });
        } catch (err) {
            console.error('Citation generation error:', err);
        } finally {
            setLoadingCitation(false);
        }
    };

    const copyToClipboard = (text, e) => {
        const btn = e.currentTarget;
        const originalText = btn.textContent;
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = 'Copied!';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('bg-green-600');
            }, 2000);
        });
    };

    const { data: user } = useAuth();

    return (
        <>
            <div className='mt-6 animate-in fade-in duration-300'>
                {/* Author Details Section */}
                {authors && Array.isArray(authors) && authors.length > 0 && (
                    <div className='mb-8 border-b pb-6'>
                        <div className='flex flex-col gap-4'>
                            {authors.map((author, i) => (
                                <div key={i} className='flex flex-col'>
                                    <span className='font-bold text-lg text-[#083b7a]'>{author.name}</span>
                                    {author.affiliation && (
                                        <span className='text-gray-600 text-sm italic'>{author.affiliation}</span>
                                    )}
                                    {author.email && (
                                        <div className='flex items-center gap-1 mt-1'>
                                            <svg className='w-3 h-3 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                            </svg>
                                            <a href={`mailto:${author.email}`} className='text-blue-600 text-sm hover:underline'>
                                                {author.email}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <h2 className='text-lg font-semibold mb-4'>Abstract</h2>
                <p className='text-gray-800 leading-relaxed whitespace-pre-wrap text-lg'>{article.abstract}</p>

                {article.keywords && (
                    <div className='mt-8 pt-6 border-t'>
                        <div className='text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide'>Keywords</div>
                        <div className='flex flex-wrap gap-2'>
                            {article.keywords.split(',').map((kw, i) => (
                                <span key={i} className='px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100'>
                                    {kw.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className='mt-8 pt-6 border-t flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-gray-50 p-6 rounded-xl border border-gray-100'>
                    <div className='flex-1'>
                        {article.doi && (
                            <Link href={`https://www.doi.org/${article.doi}`} className='inline-flex flex-col bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 hover:bg-orange-100 transition-colors'>
                                <span className='text-xs font-bold text-orange-800 uppercase tracking-wider mb-0.5'>DOI</span>
                                <span className='text-sm font-mono text-orange-900 break-all select-all font-medium'>www.doi.org/{article.doi}</span>
                            </Link>
                        )}
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <button
                            className={`px-5 py-2.5 rounded-lg border transition-all font-medium flex items-center gap-2 ${showCitation ? 'bg-gray-200 border-gray-300 text-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => {
                                setShowCitation(!showCitation);
                                if (!citationStyles.apa && !showCitation) generateCitations();
                            }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                            Cite
                        </button>
                        {article.pdfPath && (
                            <a
                                href={article.doi ? `/article_repo/${article.doi}.pdf` : '#'}
                                target={article.doi ? "_blank" : undefined}
                                rel={article.doi ? "noopener noreferrer" : undefined}
                                className='px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium flex items-center gap-2 shadow-sm'
                                onClick={!article.doi ? handleDownload : undefined}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" /></svg>
                                {article.doi ? 'View PDF' : 'Download PDF'}
                            </a>
                        )}
                    </div>
                </div>

                {showCitation && (
                    <div className='mt-6 animate-in slide-in-from-top-4 duration-300'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-lg font-semibold'>Cite this article</h2>
                            <div className='flex bg-gray-100 p-1 rounded-lg text-xs font-medium'>
                                {['apa', 'vancouver', 'bibtex'].map((style) => (
                                    <button
                                        key={style}
                                        onClick={() => setActiveStyle(style)}
                                        className={`px-3 py-1 rounded-md transition-all ${activeStyle === style ? 'bg-white shadow-sm text-[#083b7a]' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        {style.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='border rounded-xl p-6 bg-gray-50/50 space-y-4'>
                            {loadingCitation ? (
                                <div className='flex items-center justify-center py-10'>
                                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#083b7a]'></div>
                                </div>
                            ) : (
                                <>
                                    <div className='text-sm text-gray-800 leading-relaxed citation-content font-serif'>
                                        {citationStyles[activeStyle] || 'Generating citation...'}
                                    </div>

                                    <button
                                        className='w-full md:w-auto px-6 py-2.5 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all text-sm font-semibold active:scale-95 flex items-center justify-center gap-2'
                                        onClick={(e) => copyToClipboard(citationStyles[activeStyle], e)}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                        Copy {activeStyle.toUpperCase()} Citation
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {showModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200'>
                    <div className='bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in zoom-in-95 duration-200'>
                        <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>Request Full Access</h3>
                        <p className='text-gray-600 mb-6'>
                            {user?.hasFullAccess ?
                                "You have full access to all articles. Click download to get the PDF." :
                                user?.hasPendingRequest ?
                                    "You have a pending request for full access. You will be notified via email once an admin approves it." :
                                    "Access restricted. Request full access once to download this and all other PDFs."
                            }
                        </p>
                        <div className='flex flex-col sm:flex-row justify-end gap-3'>
                            <button
                                className='px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium'
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            {!user?.hasFullAccess && !user?.hasPendingRequest && (
                                <button
                                    className='px-6 py-2 rounded-xl bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all font-semibold shadow-lg shadow-blue-200'
                                    onClick={async () => {
                                        try { await requestDownload(article.id); } catch { }
                                        setShowModal(false);
                                    }}
                                >
                                    Request Full Access
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
