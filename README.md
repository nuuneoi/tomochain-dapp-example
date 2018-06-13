# TomoChain dApp Basic Example

This repository contains the Solidity smart contract codes and the full instructions to:

* Setup Truffle, the most popular development framework for Ethereum which also works perfectly for TomoChain.
* Create a TomoChain wallet.
* Obtain Wallet's Backup Key
* Request fund to the created TomoChain wallet.
* Explore the Block Explorer
* Compile and deploy the created smart contract to TomoChain testnet.
* Connect Metamask to TomoChain testnet.
* Create a front end website and make it interact with TomoChain smart contract through web3.js.

### Required Knowledges

To understand to whole things clearly, you need to have an knowledge on **Solidity**, **Truffle** and **web3.js**. Anyway, even if you don't, you still can follow the instructions step by step to complete the codelab.

# What is TomoChain?

TomoChain is an Ethereum fork that performs significantly better. Its block time was reduced from 15s to just 2s and the transaction fee is zero.

And since it is an Ethereum fork, any development kit or programming language that works for Ethereum will also works for TomoChain!

TomoChain is developed by Vietnam blockchain developer who is a former project lead of famous NEM. Mainnet is expected to be live on Q4'18. Anyway, testnet is now already working and is also already opened to any developer to test their own dApp on it with no cost.

# Get Started: Installation

There are two applications that we need to install through npm. The first one is **Truffle**, the development framework for Ethereum. We will use it to compile and deploy our smart contract to the testnet. And the second one is **http-server**, we will use it to create a simple http server to test our front-end website.

```
$ npm install -g truffle http-server
```

And then let's clone this repository to your local machine.

```
$ git clone git@github.com:nuuneoi/tomochain-dapp-example.git
```

Install required npm package.

```
cd tomochain-dapp-example
$ npm install
```

That's all. Your compiler toolchain is now ready!

# Create a TomoChain Wallet

To create a TomoChain wallet, just do the following easy steps:

1) Browse to https://wallet.tomocoin.io/
2) Click on **+ CREATE NEW WALLET** button.

You now have a wallet! Address will be shown on the top left area. Write it down somewhere. We will use it in many steps below.

![TomoWallet](https://github.com/nuuneoi/tomochain-dapp-example/raw/master/img/tomowallet1.jpg)


Easy, huh?

# Obtain Wallet's Backup Key

Backup Key is a mnemonic seed representing the private spend key. It is pretty important. Without it, you will not be able to spend the balance in your address. Just don't forget to write it down somewhere.

1) Browse to https://wallet.tomocoin.io/
2) Click on **three dots menu** at the right top position and click at **SHOW YOUR BACKUP KEY**. You will see the dialog popped up like this.

![Seed Key](https://github.com/nuuneoi/tomochain-dapp-example/raw/master/img/seedkey1.jpg)

3) Copy the words on the last row and write them down somewhere. (These words are also needed to be put in our source code in the smart contract deployment step below.)

**Please note that this mnemonic seed have to be kept private**. Don't give it to anyone or post it to the public space otherwise your might lose the entire balance to the bad guy.

You could now close the wallet tab since we will not use this site anymore. We just need it to generate an address and obtain the associated backup key.

# Request fund

Fund is needed to do stuff like smart contract deployment. Don't worry, it does not cost you any buck since it is the testnet! You can simply request some fund to be transferred to your wallet in few easy steps:

1) Browse to https://faucet.tomochain.com/
2) Put your wallet address to the textbox and make sure you pass the captcha test.

![Faucet](https://github.com/nuuneoi/tomochain-dapp-example/raw/master/img/faucet1.jpg)

3) Click on **REQUEST 1 TOMO**

Wait for like 5-10 seconds and then ... tadaaaa. Your wallet should now have 1 TOMO transferred to. Let's go check it.

# Explore the Block Explorer

To check to latest balance of the address, let's do it in Tomoscan a.k.a. the TomoChain block explorer!

1) Browse to https://explorer-testnet.tomochain.com/
2) In the search box on the top right area, enter the address and then press the enter key.
3) The TOMO Balance should be shown as 1 TOMO like this.

![Balance](https://github.com/nuuneoi/tomochain-dapp-example/raw/master/img/tomobalance1.jpg)

**Tips:** Don't look at the TOMO USD Balance since it may be quite depressing right now.

Now your wallet has an enough balance to do the entire things in this tutorial so ... let's go ahead!

# Compile and deploy the created smart contract to TomoChain testnet

The source code in this git repository is written in Truffle framework which is pretty handy. You can compile and do things in just one command line.

### Look at the source code

This is a Solidity source code used in this tutorial. You can find it in `contracts/SimpleContract.sol` file.

```java
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
```

This smart contract is super basic. It allows you to set the public variable `balance` through `setBalance` function and you can retrieve the balance by calling `getBalance`. If you are already familiar with Solidity, you should understand the whole code in no time.

### Compile

To compile the source code, just type this command in the repository directory.

```
$ truffle compile
```

The following result should be shown.

```
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/SimpleContract.sol...
Writing artifacts to ./build/contracts
```

Now your smart contract has already been compiled. The compiled code are stored in the `build` directory. You can go check it out if you want to.

### Setup Deployment Wallet

Now it is almost ready to deploy to the testnet. Anyway, we need to specify the TomoChain wallet to deploy the smart contract first. Of course, the wallet we are going to use is the one that we created in the previous step. Here is the steps to 

1) Open `truffle.js` file. Here is the content inside.

```javascript
'use strict'

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = '<PUT YOUR WALLET BACKUP KEY HERE>';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 4000000,
      network_id: "*"
    },
    tomotestnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://testnet.tomochain.com');
      },
      gas: 1000000,
      network_id: 89
    }
  }
};
```

2) Copy the backup key obtained in the previous step and paste it as a value of `mnemonic` variable.

```
var mnemonic = '<PUT YOUR WALLET BACKUP KEY HERE>';
```

Done. Please note that the `tomotestnet` network will be used to deploy the smart contract we created. However, if you are familiar with Ganache, you could use the `development` network to do the local test as well if you want to.


### Deploy

Now it is time to deploy the smart contract to the TomoChain testnet! You can deploy the compiled smart contract using the following command.

```
$ truffle migrate --network tomotestnet
```

Here is the expected result.

Using network 'tomotestnet'.

```
Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x081825424ce179259d661e2cd508b6a3ec5d3c622275168bff3f0d8460348c3f
  Migrations: 0x65730da7e39d3787723a8949bc7d41e7f0f013ba
Saving successful migration to network...
  ... 0xd96186343a751f2365d6311d6c7c52d67a86eee04854c40806a628526b0a573a
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying SimpleContract...
  ... 0xe80a4bac1ebbfcdd5170d469aa3998f1ee292227b3c7fa677e108135a7feb705
  SimpleContract: 0xb9cb9aa779c0ae4d6fe8a2292fc61233c5cad4be
Saving successful migration to network...
  ... 0x1397e27ad32783349568f65397e81f54dd3b1c36aa9405f06a804b271a23a88c
Saving artifacts...
```

Don't be surprise if those hex code are not the same as mine since they would be different for each person.

It is worth noting that the long hex code are the `TxHash` while the short one are `contract address`. If you want to play around, please feel free to copy those hex code in block explorer and see the details. Anyway, I will not go over those stuffs since it is too details.

Alright, although there are a lot of alien stuff printed out right now but actually the only address that we need to use in the further step is `0xb9cb9aa779c0ae4d6fe8a2292fc61233c5cad4be` which is the contract address of SimpleContract we created. ***Please note that your contract address will be different than mine so please ignore my address and use yours instead.***

### Go Check the Deployment Transaction

The deployment steps are actually simply a set of transactions so we can see them on block explorer. So ... let's go check them out! Just simply go to the Tomoscan page and enter your address. 4 new transactions would be shown like below.

![Balance](https://github.com/nuuneoi/tomochain-dapp-example/raw/master/img/contracttx1.jpg)

No action item on this. Just want you to make sure that your contract deployment has successfully been done on TomoChain testnet.