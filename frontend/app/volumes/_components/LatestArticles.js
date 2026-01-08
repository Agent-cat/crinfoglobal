import { getLatestArticles } from '../../../utils/serverApi';
import Link from 'next/link';

export default async function LatestArticles() {
    const latestArticles = await getLatestArticles().catch(() => []);

    if (!latestArticles || latestArticles.length === 0) {
        return <div className="text-gray-500 text-sm italic">No recent articles found.</div>;
    }

    return (
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
    );
}
