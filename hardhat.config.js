require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/aw1Piy_yhBUVNnBEfTK-6lzbFTQikl_a",
      accounts: [
        `0x${"0c3cce3a919332115a99bb57cd4b43f5a32ae5ef039dae52a6dbc5f6a10f3b76"}`,
      ],
      gasMultiplier: 1,
      gas: 21000000,
      gasPrice: 8000000000,
      timeout: 20000,
      saveDeployments: true,
      chainId: 5,
    },
  },
};