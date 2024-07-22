import dotenv from "dotenv";
import app from "./app.js";
import cloudinary from "cloudinary";

// Load environment variables from .env file
dotenv.config();

try {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary configured successfully");
} catch (error) {
  console.error("Error configuring Cloudinary:", error);
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
