/**
Import from crypto-js module the SHA256 library.
 */
var CryptoJS = require("crypto-js");

const data1 = "Blockchain Rock!";
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3), // Changes value every second hence affects the hash produced
};

/**
 *Add code to the `generate hash function
 * Function that generates the SHA256 Hash
 */

function generateHash(obj) {
  return CryptoJS.SHA256(JSON.stringify(obj));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);

/**
 * Run your application using `node hashing.js`
 */
