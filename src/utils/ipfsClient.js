import { create } from "ipfs-http-client";

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

export const uploadToIPFS = async (file) => {
  try {
    const added = await client.add(file);
    return added.path; // This is the CID
  } catch (error) {
    console.error("IPFS upload failed:", error);
    throw error;
  }
};
