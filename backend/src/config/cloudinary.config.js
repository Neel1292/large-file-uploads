// backend/src/config/cloudinary.js
import cloudinary from "cloudinary";
import { CLOUDINARY } from "../utils/constant.js";
import dotenv from "dotenv";

const cloud = cloudinary.v2;

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloud.config({
  cloud_name: CLOUDINARY.CLOUD_NAME,
  api_key: CLOUDINARY.API_KEY,
  api_secret: CLOUDINARY.API_SECRET,
});

export default cloud;