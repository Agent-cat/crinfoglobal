import { getPublishedArticles } from '../utils/serverApi';

export default async function sitemap() {
    const baseUrl = 'https://www.crinfoglobal.com'; // Replace with actual domain if available in env

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/volumes',
        '/submit',
        '/ethics',
        '/editorial-board',
        '/instructions',
        '/indexing',
        '/apc',
        '/privacy-policy',
        '/terms',
        '/refunds',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes for articles
    let articles = [];
    try {
        articles = await getPublishedArticles();
    } catch (error) {
        console.error('Error fetching articles for sitemap:', error);
    }

    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/article/${article.id}`,
        lastModified: new Date(article.updatedAt || article.createdAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...articleRoutes];
}
