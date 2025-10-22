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
                      const modal = document.getElementById('pdfAccessModal');
                      if (modal) modal.classList.remove('hidden');
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
                <div className='text-sm text-gray-800 whitespace-pre-wrap border rounded p-3 bg-gray-50'>
                  {article.title}
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
            <div id='pdfAccessModal' className='hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
              <div className='bg-white rounded-lg shadow-xl p-6 max-w-sm w-full'>
                <h3 className='text-lg font-semibold mb-2'>Request access</h3>
                <p className='text-sm text-gray-700 mb-4'>You need editor approval to download this PDF. Send a request?</p>
                <div className='flex justify-end gap-2'>
                  <button className='px-4 py-2 rounded-lg border border-gray-300' onClick={()=>document.getElementById('pdfAccessModal')?.classList.add('hidden')}>Cancel</button>
                  <button className='px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3]' onClick={async ()=>{
                    try { await requestDownload(article.id); } catch {}
                    document.getElementById('pdfAccessModal')?.classList.add('hidden');
                   
                  }}>Request</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Article not found</div>
        )}
      </div>
    </div>
  )
}

export default ArticlePage


