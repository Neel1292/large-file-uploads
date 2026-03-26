import rateLimit from 'express-rate-limit';

// Strict limiter for sensitive public/auth entry points.
export const strictAuthLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 3, // 3 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Try again later.' },
});

// General limiter for authenticated control endpoints.
export const authUploadControlLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Try again later.' },
});

