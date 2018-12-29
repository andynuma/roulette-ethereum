# roulette-ethereum
<img width="602" alt="2018-12-29 21 50 20" src="https://user-images.githubusercontent.com/29624403/50538513-3ef87580-0bb4-11e9-913b-37a90eb602bf.png">

Roulette on Ethereum https://roulethereum.herokuapp.com/ (this is old version)


## Random Number Generation
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
