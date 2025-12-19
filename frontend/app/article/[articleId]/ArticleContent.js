
"use client";
import React, { useState, useEffect } from 'react'
import { requestDownload, downloadArticlePdf } from '../../../utils/api'
import Link from 'next/link'

export default function ArticleContent({ article, initialTab }) {
    const [showModal, setShowModal] = useState(false)
    const [tab, setTab] = useState(initialTab || 'abstract')
    const [citationStyles, setCitationStyles] = useState({ apa: '', vancouver: '', bibtex: '' })
    const [activeStyle, setActiveStyle] = useState('apa')
    const [loadingCitation, setLoadingCitation] = useState(false)

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

    return (
        <>
            <div className='mt-4 flex flex-wrap gap-2 mb-8'>
                {article.pdfPath && (
                    <button
                        className='px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors font-medium flex items-center gap-2'
                        onClick={handleDownload}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" /></svg>
                        Download PDF
                    </button>
                )}
                <button
                    className={`px-4 py-2 rounded transition-colors font-medium ${tab === 'abstract' ? 'bg-[#083b7a] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setTab('abstract')}
                >
                    Abstract
                </button>
                <button
                    className={`px-4 py-2 rounded transition-colors font-medium ${tab === 'cite' ? 'bg-[#083b7a] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setTab('cite')}
                >
                    Cite
                </button>
            </div>

            {tab === 'cite' ? (
                <div className='mt-6 animate-in fade-in duration-300'>
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
                                <div className='text-sm text-gray-800 leading-relaxed citation-content'>
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

                    {/* Manual metadata view - subtle fallback */}
                    <div className='mt-8 pt-6 border-t'>
                        <h3 className='text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide'>Article Metadata</h3>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            <div>
                                <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>Journal</strong>
                                <div className='text-sm text-gray-900'>Frontiers in Engineering and Informatics</div>
                            </div>
                            {article.volume?.number && (
                                <div>
                                    <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>Volume</strong>
                                    <div className='text-sm text-gray-900'>{article.volume.number}</div>
                                </div>
                            )}
                            {article.issue?.number && (
                                <div>
                                    <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>Issue</strong>
                                    <div className='text-sm text-gray-900'>{article.issue.number}</div>
                                </div>
                            )}
                            {article.startPage && (
                                <div>
                                    <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>Pages</strong>
                                    <div className='text-sm text-gray-900'>{article.startPage}-{article.endPage}</div>
                                </div>
                            )}
                            {article.doi && (
                                <div className='md:col-span-2'>
                                    <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>DOI</strong>
                                    <div className='text-sm text-blue-600 font-mono break-all'>{article.doi}</div>
                                </div>
                            )}
                            <div>
                                <strong className='block text-xs text-gray-500 uppercase tracking-wider mb-1'>ISSN</strong>
                                <div className='text-sm text-gray-900'>3049-3412</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-6 animate-in fade-in duration-300'>
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
                </div>
            )}

            {showModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200'>
                    <div className='bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in zoom-in-95 duration-200'>
                        <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>Request Full Access</h3>
                        <p className='text-gray-600 mb-6'>This PDF is currently restricted. We'll notify the editors once you request access.</p>
                        <div className='flex flex-col sm:flex-row justify-end gap-3'>
                            <button
                                className='px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium'
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className='px-6 py-2 rounded-xl bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all font-semibold shadow-lg shadow-blue-200'
                                onClick={async () => {
                                    try { await requestDownload(article.id); } catch { }
                                    setShowModal(false);
                                }}
                            >
                                Request Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
