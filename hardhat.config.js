//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "ae68d589481a43ee8a946a55e3499e70"

module.exports={
  networks:{
    hardhat: {
      chainId: 1337
    },
    mainnet:{
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    goerli:{
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    }
  },
}

module.exports = {
  solidity: "0.8.4",
};
