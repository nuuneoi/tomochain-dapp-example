# TomoChain dApp Basic Example

This repository contains the Solidity smart contract codes and the full instructions to:

* Setup Truffle, the most popular development framework for Ethereum which also works perfectly for TomoChain.
* Create a TomoChain wallet.
* Request fund to the created TomoChain wallet.
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

You now have a wallet! Address and balance will be shown on the top left area as you supposes to already see it right now.



Easy, huh?

# Obtain Wallet Backup Key

1) Browse to https://wallet.tomocoin.io/
2) Click on **three dots menu** at the right top position and click at **SHOW YOUR BACKUP KEY**.
3) 