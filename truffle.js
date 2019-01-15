var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "praise wear pet slice six poverty abuse ivory grain tackle settle easy";
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
