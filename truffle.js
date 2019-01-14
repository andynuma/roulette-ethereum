var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "dismiss absurd endless awesome issue aware calm exercise title crowd fossil evoke";
// it's mnemonic has only testnet ETH, and has no real money.

module.exports = {
    networks: {

      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*" // Match any network id
        //gas:4712388
      },

      ropsten: {
        provider: function() {
          return new HDWalletProvider(
            mnemonic,
            "https://ropsten.infura.io/v3/e7f335b97b99402d97808afadaa1a473",
             // accessTokenによって変わる
          );
        },
        network_id: 3,
        // gas: 5000000
      }
  }
}
