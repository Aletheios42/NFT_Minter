import { ethers } from "ethers"; // Asegúrate de que ethers esté bien importado
import { contractABI } from "./contractConfig"; // Cambié esta importación para que sea una importación con nombre

const contractAddress = "0x00a87ff735d348a8db86c9cb19faed9f45b1983c"; // Dirección del contrato

let provider;
let signer;
let contract;

export const initializeContract = async () => {
  try {
    if (typeof window.ethereum === "undefined") {
      console.error("MetaMask no está instalado");
      return;
    }

    provider = new ethers.JsonRpcProvider(window.ethereum); // Cambié Web3Provider por JsonRpcProvider
    await window.ethereum.request({ method: "eth_requestAccounts" });

    signer = provider.getSigner();
    const address = await signer.getAddress();
    if (!address) {
      console.error("No se encontró ninguna cuenta activa en MetaMask.");
      return;
    }

    // Inicializa el contrato
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log("Contrato inicializado correctamente.");

    return contract;
  } catch (error) {
    console.error("Error al inicializar el contrato:", error);
  }
};
