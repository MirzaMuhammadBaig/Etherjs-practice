require('dotenv').config();
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(process.env.Alchemy_Key);

const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);

  const balance = await provider.getBalance(process.env.walletAddress);
  console.log("Account Balance In BN:", balance);

  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log(balanceWei);
};
querryBlockchain();