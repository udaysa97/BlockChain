/**
 *                          Block class
 *  The Block class is a main component into any Blockchain platform,
 *  it will store the data and act as a dataset for your application.
 *  The class will expose a method to validate the data... The body of
 *  the block will contain an Object that contain the data to be stored,
 *  the data should be stored encoded.
 *  All the exposed methods should return a Promise to allow all the methods
 *  run asynchronous.
 */

const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

class Block {
  // Constructor - argument data will be the object containing the transaction data
  constructor(data) {
    this.hash = null; // Hash of the block
    this.height = 0; // Block Height (consecutive number of each block)
    this.body = Buffer(JSON.stringify(data)).toString("hex"); // Will contain the transactions stored in the block, by default it will encode the data
    this.time = 0; // Timestamp for the Block creation
    this.previousBlockHash = null; // Reference to the previous Block Hash
  }

  /**
   *  validate() method will validate if the block has been tampered or not.
   *  Been tampered means that someone from outside the application tried to change
   *  values in the block data as a consecuence the hash of the block should be different.
   *
   */
  validate() {
    // To make this(object reference) accessible in the promise using closure concept
    let self = this;
    return new Promise((resolve, reject) => {
      // Save in auxiliary variable the current block hash
      let storedHash = self.hash;
      // Recalculate the hash of the Block
      let blockHash = SHA256(JSON.stringify(self)).toString();
      // Comparing if the hashes changed
      let hashChanged = storedHash === blockHash;
      // Returning the Block is not valid
      // Returning the Block is valid
      hashChanged ? reject("Block is Not Valid") : resolve("Valid block");
    });
  }

  /**
   *  Auxiliary Method to return the block body (decoding the data)
   
   */
  getBData() {
    let self = this;
    return new Promise((resolve, reject) => {
      // Getting the encoded data saved in the Block
      let blockData = self.body;
      // Decoding the data to retrieve the JSON representation of the object
      blockData = hex2ascii(blockData);
      // Parse the data to an object to be retrieve.
      let dataObject = JSON.parse(blockData);
      // Resolve with the data if the object isn't the Genesis block
      self.previousBlockHash === null
        ? reject("Error! No Block data")
        : resolve(dataObject);
    });
  }
}

module.exports.Block = Block; // Exposing the Block class as a module
