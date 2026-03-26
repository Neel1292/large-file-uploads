-- CreateEnum
CREATE TYPE "UploadStatus" AS ENUM ('UPLOADING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "ChunkStatus" AS ENUM ('PENDING', 'UPLOADED', 'FAILED');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upload" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" BIGINT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "chunkSize" INTEGER NOT NULL,
    "totalChunks" INTEGER NOT NULL,
    "uploadedChunks" INTEGER NOT NULL DEFAULT 0,
    "ipHash" TEXT,
    "cloudinaryUploadId" TEXT,
    "cloudinaryPublicId" TEXT,
    "cloudinarySecureUrl" TEXT,
    "status" "UploadStatus" NOT NULL DEFAULT 'UPLOADING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UploadChunk" (
    "id" BIGSERIAL NOT NULL,
    "uploadId" BIGINT NOT NULL,
    "chunkIndex" INTEGER NOT NULL,
    "byteStart" BIGINT NOT NULL,
    "byteEnd" BIGINT NOT NULL,
    "status" "ChunkStatus" NOT NULL DEFAULT 'PENDING',
    "uploadedAt" TIMESTAMP(3),

    CONSTRAINT "UploadChunk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UploadChunk_uploadId_chunkIndex_key" ON "UploadChunk"("uploadId", "chunkIndex");

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadChunk" ADD CONSTRAINT "UploadChunk_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
