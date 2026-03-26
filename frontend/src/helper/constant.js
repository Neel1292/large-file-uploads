const BASE_URL = import.meta.env.VITE_BASE_URI

const UPLOAD = {
    SIGNATURE: '/uploads/signature',
    INITIATE: '/uploads/initiate',
    STATUS: '/uploads/:id/status',
    CHUNK_UPLOAD: '/uploads/:id/chunk-complete',
    COMPLETE: '/uploads/:id/complete',
    FAIL: '/uploads/:id/fail',
    FILES: '/uploads/files'
}

export {
    BASE_URL,
    UPLOAD,
}