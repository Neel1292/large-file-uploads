import { prisma } from "../../prisma.js";
import cloud from "../config/cloudinary.config.js";


async function getApiSignture(timestamp, secret) {
  const signature = cloud.utils.api_sign_request(
    { timestamp },
    // { timestamp, folder: "uploads"},
    secret
  );

  return signature;
}

async function getAllUploadedFilesForUser(userId) {
  const uploads = await prisma.upload.findMany({
    where: {
      userId: BigInt(userId),
      status: 'COMPLETED',
      OR: [
        {
          cloudinarySecureUrl: { not: null },
          cloudinaryPublicId: { not: null },
        },
        {
          awsUrl: { not: null },
          awsKey: { not: null },
        }
      ]
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  // Keep the response shape compatible with the existing frontend mapping
  // (Cloudinary-like keys: public_id, filename, bytes, format, secure_url, created_at)
  return uploads.map((u) => {
    const format = u.mimeType?.split('/')[1] || '';
    const isAws = u.service === 'AWS';
    
    return {
      public_id: isAws ? u.awsKey : u.cloudinaryPublicId,
      filename: u.fileName,
      bytes: Number(u.fileSize),
      format,
      secure_url: isAws ? u.awsUrl : u.cloudinarySecureUrl,
      created_at: u.createdAt.toISOString(),
      service: u.service || 'CLOUDINARY', // Include service information just in case
    };
  });
}

export {
  getApiSignture,
  getAllUploadedFilesForUser,
}