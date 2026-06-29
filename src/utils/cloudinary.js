// src/utils/cloudinary.js

// ─── YOUR CLOUDINARY CREDENTIALS ───
// Replace with your actual values from Cloudinary dashboard
const CLOUDINARY_CLOUD_NAME = "dezcsi9a4y";        // Your cloud name
const CLOUDINARY_UPLOAD_PRESET = "akash_uploads"; // Your unsigned upload preset

/**
 * Upload a file to Cloudinary using the unsigned upload preset
 * Returns the secure URL of the uploaded file
 */
export const uploadToCloudinary = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Cloudinary error details:", errorData);
      throw new Error(`Upload failed: ${errorData.error?.message || "Unknown error"}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};