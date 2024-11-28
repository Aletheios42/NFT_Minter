import React from "react";
import { uploadToIPFS } from "../utils/ipfsClient";

const ImageUploader = ({ setCID }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const cid = await uploadToIPFS(file);
        setCID(cid);
        alert(`File uploaded! CID: ${cid}`);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <label>Upload Image:</label>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
