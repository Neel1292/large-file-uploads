import express from 'express';
import { uploadRouter } from './routes/upload.route.js'
import { authRouter } from './routes/auth.route.js';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authUploadControlLimiter } from './middleware/rateLimiters.js';

const app  = express();
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

// middleware
// app.use(limiter)
app.use(express.json(({ limit: "1Gb" })))
app.use(express.urlencoded({ extended: true, limit: "1Gb" }));
app.use(cookieParser());
app.use(cors({
    // For cookies to work, CORS must not be `*` when credentials are enabled.
    origin: corsOrigin === '*' ? 'http://localhost:5173' : corsOrigin,
    credentials: true
}));

app.use('/auth', authRouter);
app.use('/uploads', uploadRouter);

app.get('/health', (req, res) => {
  res.send('✅ Working fine bhidu !');
});


export { app, authUploadControlLimiter };