import React from 'react'
import { getArticle } from '../../../utils/serverApi'
import Link from 'next/link'
import ArticleContent from './ArticleContent'

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const articleId = Array.isArray(slug) ? slug.join('/') : slug;
  try {
    const article = await getArticle(articleId);
    return {
      title: `${article.title} | Crinfo Global Publishers`,
      description: article.abstract?.substring(0, 160),
    };
  } catch (error) {
    return { title: 'Article | Crinfo Global Publishers' };
  }
}

const ArticlePage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const articleId = Array.isArray(slug) ? slug.join('/') : slug;
  const { tab = 'abstract' } = await searchParams;

  let article = null;
  try {
    article = await getArticle(articleId);
  } catch (error) {
    console.error("Error fetching article:", error);
  }

  if (!article) {
    return (
      <div className='min-h-screen bg-white mt-16 py-8 px-5'>
        <div className='max-w-3xl mx-auto text-black'>
          <div>Article not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-3xl mx-auto text-black text-justify'>
        <div className='text-sm text-gray-600'>
          <Link href='/' className='text-blue-700 hover:underline'>Home</Link>
          <span> / </span>
          <Link href='/volumes' className='text-blue-700 hover:underline'>Volumes</Link>
          <span> / Article</span>
        </div>

        <h1 className='text-2xl font-bold mt-2 leading-tight'>
          {article.title}
          <span className='ml-2 inline-block align-middle text-[11px] px-2 py-[2px] rounded bg-amber-100 text-amber-800 whitespace-nowrap'>Open Access</span>
        </h1>

        <div className='flex flex-wrap items-center gap-3 mt-4 mb-6 border-b pb-4'>
          {typeof article.views === 'number' && (
            <div className='text-sm text-gray-600 flex items-center gap-1'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
              {article.views} views
            </div>
          )}
          {article.startPage && article.endPage && (
            <div className='text-sm text-gray-600'>Pages: {article.startPage}-{article.endPage}</div>
          )}
        </div>

        <ArticleContent article={article} initialTab={tab} />
      </div>
    </div>
  )
}

export default ArticlePage


