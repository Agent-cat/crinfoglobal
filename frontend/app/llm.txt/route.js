import { getLatestArticles } from '../../utils/serverApi';

export async function GET() {
    const baseUrl = 'https://www.crinfoglobal.com';

    let latestArticles = [];
    try {
        latestArticles = await getLatestArticles();
    } catch (error) {
        console.error('Error fetching latest articles for llm.txt:', error);
    }

    const articleList = latestArticles.map(article =>
        `- [${article.title}](${baseUrl}/article/${article.id})`
    ).join('\n');

    const content = `
# Crinfo Global Publishers

Crinfo Global Publishers is a publisher of open access scientific journals.

## Main Links
- [Home](${baseUrl})
- [Volumes & Issues](${baseUrl}/volumes)
- [About Us](${baseUrl}/about)
- [Editorial Board](${baseUrl}/editorial-board)
- [Submission Guidelines](${baseUrl}/submit)
- [Contact](${baseUrl}/contact)

## Latest Articles
${articleList}

## Search
You can browse all volumes and issues at ${baseUrl}/volumes.
  `.trim();

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
