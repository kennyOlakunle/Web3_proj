// https://eth-ropsten.alchemyapi.io/v2/UkufOaWq2QwfNumC9mKqp1p893peb_T3


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UkufOaWq2QwfNumC9mKqp1p893peb_T3',
      accounts: ['7b8abacea97cb716fcd1f0aa24fa0d1e8218854f99c7853a6771788d4ab88127'],
    },
  },
};