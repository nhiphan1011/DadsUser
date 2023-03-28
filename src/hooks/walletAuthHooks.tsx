import { useEffect } from "react";

export const connectWallet = async () => {
  const { ethereum }: any = window;

  if (!ethereum) return alert("Wallet not connected");

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length) {
      return accounts[0];
    }
  } catch (error: any) {
    return {
      code: error.code,
      msg: error.message,
    };
  }
};

export default function useWalletProvider() {
  const { ethereum }: any = window;

  const checkWalltetConnected = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
  };

  useEffect(() => {
    checkWalltetConnected();
  }, []);
}
