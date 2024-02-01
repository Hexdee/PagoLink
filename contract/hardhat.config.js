require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://eth-goerli.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
