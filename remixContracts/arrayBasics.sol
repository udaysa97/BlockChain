pragma solidity ^0.4.25;

contract arrayConcepts{
    int[3] staticArray = [1,2];
    
    int8[] dynamicIntArray;
    
    bool[] dynamicBoolArray;
    
    function testArray() public{
        dynamicBoolArray = new bool[](8);
        
        dynamicIntArray = [int8(1),2,3];
        
        uint8[] memory memoryArray;
        
        uint8[] memory dynamicMemoryArray;
        
      //  dynamicMemoryArray = [uint8(1),2,3];  // will give error as not allowed
      
    //    dynamicMemoryArray.push(5); // cannot push
   // dynamicMemoryArray.length = 6 // will give error. only for dynamic array in storage
        
        memoryArray = new uint8[](8);
        
        staticArray = [1,2,3];
        
        uint[2] memory staticMemoryArray;
        
        staticMemoryArray = [uint(1),2];
        staticMemoryArray[0] = 0;
        staticMemoryArray[1] = 1;
        
        dynamicMemoryArray[0] = 1;
        dynamicMemoryArray[1] = 2;
        
        
    }
}