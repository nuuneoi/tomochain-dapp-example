pragma solidity ^0.4.18;

contract SimpleContract {
    event BalanceUpdated(uint balance);

    uint balance;

    constructor() public {
        // Set initial balance as 1000
        balance = 1000;
    }

    function setBalance(uint newBalance) public {
        // Cap balance to be between 0 to 10000 (inclusive)
        require(newBalance <= 10000);
        // Set new balance
        balance = newBalance;
        // Emit an event
        emit BalanceUpdated(balance);
    }

    function getBalance() public view returns(uint) {
        return balance;
    }

}
