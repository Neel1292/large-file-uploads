# Large File Upload - Backend

This is the backend service for the Large File Upload application. It provides a robust and scalable architecture for handling secure authentication, resumable chunked file uploads directly to Cloudinary, and file metadata management.

## Tech Stack

- **Framework**: Node.js with Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Storage**: Cloudinary (Direct Upload via Signed Signatures)
- **Authentication**: JWT (JSON Web Tokens) with HttpOnly cookies
- **Other Tools**: `bcryptjs` for password hashing, `cors`, `cookie-parser`, `express-rate-limit`, `node-cron` for scheduled tasks.

## Features

- **Secure Authentication**: 
  - Signup, Login, Profile updates, and Logout capabilities.
  - Access and Refresh token rotation via secure HTTP-Only cookies.
- **Resumable Large File Uploads**:
  - Implements chunked uploading for large files directly to Cloudinary.
  - Generates secure signatures on the backend for frontend to upload files without exposing secrets.
  - Tracks upload progress and maintains chunk statuses in the PostgreSQL database.
  - Supports resuming interrupted uploads by verifying existing chunks.
- **File Metadata Tracking**:
  - Associates uploaded files with user accounts.
  - Exposes endpoints to fetch all successfully uploaded files per user.
- **Scheduled Tasks**: 
  - Node-cron jobs for periodic automated cleanup or synchronizations.

## Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL Database
- Cloudinary Account Configuration

## Environment Variables

Create a `.env` file in the `backend` directory based on your environment configuration. You will need:

```env
PORT=...
DATABASE_URL=...
JWT_ACCESS_SECRET=...
JWT_REFRESH_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## Setup & Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   # or npx prisma db push
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The server will start (default port is usually defined in your `.env` file).

## Project Structure

- `src/controllers/` - Application logic components (Auth, Upload).
- `src/routes/` - Express route definitions.
- `src/middleware/` - Custom middlewares (Authentication, rate limits, etc.).
- `src/services/` - Business logic and external service integrations.
- `src/utils/` - Shared helpers, constants, and token utilities.
- `prisma/` - Database schema configuration.
