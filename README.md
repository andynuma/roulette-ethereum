![roulette_action](https://user-images.githubusercontent.com/29624403/50574000-1d042a80-0e22-11e9-9271-4a7b937b3178.gif)

Deployed at ropsten network.  
contract address:[0x54dDEFcd7EC70405701F596856e6E5A64d5d7883](https://ropsten.etherscan.io/address/0x54dDEFcd7EC70405701F596856e6E5A64d5d7883)

## Installtion
### Install packages
 - `npm init`
 - `npm install --save next react react-dom truffle-contract`

### add some code at package.json  
```js
// package.json
 {
   // ...
   "scripts": {
     "dev": "npm run artifacts && next client",
     "artifacts": "cp -r ./build/contracts/ ./client/web3/artifacts",
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   
   // ...
 }
```

### compile and migrate  
 - Launch [Ganache](https://truffleframework.com/ganache)
 - `truffle compile`
 - `truffle migrate`

### Run  
 - `npm run dev`


## Random Number Generation is NOT secure !
This contract uses the blockhash for creating a random number, and it is NOT secure.
```solidity
uint public winner;

// create random number (0 ~ (userNumber-1) ) 
function getBlockHash() public{
    uint userNumber = 4; // 0 ~ 3
    bytes32 myblockhash = blockhash(block.number - 1);
    uint mywinner = uint(myblockhash) % (userNumber);
    winner = mywinner;
}
```
