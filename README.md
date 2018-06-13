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





