import { ethers } from "ethers";

// Conectar MetaMask
export const connectMetaMask = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Solicitar las cuentas disponibles
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.listAccounts();
      const account = accounts[0];

      if (!account) {
        throw new Error("No account found in MetaMask.");
      }

      console.log("Connected to MetaMask account:", account); // Añadimos un log aquí

      return { provider, account }; // Devolver el provider y la cuenta
    } catch (error) {
      console.error("Error connecting MetaMask:", error);
      throw new Error("MetaMask connection failed.");
    }
  } else {
    throw new Error("MetaMask is not installed.");
  }
};

// Conectar Core Wallet
export const connectCoreWallet = async () => {
  if (typeof window.core !== "undefined") {
    try {
      const provider = new ethers.BrowserProvider(window.core);
      const accounts = await provider.listAccounts();
      const account = accounts[0];

      if (!account) {
        throw new Error("No account found in Core Wallet.");
      }

      console.log("Connected to Core Wallet account:", account); // Añadimos un log aquí

      return { provider, account }; // Devolver el provider y la cuenta
    } catch (error) {
      console.error("Error connecting Core Wallet:", error);
      throw new Error("Core Wallet connection failed.");
    }
  } else {
    throw new Error("Core Wallet is not installed.");
  }
};
