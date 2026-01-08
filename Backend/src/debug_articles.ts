
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.article.count({
        where: { status: 'PUBLISHED' }
    });

    const articles = await prisma.article.findMany({
        where: { status: 'PUBLISHED' },
        select: { id: true, title: true, status: true, publishedAt: true }
    });

    const allCount = await prisma.article.count();

    if (allCount > 0 && count === 0) {
        const sample = await prisma.article.findMany({ take: 5 });
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
