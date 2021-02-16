pragma solidity ^0.4.25;

contract mappingExample{
    mapping(string => string) capitals;
    
    function addCapital(string memory country, string memory capital) public {
        capitals[country] = capital;
        
    }
    
    function getCapital(string memory _country) public view returns(string memory){
        return capitals[_country];
    }
    
    function removeCapitals(string memory country) public{
        delete(capitals[country]);
    }
}