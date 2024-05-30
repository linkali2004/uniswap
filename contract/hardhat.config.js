require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      viaIR: true, 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    hardhat:{
      forking:{
        url:"https://mainnet.infura.io/v3/403d8f6a043c45fa9e93f33926ac8a69"
      }
    }
  }
};
