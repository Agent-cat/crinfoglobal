import { getAllPublishedArticles, getPublicVolumes } from '../utils/serverApi';

export default async function sitemap() {
    const baseUrl = 'https://fei.crinfoglobal.com';

    // Static routes
    const staticRoutes = [
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

    // Dynamic routes
    let articles = [];
    let volumes = [];
    try {
        [articles, volumes] = await Promise.all([
            getAllPublishedArticles(),
            getPublicVolumes()
        ]);
    } catch (error) {
        console.error('Error fetching data for sitemap:', error);
    }

    const issueRoutes = volumes.flatMap(volume =>
        (volume.issues || []).map(issue => ({
            url: `${baseUrl}/issue/${issue.id}`,
            lastModified: new Date(issue.updatedAt || new Date()),
            changeFrequency: 'monthly',
            priority: 0.7,
        }))
    );

    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/article/${article.doi || article.id}`,
        lastModified: new Date(article.updatedAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...staticRoutes, ...issueRoutes, ...articleRoutes];
}

