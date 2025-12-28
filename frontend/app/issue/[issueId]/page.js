import React from 'react'
import { getIssue } from '../../../utils/serverApi'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  const { issueId } = await params;
  try {
    const issue = await getIssue(issueId);
    return {
      title: `Volume ${issue.volume.number} Issue ${issue.number} | Crinfo Global Publishers`,
      description: `Browse articles in Volume ${issue.volume.number}, Issue ${issue.number} (${issue.month} ${issue.year})`,
    };
  } catch (error) {
    return { title: 'Issue | Crinfo Global Publishers' };
  }
}

const IssuePage = async ({ params }) => {
  const { issueId } = await params;
  let issue = null;

  try {
    issue = await getIssue(issueId);
  } catch (error) {
    console.error("Error fetching issue:", error);
  }

  if (!issue) {
    return (
      <div className='min-h-screen bg-white mt-16 py-8 px-5'>
        <div className='max-w-6xl mx-auto text-black'>
          <div>Issue not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto text-black text-justify'>
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
              <div key={a.id} className='border-b border-gray-100 last:border-0 py-6 hover:bg-gray-50 transition-colors rounded-lg px-4 -mx-4 group'>
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                  <div className='flex-1'>
                    <div className='text-xs font-bold uppercase tracking-wider text-blue-600 mb-2'>
                      Article {idx + 1}
                    </div>
                    <div className='flex items-start gap-3 mb-3'>
                      <Link href={`/article/${a.doi || a.id}`} className='text-gray-900 font-bold hover:text-blue-700 transition-colors text-xl leading-snug'>
                        {a.title}
                      </Link>
                    </div>

                    <div className='text-gray-600 mb-3 font-medium'>{authors}</div>

                    <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200'>
                        Open Access
                      </span>
                      <span className='flex items-center gap-1.5' title="Views">
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                        </svg>
                        {a.views || 0}
                      </span>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                      <Link href={`/article/${a.doi || a.id}`} className='px-4 py-1.5 text-sm font-medium rounded-md bg-[#083b7a] text-white hover:bg-[#062a57] transition-colors shadow-sm'>Abstract</Link>
                      {a.pdfPath && (
                        <Link href={`/article/${a.doi || a.id}`} className='px-4 py-1.5 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm flex items-center gap-2'>
                          <span>PDF</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </Link>
                      )}
                      <Link href={`/article/${a.doi || a.id}?tab=cite`} className='px-4 py-1.5 text-sm font-medium rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm'>Cite</Link>
                    </div>
                  </div>
                  <div className='text-sm text-gray-500 font-mono sm:text-right sm:ml-4 whitespace-nowrap bg-gray-50 px-2 py-1 rounded self-start'>
                    pp. {startPage}-{endPage}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default IssuePage


