"use client";
import React, { useEffect, useState } from 'react'
import { fetchIssue } from '../../../utils/api'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const IssuePage = () => {
  const params = useParams()
  const issueId = params.issueId
  const [issue, setIssue] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchIssue(issueId)
        setIssue(data)
      } finally {
        setLoading(false)
      }
    }
    if (issueId) load()
  }, [issueId])

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto text-black'>
        {loading ? (
          <div className='h-6 w-64 bg-gray-200 animate-pulse rounded' />
        ) : issue ? (
          <>
            <div className='mb-6'>
            <div className='text-sm text-gray-600'>
              <Link href='/' className='text-blue-700 hover:underline'>Home</Link>
              <span> / </span>
              <Link href='/volumes' className='text-blue-700 hover:underline'>Volumes</Link>
              <span> / Volume-{issue.volume.number} / Issue-{issue.number}</span>
            </div>
              <h1 className='text-2xl font-bold mt-2'>
                Volume - {issue.volume.number} | Issue - {issue.number} | {issue.month} {issue.year}
              </h1>
            </div>

            <div className='space-y-6'>
              {(issue.articles || []).map((a, idx) => {
                const authors = Array.isArray(a.authorsJson) ? a.authorsJson.map(author => author.name).join(', ') : '';
                const startPage = a.startPage || (idx * 27 + 1);
                const endPage = a.endPage || (startPage + (a.totalPages || 26) - 1);
                
                return (
                  <div key={a.id} className='border-t pt-6'>
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
                      <div className='flex-1'>
                        <div className='text-sm text-gray-600 mb-2'>#{idx + 1}</div>
                        <div className='flex items-start gap-3 mb-2'>
                          <Link href={`/article/${a.id}`} className='text-blue-700 font-semibold hover:underline text-lg leading-tight'>
                            {a.title}
                          </Link>
                          <span className='inline-block px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 whitespace-nowrap'>Open Access</span>
                        </div>
                        <div className='text-gray-700 mb-2'>{authors}</div>
                        <div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
                          <span className='flex items-center gap-1'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                            </svg>
                            {a.views || 0}
                          </span>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                          <Link href={`/article/${a.id}`} className='px-3 py-1 text-sm rounded bg-[#083b7a] text-white hover:bg-[#0a4ea3]'>abstract</Link>
                          {a.pdfPath && (
                            <Link href={`/article/${a.id}`} className='px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700'>pdf</Link>
                          )}
                          <Link href={`/article/${a.id}?tab=cite`} className='px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300'>cite</Link>
                        </div>
                      </div>
                      <div className='text-sm text-gray-600 sm:ml-4'>
                        Pages: {startPage}-{endPage}
                        {typeof a.totalPages === 'number' && <div className='text-xs text-gray-500 mt-1'>({a.totalPages} pages)</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div>Issue not found</div>
        )}
      </div>
    </div>
  )
}

export default IssuePage


