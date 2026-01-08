import { getPublicVolumes, getAllPublishedArticles } from '../utils/serverApi';

export default async function sitemap() {
    const baseUrl = 'https://fei.crinfoglobal.com';

    // Static routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/volumes`,
            lastModified: new Date(),
        },
    ];

    try {
        // 1. Fetch Volumes & Issues
        const volumes = await getPublicVolumes();
        const issueUrls = [];

        if (Array.isArray(volumes)) {
            volumes.forEach((vol) => {
                if (vol.issues && Array.isArray(vol.issues)) {
                    vol.issues.forEach((issue) => {
                        issueUrls.push({
                            url: `${baseUrl}/issue/${issue.id}`,
                            lastModified: new Date(issue.updatedAt || new Date()),
                        });
                    });
                }
            });
        }

        // 2. Fetch Articles
        // The user example shows article URLs using DOI: /article/10.63949/crinfo.v1i1.001
        const articles = await getAllPublishedArticles();
        const articleUrls = [];

        if (Array.isArray(articles)) {
            articles.forEach((article) => {
                if (article.doi) {
                    articleUrls.push({
                        url: `${baseUrl}/article/${article.doi}`,
                        lastModified: new Date(article.updatedAt || new Date()),
                    });
                } else if (article.id) {
                    // Fallback to ID if no DOI, though the user requested DOI style.
                    // However based on user sample, only DOI ones are shown.
                    // I will verify if I should include ID based URLs. 
                    // The user example ONLY shows DOI. I'll prioritize DOI.
                }
            });
        }

        return [...routes, ...issueUrls, ...articleUrls];
    } catch (error) {
        console.error('Sitemap generation failed:', error);
        return routes;
    }
}
