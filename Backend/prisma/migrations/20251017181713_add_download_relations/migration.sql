-- AddForeignKey
ALTER TABLE "public"."DownloadRequest" ADD CONSTRAINT "DownloadRequest_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "public"."Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DownloadRequest" ADD CONSTRAINT "DownloadRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
