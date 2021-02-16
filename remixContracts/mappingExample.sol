pragma solidity ^0.4.25;

contract mappingExample{
    mapping(string => string) capitals;
    
    function addCapital(string country, string capital) public {
        capitals[country] = capital;
        
    }
    
    function getCapital(string _country) public view returns(string){
        return capitals[_country];
    }
    
    function removeCapitals(string country) public{
        delete(capitals[country]);
    }
}