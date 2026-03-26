import express from "express";
import {
    getUploadSignature, 
    getAllFiles, 
    initiateUpload, 
    markChunkComplete, 
    getUploadStatus, 
    completeUpload,
    markUploadFailed,
} from "../controllers/upload.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { authUploadControlLimiter, strictAuthLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();

router.post('/signature', requireAuth, strictAuthLimiter, getUploadSignature);
router.get('/files', requireAuth, authUploadControlLimiter, getAllFiles);
router.post('/initiate', requireAuth, authUploadControlLimiter, initiateUpload);
router.post('/:uploadId/chunk-complete', requireAuth, markChunkComplete);
router.get('/:uploadId/status', requireAuth, authUploadControlLimiter, getUploadStatus);
router.post('/:uploadId/complete', requireAuth, authUploadControlLimiter, completeUpload);
router.post('/:uploadId/fail', requireAuth, markUploadFailed);

export { router as uploadRouter }