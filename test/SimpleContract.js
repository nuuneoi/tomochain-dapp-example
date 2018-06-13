var SimpleContract = artifacts.require("./SimpleContract.sol");

contract('SimpleContract', function(accounts) {
  it("should put balance as 1000 in the first account", function() {
    return SimpleContract.deployed().then(function(instance) {
      return instance.getBalance.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account");
    });
  });  

  it("should set new balance as 100", function() {
    var _instance;
    return SimpleContract.deployed().then(function(instance) {
      _instance = instance;
      return _instance.setBalance(100);
    }).then(function() {
      return _instance.getBalance.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100, "balance was not changed to 100");
    });
  });  

  it("should set new balance as 200", function() {
    var _instance;
    return SimpleContract.deployed().then(function(instance) {
      _instance = instance;
      return _instance.setBalance(200);
    }).then(function() {
      return _instance.getBalance.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 200, "balance was not changed to 200");
    });
  });  

  it("should failed if trying to set new balance as -100", function() {
    var _instance;
    return SimpleContract.deployed().then(function(instance) {
      _instance = instance;
      return _instance.setBalance(-100);
    }).then(function(r) {
        assert(false, "balance was changed");
        return true;
      },
      function(e) {
      }
    );
  });  

  it("should failed if trying to set new balance as 20000", function() {
    var _instance;
    return SimpleContract.deployed().then(function(instance) {
      _instance = instance;
      return _instance.setBalance(20000);
    }).then(function(r) {
        assert(false, "balance was changed");
        return true;
      },
      function(e) {
      }
    );
  });  
});
