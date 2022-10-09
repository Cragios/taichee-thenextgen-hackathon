// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

contract Listing {
    string public identifier;
    address payable public host;
    address[] public participants;
    uint256 public target;
    uint256 public price;

    constructor(
        string memory _identifier,
        address payable _host,
        uint256 _target,
        uint256 _price
    ) {
        identifier = _identifier;
        host = _host;
        target = _target;
        price = _price;
    }

    //allows the listing to receive money
    receive() external payable {}

    // return entire array of participants
    function getParticipants() public view returns (address[] memory) {
        return participants;
    }

    // return whether or not contract balance has reached target
    function targetReached() public view returns (bool) {
        return address(this).balance >= target;
    }

    // register an account as a participant by placing an order (paying)
    function participate(address participant) public payable {
        require(msg.value == price);
        participants.push(participant);
    }

    // withdraw an account from participating by refunding amount paid
    function withdraw(address payable participant) public payable {
        (bool sent, ) = participant.call{value: price}("");
        require(sent, "Error: payment not returned");
        for (uint i = 0; i < participants.length; i++) {
            if (participants[i] == participant) {
                participants[i] = participants[participants.length - 1];
                participants.pop();
                break;
            }
        }
    }

    // TODO: release only participant payment
    // function complete() public payable {}
}
