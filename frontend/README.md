# Large File Upload - Frontend

This is the frontend service for the Large File Upload application. Built with modern web development tools, it provides a performant and intuitive user interface for managing files, with a heavy focus on resilient, resumable large file uploads directly to Cloudinary from the browser.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **State Management**: React Context API (`AuthContext`, `FileContext`)
- **HTTP Client**: Axios
- **External Libraries**: `@cloudinary/react`, `@cloudinary/url-gen`, `lucide-react` (Icons)

## Features

- **Authentication & User Management**:
  - Fully integrated Login, Signup, and Edit Profile views.
  - Protected Routes ensuring authenticated access only to the dashboard.
- **Advanced File Upload**:
  - Resumable file uploading directly from the browser to Cloudinary.
  - Progress tracking for long-running uploads.
  - Handles the client-side logic of splitting files into manageable chunks and requesting secure upload signatures from the backend.
  - Seamlessly resumes failed or paused uploads without redownloading data.
- **File Dashboard**:
  - Grid-based view (or list view) for visualizing previously uploaded assets.
- **Responsive UI/UX**:
  - Clean styling utilizing custom CSS.
  - Responsive layouts suitable for desktop and mobile viewing.

## Prerequisites

- Node.js (v18+ recommended)

## Environment Variables

Create a `.env` file in the `frontend` root directory containing your specific backend API URL and config, e.g.:

```env
VITE_API_BASE_URL=http://localhost:port/api
```

*(Refer to other environment variables if applicable based on the specific application needs)*

## Setup & Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

- `src/pages/` - Top-level route components (Login, Signup, FileUpload, FileView, EditProfile).
- `src/components/` - Reusable UI widgets and layout structures (AppHeader, ProtectedRoute).
- `src/context/` - Global state management for Authentication and File handling.
- `src/helper/` - Utility functions for upload tracking and miscellaneous frontend tasks.
- `src/assets/` - Static files like images, SVGs.
