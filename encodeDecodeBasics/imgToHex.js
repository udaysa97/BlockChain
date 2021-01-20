// Require file system access
const fs = require("fs");

// Read file buffer
let imgReadBuffer = fs.readFileSync("test-pattern.jpg");

console.log(imgReadBuffer);

// Encode image buffer to hex
const imgHexEncode = new Buffer(imgReadBuffer).toString("hex");

// Output encoded data to console
console.log(imgHexEncode);

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, "hex");

// Save decoded file file system
fs.writeFileSync("decodedImage.jpg", imgHexDecode);
