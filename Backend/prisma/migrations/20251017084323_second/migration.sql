/*
  Warnings:

  - The values [ADMIN,USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."ArticleStatus" AS ENUM ('SUBMITTED', 'PUBLISHED');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Role_new" AS ENUM ('RESEARCHER', 'AUTHOR', 'EDITOR');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "role" TYPE "public"."Role_new" USING ("role"::text::"public"."Role_new");
ALTER TYPE "public"."Role" RENAME TO "Role_old";
ALTER TYPE "public"."Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'RESEARCHER';
COMMIT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'RESEARCHER';

-- CreateTable
CREATE TABLE "public"."Volume" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Issue" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "volumeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "articleType" TEXT NOT NULL,
    "keywords" TEXT,
    "abstract" TEXT NOT NULL,
    "conflictOfInterest" TEXT,
    "fundingInfo" TEXT,
    "dataAvailability" TEXT,
    "authorsJson" JSONB NOT NULL,
    "status" "public"."ArticleStatus" NOT NULL DEFAULT 'SUBMITTED',
    "issueId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Volume_number_key" ON "public"."Volume"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_volumeId_number_key" ON "public"."Issue"("volumeId", "number");

-- AddForeignKey
ALTER TABLE "public"."Issue" ADD CONSTRAINT "Issue_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "public"."Volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Article" ADD CONSTRAINT "Article_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "public"."Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
