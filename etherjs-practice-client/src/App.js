import './App.css';
import { useEffect } from "react";
const { ethers } = require("ethers");
require('dotenv').config();

function App() {
  const contracAddress = process.env.contracAddress;
  const walletAbi = require('./artifacts/contracts/Wallet.sol/Wallet.json');
  
  useEffect(() => {

    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contracAddress, walletAbi, signer);
      await contract.setValue(2);
      await contract.sendEthContract({ value: ethers.utils.parseEther("0.1") });
      await contract.sendEthUser("0x11aa79c34BD4D74AF2f7db48D0A5f85Ad4E99E72", {
        value: ethers.utils.parseEther("0.1"),
      });
    };
    writeContract();
  }, []);
  
  return (
    <>
      
    </>
  );
}

export default App;
