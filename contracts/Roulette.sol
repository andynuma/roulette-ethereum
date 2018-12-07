pragma solidity ^0.4.19;
pragma experimental ABIEncoderV2;
import "./Owned.sol";

contract Roulette is Owned{

    // owner can deploy contract at once;
    uint public deployTime = 0;

    constructor(){
        ownerAddr = msg.sender;
        deployTime += 1;
    }

    modifier onlyOnce{
        require(deployTime == 0);
        _;
    }

    // candidates
    string[] public userNames;

    // roulette winner
    uint public winner;

    // userAddress => make Randome Number Times
    // user can make random number only once
    mapping(address => uint ) public makeRandomNumberTimes;

    // set candidate
    //TODO:onlyOwnerを消すこと
    function setUserName(string _userNames) public {
        userNames.push(_userNames);
    }

    // NOTE : this function uses blockhash and it is NOT secure !
    function generateRandomNumber() public{
        //TODO:テストのためにrequireをコメントアウト
        require(makeRandomNumberTimes[msg.sender] == 0,"you already make random number");
        makeRandomNumberTimes[msg.sender]++;

        uint userNumber = userNames.length;
        bytes32 blockhash = block.blockhash(block.number - 1);
        uint mywinner = uint32(blockhash) % (userNumber+1);
        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる
        winner = mywinner ;
    }

    // return wineer name
    function viewResult() public view returns(string){
        return userNames[winner];
    }

    function viewUsers() public view returns(uint){
        return userNames.length;
    }

}