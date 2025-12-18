
"use client";
import React, { useState } from 'react'
import { requestDownload, downloadArticlePdf } from '../../../utils/api'
import Link from 'next/link'

export default function ArticleContent({ article, initialTab }) {
    const [showModal, setShowModal] = useState(false)
    const [tab, setTab] = useState(initialTab || 'abstract')

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

    const copyCitation = (e) => {
        const btn = e.currentTarget;
        const originalText = btn.textContent;

        const authorsData = authors || [];
        const authorsStr = authorsData.map(a => a.name + (a.superscript ? `^${a.superscript}` : '')).join(', ');
        const citation = `Title: ${article.title}\n\n` +
            (authorsStr ? `Authors: ${authorsStr}\n\n` : '') +
            (article.abstract ? `Abstract: ${article.abstract}\n\n` : '') +
            (article.volume?.number ? `Volume: ${article.volume.number}\n` : '') +
            (article.issue?.number ? `Issue: ${article.issue.number}\n` : '') +
            (article.startPage && article.endPage ? `Pages: ${article.startPage}-${article.endPage}\n` : '') +
            (article.doi ? `DOI: ${article.doi}` : '');

        navigator.clipboard.writeText(citation).then(() => {
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
                    <h2 className='text-lg font-semibold mb-3'>Cite this article</h2>
                    <div className='border rounded-xl p-6 bg-gray-50/50 space-y-4'>
                        <div className='text-sm text-gray-800 space-y-4'>
                            <div>
                                <strong className='text-gray-900'>Title:</strong>
                                <div className='mt-1 text-gray-700'>{article.title}</div>
                            </div>

                            {authors && authors.length > 0 && (
                                <div>
                                    <strong className='text-gray-900'>Authors:</strong>
                                    <div className='mt-1 text-gray-700'>
                                        {authors.map((author, idx, arr) => (
                                            <span key={idx}>
                                                {author.name}{author.superscript && <sup>{author.superscript}</sup>}{idx < arr.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                                {article.volume?.number && (
                                    <div><strong className='text-gray-900 text-xs uppercase tracking-wider'>Volume</strong><div className='mt-1'>{article.volume.number}</div></div>
                                )}
                                {article.issue?.number && (
                                    <div><strong className='text-gray-900 text-xs uppercase tracking-wider'>Issue</strong><div className='mt-1'>{article.issue.number}</div></div>
                                )}
                                {article.startPage && (
                                    <div><strong className='text-gray-900 text-xs uppercase tracking-wider'>Pages</strong><div className='mt-1'>{article.startPage}-{article.endPage}</div></div>
                                )}
                            </div>

                            {article.doi && (
                                <div>
                                    <strong className='text-gray-900'>DOI:</strong>
                                    <div className='mt-1 font-mono text-xs text-blue-600'>{article.doi}</div>
                                </div>
                            )}
                        </div>

                        <button
                            className='w-full md:w-auto px-6 py-2.5 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all text-sm font-semibold active:scale-95'
                            onClick={copyCitation}
                        >
                            Copy Citation
                        </button>
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
