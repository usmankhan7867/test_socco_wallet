/* eslint-disable no-undef */
import { ethers } from "ethers";
import { rpcURL } from "./contract/rpc";
import { soccoTokenABI } from "./contract/abis";
import { soccoTokenAddress } from "./contract/addresses";

const provider = new ethers.providers.JsonRpcProvider(rpcURL);

export const getPhrase = async () => {
  return await chrome.storage.local.get(["phrase"]).then((result) => {
    return result.phrase;
  });
};

export const getAddress = async () => {
  return "0xc2ed56f3e46e6c19fe8c978eeaf2df961c66d6e0";
  return await chrome.storage.local.get(["address"]).then((result) => {
    return result.address;
  });
};

export const getPk = async () => {
  return "d25330ea3e4a292b431c263ad1ab7db696c9722d7586b87a61e25304b3aa01c7";
  return await chrome.storage.local.get(["pk"]).then((result) => {
    return result.pk;
  });
};

export const getPassword = async () => {
  return await chrome.storage.local.get(["password"]).then((result) => {
    return result.password;
  });
};

export const getSigner = async () => {
  const pk = await getPk();
  const signer = new ethers.Wallet(pk, provider);
  return signer;
};

export const getSoccoSmartContract = async () => {
  const signer = await getSigner();
  const soccoTokenContarct = new ethers.Contract(
    soccoTokenAddress,
    soccoTokenABI,
    signer
  );
  return soccoTokenContarct;
};

// Web3 Func =========================================

export const getWalletBalance = async () => {
  return await signer.getBalance().then((balance) => {
    console.log("GET Balance:", balance.toString());
    return ethers.BigNumber.from(balance).toString();
  });
};

// Socco Contract ==============================================================
export const getTokenBalance = async () => {
  const address = await getAddress();
  const contract = await getSoccoSmartContract();
  return contract.balanceOf(address).then((balance) => {
    console.log("Token Balance:", ethers.utils.formatEther(balance.toString()));
    return ethers.utils.formatEther(balance.toString());
  });
};

export const transferToken = async (recipiant, amount) => {
  const contract = await getSoccoSmartContract();
  return await contract
    .transfer(recipiant, ethers.utils.parseEther(amount))
    .then((res) => {
      console.log("Transaction Initiated:", res);
      return res.wait().then((data) => {
        console.log("Transaction Completed:", data);
        if (data.status === 1) return true;
        else return false;
      });
    });
};
