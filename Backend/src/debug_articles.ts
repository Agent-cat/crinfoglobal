
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Checking for PUBLISHED articles...');
    const count = await prisma.article.count({
        where: { status: 'PUBLISHED' }
    });
    console.log(`Total PUBLISHED articles: ${count}`);

    const articles = await prisma.article.findMany({
        where: { status: 'PUBLISHED' },
        select: { id: true, title: true, status: true, publishedAt: true }
    });
    console.log('Articles:', articles);

    console.log('Checking all articles (any status)...');
    const allCount = await prisma.article.count();
    console.log(`Total articles (any status): ${allCount}`);

    if (allCount > 0 && count === 0) {
        const sample = await prisma.article.findMany({ take: 5 });
        console.log('Sample non-published articles:', sample.map(a => ({ id: a.id, title: a.title, status: a.status })));
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
