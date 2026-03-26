import { getApiSignture, getAllUploadedFilesForUser } from "../services/upload.service.js";
import { CLOUDINARY } from "../utils/constant.js";
import { asyncHandler } from "../utils/helper.js";
import { prisma } from "../../prisma.js";
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const initiateUpload  = asyncHandler(async (req, res) => {
  const { fileName, fileSize, mimeType, chunkSize } = req.body;
  const userId = BigInt(req.user.id);

  console.log("This the initiate upload ",  { fileName, fileSize, mimeType, chunkSize });

  const totalChunks = Math.ceil(fileSize / chunkSize);

  console.log("FileSize ", fileSize, "Chunk Size", chunkSize, "Total Chunks ", totalChunks)

  const ipHash = crypto.createHash('md5').update(req.ip || '127.0.0.1').digest('hex');

  // Reuse an in-progress upload for same file metadata so retries resume from DB state.
  const existingUpload = await prisma.upload.findFirst({
    where: {
      userId,
      fileName,
      fileSize: BigInt(fileSize),
      mimeType,
      chunkSize,
      totalChunks,
      status: { in: ["UPLOADING", "FAILED"] },
    },
    orderBy: { createdAt: "desc" },
  });

  if (existingUpload) {
    return res.json({
      uploadId: existingUpload.id.toString(),
      chunkSize: existingUpload.chunkSize,
      totalChunks: existingUpload.totalChunks,
      resumed: true,
    });
  }

  const cloudinaryUploadId = uuidv4();

  console.log("Creating file upload")
  const upload = await prisma.upload.create({
    data: {
      userId,
      fileName,
      fileSize: BigInt(fileSize),
      mimeType,
      chunkSize,
      totalChunks,
      ipHash,
      cloudinaryUploadId,
      status: "UPLOADING",
      // expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Field not in schema
      chunks: {
        createMany: {
          data: Array.from({ length: totalChunks }).map((_, i) => ({
            chunkIndex: i,
            byteStart: BigInt(i * chunkSize),
            byteEnd: BigInt(
              Math.min((i + 1) * chunkSize - 1, fileSize - 1)
            ),
          })),
        },
      },
    },
  });

  console.log("Generated File ", upload)

  res.json({
    uploadId: upload.id.toString(),
    chunkSize,
    totalChunks,
  });
});

const markChunkComplete = async (req, res) => {
  const { uploadId } = req.params;
  const { chunkIndex } = req.body;
  const userId = BigInt(req.user.id);
  const uploadIdBigInt = BigInt(uploadId);

  const uploadRow = await prisma.upload.findFirst({
    where: { id: uploadIdBigInt, userId },
    select: { id: true },
  });

  if (!uploadRow) {
    return res.status(404).json({ success: false, message: 'Upload not found' });
  }

  const chunk = await prisma.uploadChunk.findUnique({
    where: {
      uploadId_chunkIndex: {
        uploadId: uploadIdBigInt,
        chunkIndex,
      },
    },
    select: { status: true },
  });

  if (!chunk) {
    return res.status(404).json({ success: false, message: 'Chunk not found' });
  }

  if (chunk.status !== "UPLOADED") {
    await prisma.$transaction([
      prisma.uploadChunk.update({
        where: {
          uploadId_chunkIndex: {
            uploadId: uploadIdBigInt,
            chunkIndex,
          },
        },
        data: {
          status: "UPLOADED",
          uploadedAt: new Date(),
        },
      }),
      prisma.upload.updateMany({
        where: { id: uploadIdBigInt, userId },
        data: { uploadedChunks: { increment: 1 } },
      }),
    ]);
  }

  res.json({ success: true });
};

const getUploadStatus = async (req, res) => {
  const userId = BigInt(req.user.id);
  const uploadIdBigInt = BigInt(req.params.uploadId);
  const upload = await prisma.upload.findFirst({
    where: { id: uploadIdBigInt, userId },
    include: {
      chunks: {
        where: { status: "UPLOADED" },
        select: { chunkIndex: true },
      },
    },
  });

  if (!upload) {
    return res.status(404).json({ message: "Upload not found" });
  }

  res.json({
    uploadId: upload.id.toString(),
    chunkSize: upload.chunkSize,
    totalChunks: upload.totalChunks,
    uploadedChunks: upload.chunks.map(c => c.chunkIndex),
    status: upload.status,
    publicId: upload.cloudinaryPublicId,
    secureUrl: upload.cloudinarySecureUrl,
  });
};

const completeUpload = async (req, res) => {
  const { uploadId } = req.params;
  const { publicId, secureUrl } = req.body;
  const userId = BigInt(req.user.id);
  const uploadIdBigInt = BigInt(uploadId);

  const updated = await prisma.upload.updateMany({
    where: { id: uploadIdBigInt, userId },
    data: {
      cloudinaryPublicId: publicId,
      cloudinarySecureUrl: secureUrl,
      status: "COMPLETED",
    },
  });

  if (updated.count === 0) {
    return res.status(404).json({ success: false, message: 'Upload not found' });
  }

  res.json({ message: "Upload completed" });
};

const markUploadFailed = async (req, res) => {
  const { uploadId } = req.params;
  const userId = BigInt(req.user.id);
  const uploadIdBigInt = BigInt(uploadId);

  const updated = await prisma.upload.updateMany({
    where: {
      id: uploadIdBigInt,
      userId,
      status: { not: "COMPLETED" },
    },
    data: {
      status: "FAILED",
    },
  });

  if (updated.count === 0) {
    return res.status(404).json({ success: false, message: 'Upload not found' });
  }

  return res.json({ success: true });
};

const getUploadSignature = asyncHandler(async (req, res) => {
  const timestamp = Math.floor(Date.now() / 1000);

  const signature = await getApiSignture(timestamp, CLOUDINARY.API_SECRET);

  if(!signature) {
    throw Error("Unable to verify signature! Please try again later.")
  }

  res.json({
    cloudName: CLOUDINARY.CLOUD_NAME,
    apiKey: CLOUDINARY.API_KEY,
    timestamp,
    signature,
    folder: "uploads",
  });
});

const getAllFiles = asyncHandler(async (req, res) => {
  const files = await getAllUploadedFilesForUser(req.user.id);
  res.json(files);
});

export {
  initiateUpload,
  markChunkComplete,
  getUploadStatus,
  completeUpload,
  markUploadFailed,
  getUploadSignature,
  getAllFiles
}