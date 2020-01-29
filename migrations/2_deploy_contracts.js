var GiveTogether = artifacts.require("../contracts/GiveTogether.sol");

module.exports = function(deployer) {
    deployer.deploy(GiveTogether);
};