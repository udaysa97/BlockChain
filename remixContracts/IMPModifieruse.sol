pragma solidity ^0.4.25;

    contract Modifiers {

    uint  public  minimumOffer = 100;

    modifier  minimumAmount(){
        if(msg.value >= minimumOffer){
            _;
        } else {
            /** Throw an exception */
            revert();
        }
    }

    function  bid() payable public minimumAmount returns(bool)  {
        // Code the adding a new bid
        return true;
    }
    }