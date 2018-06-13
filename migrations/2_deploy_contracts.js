var SimpleContract = artifacts.require("./SimpleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleContract);
};
