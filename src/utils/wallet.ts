import { ethers } from "ethers";
import { sign } from "web3-token";

export const handleSignWallet = async (nonce: string, web3Provider: any) => {
  const provider = new ethers.providers.Web3Provider(web3Provider);
  const signer = provider.getSigner();

  try {
    const token = await sign(async (msg) => await signer.signMessage(msg), {
      domain: "dadsnetwork.co",
      statement: "I accept the WoD Terms of Service: dadsnetwork",
      expires_in: "3 days",
      nonce,
    });

    return token;
  } catch (error: any) {
    return undefined;
  }
};
