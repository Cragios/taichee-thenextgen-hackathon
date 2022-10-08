// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

import "./Listing.sol";

contract Market {
    mapping(uint32 => Listing) public listings;
    uint32 public nextIndex;

    event Created(uint32 index, address host, uint target);

    event Participated();

    // event Withdrawn();

    // event PaymentReleased();

    constructor() {}

    // TODO: get listings
    // function getListings(uint32 _index) public returns () {}

    // create a listing
    function createListing(
        string memory identifier,
        address host,
        uint target
    ) public {
        Listing listing = new Listing(identifier, host, target);
        listings[nextIndex] = listing;
        nextIndex++;
    }

    // register an account in a listing
    function participateInListing(uint32 _index) public payable {
        listings[_index].participate{value: msg.value}(msg.sender);
    }

    // TODO: withdraw an account from being a participant in a listing
    // function withdrawFromListing(uint32 _index) public payable {}

    // TODO: release participant payment to host in a listing
    // function releasePayment(uint32 _index, address participant) public {}

    // get entire array of participants in listing
    function getListingParticipants(uint32 _index)
        public
        view
        returns (address[] memory)
    {
        return listings[_index].getParticipants();
    }
}
