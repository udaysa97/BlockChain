contract stringsContract {
// Retrieves the element at specified index
//  Cannot do with strings, hence converting to bytes

  function  getElementAt(string name, uint index) public pure returns(byte) {

    // Convert string to bytes
    bytes  memory bytesData = bytes(name);  
    // Get the element at the specified index
    return bytesData[index]; 
    }
    }