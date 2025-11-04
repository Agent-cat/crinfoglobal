"use client";
import React, { useEffect, useMemo, useState } from 'react'
import { fetchArticle, requestDownload, downloadArticlePdf } from '../../../utils/api'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const ArticlePage = () => {
  const params = useParams()
  const search = useSearchParams()
  const articleId = params.articleId
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const tab = search.get('tab') || 'abstract'

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchArticle(articleId)
        setArticle(data)
      } finally {
        setLoading(false)
      }
    }
    if (articleId) load()
  }, [articleId])

  const pagesText = useMemo(() => {
    if (!article?.startPage || !article?.endPage) return null
    return `Pages: ${article.startPage}-${article.endPage}`
  }, [article])

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-3xl mx-auto text-black'>
        {loading ? (
          <div className='h-6 w-64 bg-gray-200 animate-pulse rounded' />
        ) : article ? (
          <>
            <div className='text-sm text-gray-600'>
              <Link href='/' className='text-blue-700 hover:underline'>Home</Link>
              <span> / </span>
              <Link href='/volumes' className='text-blue-700 hover:underline'>Volumes</Link>
              <span> / Article</span>
            </div>
            <h1 className='text-2xl font-bold mt-2'>
              {article.title}
              <span className='ml-2 inline-block align-middle text-[11px] px-2 py-[2px] rounded bg-amber-100 text-amber-800'>Open Access</span>
            </h1>
            <div className='text-gray-700 mt-1'>{/* authors if stored structured in authorsJson */}</div>
            <div className='flex items-center gap-3 mt-2'>
              {typeof article.views === 'number' && <div className='text-sm text-gray-600'>{article.views}</div>}
              {pagesText && <div className='text-sm text-gray-600'>{pagesText}</div>}
            </div>
            <div className='mt-4 flex gap-2'>
              {article.pdfPath && (
                <>
                  <button className='px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700' onClick={async ()=>{
                    try {
                      const res = await downloadArticlePdf(article.id);
                      const blobUrl = window.URL.createObjectURL(res.data);
                      const a = document.createElement('a');
                      a.href = blobUrl;
                      a.download = 'article.pdf';
                      a.click();
                      window.URL.revokeObjectURL(blobUrl);
                    } catch (err) {
                      // Not approved; show modal to request access
                      setShowModal(true);
                    }
                  }}>
                    Download PDF
                  </button>
                </>
              )}
              <Link className={`px-3 py-1 rounded ${tab==='cite' ? 'bg-[#083b7a] text-white' : 'bg-gray-100 hover:bg-gray-200'}`} href={`?tab=cite`}>Cite this article</Link>
              <Link className={`px-3 py-1 rounded ${tab==='abstract' ? 'bg-[#083b7a] text-white' : 'bg-gray-100 hover:bg-gray-200'}`} href={`?tab=abstract`}>Abstract</Link>
            </div>

            {tab === 'cite' ? (
              <div className='mt-6'>
                <h2 className='text-lg font-semibold mb-2'>Cite this article</h2>
                <div className='border rounded p-4 bg-gray-50'>
                  <div className='text-sm text-gray-800 whitespace-pre-wrap mb-4'>
                    <div className='mb-3'>
                      <strong className='text-gray-900'>Title:</strong>
                      <div className='mt-1'>{article.title}</div>
                    </div>
                    
                    {article.authorsJson && (() => {
                      const authors = typeof article.authorsJson === 'string' 
                        ? JSON.parse(article.authorsJson) 
                        : article.authorsJson;
                      return (
                        <div className='mb-3'>
                          <strong className='text-gray-900'>Authors:</strong>
                          <div className='mt-1'>
                            {authors.map((author, idx, arr) => (
                              <span key={idx}>
                                {author.name}
                                {author.superscript && <sup>{author.superscript}</sup>}
                                {idx < arr.length - 1 ? ', ' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                    
                    {article.abstract && (
                      <div className='mb-3'>
                        <strong className='text-gray-900'>Abstract:</strong>
                        <div className='mt-1'>{article.abstract}</div>
                      </div>
                    )}
                    
                    {article.volumeNumber && (
                      <div className='mb-3'>
                        <strong className='text-gray-900'>Volume:</strong> {article.volumeNumber}
                      </div>
                    )}
                    
                    {article.issueNumber && (
                      <div className='mb-3'>
                        <strong className='text-gray-900'>Issue:</strong> {article.issueNumber}
                      </div>
                    )}
                    
                    {(article.startPage && article.endPage) && (
                      <div className='mb-3'>
                        <strong className='text-gray-900'>Pages:</strong> {article.startPage}-{article.endPage}
                      </div>
                    )}
                    
                    {article.doi && (
                      <div className='mb-3'>
                        <strong className='text-gray-900'>DOI:</strong> {article.doi}
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className='px-4 py-2 rounded bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors text-sm font-medium'
                    onClick={(e) => {
                      // Store button reference before async operation
                      const btn = e.currentTarget;
                      const originalText = btn.textContent;
                      
                      const authorsData = article.authorsJson 
                        ? (typeof article.authorsJson === 'string' ? JSON.parse(article.authorsJson) : article.authorsJson)
                        : [];
                      const authors = authorsData.map(a => a.name + (a.superscript ? `^${a.superscript}` : '')).join(', ');
                      const citation = `Title: ${article.title}\n\n` +
                        (authors ? `Authors: ${authors}\n\n` : '') +
                        (article.abstract ? `Abstract: ${article.abstract}\n\n` : '') +
                        (article.volumeNumber ? `Volume: ${article.volumeNumber}\n` : '') +
                        (article.issueNumber ? `Issue: ${article.issueNumber}\n` : '') +
                        (article.startPage && article.endPage ? `Pages: ${article.startPage}-${article.endPage}\n` : '') +
                        (article.doi ? `DOI: ${article.doi}` : '');
                      
                      navigator.clipboard.writeText(citation).then(() => {
                        // Show success feedback
                        btn.textContent = 'Copied!';
                        btn.classList.add('bg-green-600');
                        btn.classList.remove('bg-[#083b7a]', 'hover:bg-[#0a4ea3]');
                        setTimeout(() => {
                          btn.textContent = originalText;
                          btn.classList.remove('bg-green-600');
                          btn.classList.add('bg-[#083b7a]', 'hover:bg-[#0a4ea3]');
                        }, 2000);
                      }).catch(err => {
                        console.error('Copy failed:', err);
                        btn.textContent = 'Copy Failed';
                        setTimeout(() => {
                          btn.textContent = originalText;
                        }, 2000);
                      });
                    }}
                  >
                    Copy Citation
                  </button>
                </div>
              </div>
            ) : (
              <div className='mt-6'>
                <h2 className='text-lg font-semibold mb-2'>Abstract</h2>
                <p className='text-gray-800 leading-7 whitespace-pre-wrap border rounded p-4 bg-gray-50'>{article.abstract}</p>
                {article.keywords && (
                  <div className='mt-4'>
                    <div className='text-sm font-semibold'>Keywords</div>
                    <div className='text-sm text-gray-700'>{article.keywords}</div>
                  </div>
                )}
              </div>
            )}

            {/* Access Modal */}
            {showModal && (
              <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
                <div className='bg-white rounded-lg shadow-xl p-6 max-w-sm w-full'>
                  <h3 className='text-lg font-semibold mb-2'>Request access</h3>
                  <p className='text-sm text-gray-700 mb-4'>You need editor approval to download this PDF. Send a request?</p>
                  <div className='flex justify-end gap-2'>
                    <button className='px-4 py-2 rounded-lg border border-gray-300' onClick={()=>setShowModal(false)}>Cancel</button>
                    <button className='px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3]' onClick={async ()=>{
                      try { await requestDownload(article.id); } catch {}
                      setShowModal(false);
                    }}>Request</button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>Article not found</div>
        )}
      </div>
    </div>
  )
}

export default ArticlePage


