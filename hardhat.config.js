require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.13',
  etherscan: {
    // Your API key for Etherscan Verify
    // Obtain one at https://etherscan.io/
    apiKey: 'XXX',
    
    // Your API key for Polygonscan Verify
    // Obtain one at https://Polygonscan.io/
    //polygonscan
    // apiKey: 'XXX',
  },

  networks: {
    //POLYGON TESTNET
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      chainId: 80001,
      // gasPrice: 50*1000000000,
      // gasLimit: 100*1000000000,
      loggingEnabled: true,
      gasMultiplier: 2.5,
      accounts: ['0x' + process.env.DEPLOYER_PRI_KEY],
    },

    //GOERLI ETH TESTNET
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 5,
      accounts: ['0x' + process.env.DEPLOYER_PRI_KEY],
    },

    //RINKEBY ETH TESTNET
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 4,
      accounts: ['0x' + process.env.DEPLOYER_PRI_KEY],
    },

    //ROPSTEN ETH TESTNET
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 3,
      accounts: ['0x' + process.env.DEPLOYER_PRI_KEY],
    },
  },
};
