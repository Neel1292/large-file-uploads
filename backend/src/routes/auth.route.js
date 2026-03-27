import express from 'express';
import { authUploadControlLimiter, strictAuthLimiter } from '../middleware/rateLimiters.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { login, logout, me, refresh, signup, updateName, updatePassword, updateService } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', strictAuthLimiter, signup);
router.post('/login', strictAuthLimiter, login);

// Refresh token flow: avoid applying the same strict limiter to prevent constant lockouts.
router.post('/refresh', refresh);
router.post('/logout', logout);

router.get('/me', requireAuth, me);

router.post('/update-name', requireAuth, authUploadControlLimiter, updateName);
router.post('/update-password', requireAuth, authUploadControlLimiter, updatePassword);
router.post('/update-service', requireAuth, authUploadControlLimiter, updateService);

export { router as authRouter };

