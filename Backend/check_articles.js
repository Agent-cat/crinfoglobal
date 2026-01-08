import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const articles = await prisma.article.findMany({
        where: {
            doi: { not: null },
            status: 'PUBLISHED'
        },
        select: {
            id: true,
            title: true,
            doi: true,
            pdfPath: true
        }
    });
    console.log(JSON.stringify(articles, null, 2));
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=check_articles.js.map