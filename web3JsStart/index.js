let Web3 = require("web3");
let url = "https://mainnet.infura.io/v3/ac3cd14bf63847eb9ff1501da603ad26";

var web3 = new Web3(url);

var address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

web3.eth.getBalance(address, (err, bal) => {
  balance = bal;
});

// above returns a promise that sends value of balance as callback, it is stored in balance from bal

web3.utils.fromWei(balance, "ether");

web3.eth.getTransactionCount(address).then(console.log);

let abi = [
  {
    constant: true,
    inputs: [],
    name: "batFundDeposit",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "batFund",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenExchangeRate",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "finalize",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "refund",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenCreationCap",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isFinalized",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "fundingEndBlock",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ethFundDeposit",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "createTokens",
    outputs: [],
    payable: true,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenCreationMin",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "fundingStartBlock",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    inputs: [
      { name: "_ethFundDeposit", type: "address" },
      { name: "_batFundDeposit", type: "address" },
      { name: "_fundingStartBlock", type: "uint256" },
      { name: "_fundingEndBlock", type: "uint256" },
    ],
    payable: false,
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "LogRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "CreateBAT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
];

var contactAddress = "0x0D8775F648430679A709E98d2b0Cb6250d2887EF";

var contract = new web3.eth.Contract(abi, contactAddress);

console.log(contract.methods);

// Now we are directly calling functions and not through web3 since we have the token conmtract

contract.methods.name().call((err, result) => {
  console.log(result);
});
