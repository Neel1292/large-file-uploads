import axios from 'axios';
import { UPLOAD } from './constant';
import { getURL } from './getURL';
import apiClient from './apiClient';

const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB

const createChunks = (file) => {
    const chunks = [];
    let start = 0;

    while (start < file.size) {
        const end = Math.min(start + CHUNK_SIZE, file.size);
        chunks.push({
            start,
            end,
            blob: file.slice(start, end)
        });
        start = end;
    }
    return chunks;
};

export async function uploadFileInChunks(file, cloudConfig, onProgress) {
    let uploadId = null;
    try {
        if (cloudConfig.service === 'AWS') {
            await axios.put(cloudConfig.uploadUrl, file, {
                headers: { 'Content-Type': file.type },
                onUploadProgress: (event) => {
                    if (onProgress) {
                        onProgress(Math.min(100, Math.round((event.loaded / file.size) * 100)));
                    }
                }
            });

            // For AWS, we skip chunked db tracks and return URLs immediately
            // But we still need to mark it as complete in DB!
            await apiClient.post(getURL(UPLOAD.COMPLETE, cloudConfig.uploadId), {
                publicId: cloudConfig.publicId,
                secureUrl: cloudConfig.secureUrl,
            });

            return {
                public_id: cloudConfig.publicId,
                secure_url: cloudConfig.secureUrl
            };
        }

        const initRes = await apiClient.post(UPLOAD.INITIATE, {
            fileName: file.name,
            fileSize: file.size,
            mimeType: file.type,
            chunkSize: CHUNK_SIZE,
        });

        uploadId = initRes.data.uploadId;

        // Check Resume state
        const status = await apiClient.get(getURL(UPLOAD.STATUS, uploadId));
        const uploadedSet = new Set(status.data.uploadedChunks);

        const chunks = createChunks(file);

        let lastResponse;
        // Calculate exact bytes for already uploaded chunks
        let uploadedBytes = 0;
        chunks.forEach((chunk, index) => {
            if (uploadedSet.has(index)) {
                uploadedBytes += chunk.blob.size;
            }
        });

        // Upload chunks
        for(let i = 0; i < chunks.length; i++) {
            if (uploadedSet.has(i)) continue;

            let chunk =  chunks[i];

            lastResponse = await uploadChunkWithRetry({
                chunk,
                file,
                uploadId,
                cloudConfig,
                retries: 3,
                onChunkProgress: (chunkLoaded) => {
                    if (onProgress) {
                        const progress = Math.min(100, Math.round(((uploadedBytes + chunkLoaded) / file.size) * 100));
                        onProgress(progress);
                    }
                }
            });

            uploadedBytes += chunk.blob.size;

            await apiClient.post(getURL(UPLOAD.CHUNK_UPLOAD, uploadId), {
                chunkIndex: i,
            });
        }

        // Save final upload info after all chunks are done
        if (lastResponse?.public_id) {
            await apiClient.post(getURL(UPLOAD.COMPLETE, uploadId), {
                publicId: lastResponse.public_id,
                secureUrl: lastResponse.secure_url,
            });
        }

        // Upload may already be completed in a previous attempt.
        if (!lastResponse?.public_id && status.data?.status === 'COMPLETED') {
            return {
                public_id: status.data.publicId,
                secure_url: status.data.secureUrl,
            };
        }

        return lastResponse;
    } catch (error) {
        if (uploadId) {
            error.uploadId = uploadId;
        }
        throw error;
    }
}

async function uploadChunkWithRetry(params) {
    const { retries } = params;
    try {
        return await uploadChunk(params);
    } catch (error) {
        if (retries > 0) {
            console.warn(`Chunk upload failed, retrying... (${retries} attempts left). Error: ${error.message}`);
            // Exponential backoff: 1s, 2s, 4s
            const delay = 1000 * Math.pow(2, 3 - retries); 
            await new Promise(resolve => setTimeout(resolve, delay));
            return await uploadChunkWithRetry({ ...params, retries: retries - 1 });
        } else {
            console.error("All retry attempts failed for chunk.");
            throw error;
        }
    }
}

async function uploadChunk({
    chunk,
    file,
    uploadId,
    cloudConfig,
    onChunkProgress
}) {
    const formData = new FormData();

    formData.append("file", chunk.blob);
    formData.append("api_key", cloudConfig.apiKey);
    formData.append("timestamp", cloudConfig.timestamp);
    formData.append("signature", cloudConfig.signature);

    // If cloudConfig provides a specific uploadUrl, use it. Otherwise default to Cloudinary auto upload.
    const url = cloudConfig.uploadUrl || `https://api.cloudinary.com/v1_1/${cloudConfig.cloudName}/auto/upload`;

    const response = await axios.post(url,
        formData,
        {
            headers: {
                "Content-Range": `bytes ${chunk.start}-${chunk.end - 1}/${file.size}`,
                "X-Unique-Upload-Id": uploadId,
            },
            onUploadProgress: (event) => {
                if (onChunkProgress) {
                    onChunkProgress(event.loaded);
                }
            }
        }
    );

    console.log("Response of the file generated  ", response)

    return response.data;
}
