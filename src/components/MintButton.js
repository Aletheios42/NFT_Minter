import React from "react";
import { mintNFT } from "../utils/contractInteraction";

const MintButton = ({ network, cid }) => {
  const handleMint = async () => {
    if (!cid) {
      alert("Upload an image first!");
      return;
    }

    try {
      await mintNFT(network, cid);
      alert("NFT minted successfully!");
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div>
      <button onClick={handleMint} disabled={!cid}>
        Mint NFT
      </button>
    </div>
  );
};

export default MintButton;
