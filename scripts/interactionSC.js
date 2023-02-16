
require('dotenv').config();
const { ethers } = require("ethers");
const walletAbi = require('../artifacts/contracts/Wallet.sol/Wallet.json');
const provider = new ethers.providers.JsonRpcProvider(process.env.Alchemy_Key);
const contractAddress = process.env.contracAddress;

const contractIntreaction = async () => {
  const walletContract = new ethers.Contract(
    contractAddress,
    walletAbi.abi,
    provider
  );

  const contractName = await walletContract.name();
  console.log("Contract Name:", contractName);

  const num = await walletContract.getValue();
  console.log("Number Value:", String(num));

  const contractBalance = await walletContract.contractBalance();
  const balethContract = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance:", balethContract);

  const userBalance = await walletContract.accountBalance(
    "0xBE4024Fa7461933F930DD3CEf5D1a01363E9f284"
  );
  const balethUser = ethers.utils.formatEther(userBalance);
  console.log("User Balance:", balethUser);
};
contractIntreaction();