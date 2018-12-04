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
    bytes[] public userNames;

    // roulette winner
    uint public winner;

    // userAddress => make Randome Number Times
    // user can make random number only once
    mapping(address => uint ) public makeRandomNumberTimes;

    // set candidate
    //TODO:あとでonlyOwnerとonlyOnceを付け足すこと
    function setUserName(bytes[] _userNames) public onlyOwner onlyOnce{
        userNames = _userNames;
    }

    // NOTE : this function uses blockhash and it is NOT secure !
    function generateRandomNumber() public returns(uint){
        makeRandomNumberTimes[msg.sender]++;
        uint userNumber = userNames.length;
        bytes32 blockhash = block.blockhash(block.number - 1);
        uint winner = uint32(blockhash) % userNumber;
        return winner;
    }

    // return wineer name
    function viewResult() public view returns(bytes){
        return userNames[winner];
    }

}