# Large File Upload Service

This full-stack application provides robust, resumable, direct-to-Cloudinary large file uploads. Designed to handle large media efficiently without sending massive binaries through the backend, the service utilizes chunked uploading with signed signatures.

## Why This Architecture?

Uploading files directly to a backend server before forwarding them to a storage provider like Cloudinary consumes significant backend bandwidth, RAM, and CPU, and easily timeouts for gigantic files. 

This application offers a modern approach:
1. **Frontend** breaks the file into optimal chunks.
2. **Frontend** requests a safe, short-lived signed signature from the **Backend**.
3. **Frontend** uploads the chunks directly to **Cloudinary** using the signature.
4. **Backend** tracks chunk completion metadata in its PostgreSQL database to allow uploads to resume exactly where they left off if interrupted.

## Architecture

This is a monorepo-style project consisting of two distinct services:

*   **`backend/`**: A Node.js & Express REST API using PostgreSQL (with Prisma) for secure authorization and tracking upload states.
*   **`frontend/`**: A React 19 SPA (Single Page Application) built with Vite for providing a highly performant and dynamic file management dashboard.

## Global Tech Stack

### Frontend
- **React 19**
- **Vite**
- **React Router v7**
- **Axios**
- **Tailwind CSS / Custom CSS**
- **Cloudinary SDKs (`@cloudinary/react`, `@cloudinary/url-gen`)**

### Backend
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **JWT Authentication via HttpOnly Cookies**
- **Node-Cron**
- **Cloudinary Node.js SDK (for signature generation)**

## Quick Start

You will need two terminals to run the full stack locally.

### 1. Database & Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` in the `backend/` directory referencing your local database and Cloudinary credentials (see `backend/README.md`).
4. Apply the Prisma schema to your PostgreSQL database:
   ```bash
   npx prisma migrate dev
   ```
5. Start the API server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` in the `frontend/` directory (see `frontend/README.md`).
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

Access the frontend via the local link provided by Vite (e.g., `http://localhost:5173`) to sign up, log in, and test resumable file uploading.

## Documentation

For specific details on each service, please view their individual readmes:
- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)
