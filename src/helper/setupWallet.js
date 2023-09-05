/* eslint-disable no-undef */
import { ethers } from "ethers";
// import { wordList } from "./wordsList";

export const createNewWallet = (navigate) => {
  const newWallet = ethers.Wallet.createRandom().mnemonic;
  const privateKey = ethers.Wallet.fromMnemonic(
    `${newWallet.phrase}`,
    `m/44'/60'/0'/0/${0}`
  ).privateKey.split("0x")[1];
  const address = ethers.Wallet.fromMnemonic(
    `${newWallet.phrase}`,
    `m/44'/60'/0'/0/${0}`
  ).address;
  chrome.storage.local.set({ pk: privateKey });
  chrome.storage.local.set({ address: address });
  chrome.storage.local.set({ phrase: newWallet.phrase }).then(() => {
    navigate("/setup-wallet/setup-loading");
  });
};

export const importWallet = async (mnemonic) => {
  try {
    const walletMnemonicRes = ethers.Wallet?.fromMnemonic(mnemonic);
    const privateKey = ethers.Wallet.fromMnemonic(
      `${mnemonic}`,
      `m/44'/60'/0'/0/${0}`
    ).privateKey.split("0x")[1];
    await chrome.storage.local.set({ phrase: mnemonic });
    await chrome.storage.local.set({ address: walletMnemonicRes.address });
    await chrome.storage.local.set({ pk: privateKey });
    return true;
  } catch (error) {
    console.log("fromMnemonic Error:", error);
    return false;
  }
};

export const isSeedPhraseVerifySuccessfully = (phrase, indexes, fields) => {
  const phraseArray = phrase.split(" ");
  if (
    phraseArray[indexes[0]] === fields[0] &&
    phraseArray[indexes[1]] === fields[1] &&
    phraseArray[indexes[2]] === fields[2] &&
    phraseArray[indexes[3]] === fields[3]
  )
    return true;
  return false;
};
