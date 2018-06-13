'use strict'

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = '<PUT YOUR WALLET BACKUP KEY HERE>';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 4000000,
      network_id: "*"
    },
    tomotestnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://testnet.tomochain.com');
      },
      gas: 1000000,
      network_id: 89
    }
  }
};
