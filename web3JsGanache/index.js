let Web3 = require("web3");

let EthereumTransaction = require("ethereumjs-tx").Transaction;

let web3 = new Web3("HTTP://127.0.0.1:7545"); // URL from ganache GUI. Can use CLI depending on preference

// To get Accounts
//web3.eth.getAccounts().then((accounts) => console.log(accounts));

// Set sending and receiving address
let sendingAddress = "0x33BCFF0501bFeE26a6788C0c65C747534099926f";
let receivingAddress = "0xB86FcD4d3Bb95Be1F56986FA912491cb526BFB1f";

// cehck balance of each address

web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// Create a Transaction

// set transaction using tramsaction variables

let rawTransaction = {
  nonce: 0, // If same transaction is run twice will give error has nonce needs to be incrememnted
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: "0x", // important when sending transaction to contract account. 0x is added instead of empty space to avoid buffer hex conversion error
};

// Sign the transaction with hex value of private key of sender

let privateKeySender =
  "675e8f595e9570932269b466ce0bd89a526cb51abea928114ca00a6739c8d6d8";
let privateKeySenderHex = new Buffer(privateKeySender, "hex");
let transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

// send transaction to network
let serealizedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serealizedTransaction);
