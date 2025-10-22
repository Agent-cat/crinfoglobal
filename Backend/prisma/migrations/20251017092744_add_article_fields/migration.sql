-- AlterTable
ALTER TABLE "public"."Article" ADD COLUMN     "doi" TEXT,
ADD COLUMN     "endPage" INTEGER,
ADD COLUMN     "pdfPath" TEXT,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "startPage" INTEGER,
ADD COLUMN     "totalPages" INTEGER,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
