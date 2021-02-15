pragma solidity ^0.4.25;

contract stringConcepts{
    byte[3] fixedByteArray;
    bytes3 bytes3Array;  // also static 3 byte element is created
    
    byte[] dynamicByteArray;
    bytes bytesArray;
    
    string string1 = "testing";
    
    function conversionTest() public pure returns(string){
        bytes memory string2 = "udacity"; //dynamic memory bytes type
        string memory converted = string(string2);
        return converted;
    }
    
    function getElementAt(uint index) public view returns(byte){
        bytes memory bytesData = bytes(string1);
        byte element = bytesData[index];
        return element;
    }
    
    function testing() public{
        // uint8 needs explicit conversion to byte type, convert to byte since fixedByteArray is a byte fixedByteArray
        // assignment not allowed as bytes3Array is static is readonly
        
        fixedByteArray = [byte(1),2,3];
        //fixedByteArray[0] = 1 // will give error
        
        bytes memory memoryBytes;
        memoryBytes = new bytes(20);
        memoryBytes[0] = "a";
        
        // push will give error
    }
    
    function stringExample() public pure returns(string){
        string memory string3 = "abcde";
        return string3;
    }
}