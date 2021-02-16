pragma solidity ^0.4.4;

contract EnumContract{
    enum names {uday, sandip, ankush, sajal, sarthak}
    
    function getNames(uint8 arg) public pure returns(string){
        if(arg == uint8(names.uday)) return "uday";
        if(arg == uint8(names.sandip)) return "sandip";
        if(arg == uint8(names.ankush)) return "ankush";
        if(arg == uint8(names.sajal)) return "sajal";
        if(arg == uint8(names.sarthak)) return "sarthak";
    }
}