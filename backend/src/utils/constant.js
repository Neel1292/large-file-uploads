import dotenv from 'dotenv';
dotenv.config();

const CLOUDINARY = {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
}

export {
    CLOUDINARY,
}