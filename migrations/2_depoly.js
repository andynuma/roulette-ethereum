const Roulette = artifacts.require("Roulette");

module.exports = (deployer,accounts) =>{
    deployer.deploy(Roulette);
    //gas: 2000000
};