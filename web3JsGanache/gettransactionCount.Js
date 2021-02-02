let Web3 = require("web3");

let web3 = new Web3("HTTP://127.0.0.1:7545");

web3.eth
  .getTransactionCount("0x130cB9eF9b293ABBF83DfFB73263236f8640C1b0")
  .then(console.log);
