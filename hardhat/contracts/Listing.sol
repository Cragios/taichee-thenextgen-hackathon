// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

contract Listing {
    string public identifier;
    address public host;
    address[] public participants;
    uint256 public target;
    string public description;

    constructor(
        string memory _identifier,
        address _host,
        uint256 _target
    ) {
        identifier = _identifier;
        host = _host;
        target = _target;
    }

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
        require(msg.value > 0 ether);
        participants.push(participant);
    }

    // TODO: release only participant payment
    // function complete() public payable {}
}
