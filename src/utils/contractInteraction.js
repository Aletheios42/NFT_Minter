import { ethers } from "ethers";

const contractAddresses = {
  ethereum: "0xYourEthereumContractAddress",
  avalanche: "0xYourAvalancheContractAddress",
};

const abi = [
  // Add the ABI of your contract here
];

export const mintNFT = async (network, cid) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      network === "ethereum"
        ? "https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY"
        : "https://api.avax-test.network/ext/bc/C/rpc",
    );

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddresses[network],
      abi,
      signer,
    );

    const tx = await contract.mint(signer.getAddress(), `ipfs://${cid}`);
    await tx.wait();
    console.log("Transaction confirmed:", tx);
  } catch (error) {
    console.error("Error minting NFT:", error);
    throw error;
  }
};
