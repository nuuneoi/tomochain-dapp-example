var Migrations = artifacts.require("./Migrations.sol");
var SimpleContract = artifacts.require("./SimpleContract.sol");

module.exports = function(deployer) {
 	return deployer.deploy(Migrations).then(() => {
    return deployer.deploy(SimpleContract);
  });
};
