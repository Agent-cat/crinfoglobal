import { getPublicVolumes, getLatestArticles } from '../../utils/serverApi'
import Link from 'next/link';

export const metadata = {
  title: "Volumes | Crinfo Global Publishers",
  description: "Browse volumes and issues published by Crinfo Global Publishers.",
};

const Page = async () => {
  let volumes = [];
  let latestArticles = [];

  try {
    const [volumesData, articlesData] = await Promise.all([
      getPublicVolumes(),
      getLatestArticles().catch(() => [])
    ]);
    volumes = volumesData;
    latestArticles = articlesData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Volumes</h1>
          <div className='w-full h-px bg-gray-300'></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Volumes List */}
          <div className="lg:col-span-1">
            {volumes.length === 0 ? (
              <div className='text-gray-600 italic'>No volumes available at the moment.</div>
            ) : (
              <div className='space-y-0'>
                {volumes.map((v, index) => (
                  <div key={v.id}>
                    <div className='mb-4'>
                      <h2 className='text-xl font-bold text-blue-600 mb-3'>
                        Volume - {v.number}
                      </h2>
                      <div className='ml-6 space-y-1 mb-6'>
                        {(v.issues || []).map((issue) => (
                          <Link
                            key={issue.id}
                            href={`/issue/${issue.id}`}
                            className='block text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200'
                          >
                            Issue - {issue.number} | {issue.month} {issue.year}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {index < volumes.length - 1 && (
                      <div className='w-full h-px bg-gray-300 mb-6'></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Latest Articles */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Latest Articles</h3>

              {latestArticles.length === 0 ? (
                <div className="text-gray-500 text-sm italic">No recent articles found.</div>
              ) : (
                <div className="space-y-6">
                  {latestArticles.map((article) => {
                    const authors = typeof article.authorsJson === 'string'
                      ? JSON.parse(article.authorsJson)
                      : article.authorsJson || [];

                    return (
                      <div key={article.id} className="group">
                        <Link href={`/article/${article.doi || article.id}`} className="block">
                          <h4 className="text-sm font-semibold text-blue-800 group-hover:text-blue-600 leading-snug mb-1 transition-colors">
                            {article.title}
                          </h4>
                        </Link>

                        {authors.length > 0 && (
                          <div className="text-xs text-gray-500 line-clamp-1 mb-1">
                            {authors.map(a => a.name).join(', ')}
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono uppercase">
                          <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          {article.articleType && (
                            <>
                              <span>•</span>
                              <span>{article.articleType}</span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
