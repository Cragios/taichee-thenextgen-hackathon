// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

import "./Listing.sol";

contract Market {
    mapping(uint32 => Listing) public listings;
    uint32 public nextIndex;

    struct listingData {
        address listingAddress;
        string identifier;
        address host;
        uint balance;
        uint target;
        uint price;
        address[] participants;
    }

    event Created(uint32 index, address host, uint target, uint price);
    event Participated(address participant, uint amountPaid);
    event Withdrawn(address participant, uint amountReturned);

    // event PaymentReleased();

    constructor() {}

    // get data of one listing
    function getListingData(uint32 _index)
        public
        view
        returns (listingData memory)
    {
        return
            listingData(
                address(listings[_index]),
                listings[_index].identifier(),
                listings[_index].host(),
                address(listings[_index]).balance,
                listings[_index].target(),
                listings[_index].price(),
                listings[_index].getParticipants()
            );
    }

    // get array of data of all listings
    function getAllListingData() public view returns (listingData[] memory) {
        listingData[] memory listingDatas = new listingData[](nextIndex);
        for (uint32 _index; _index < nextIndex; _index++) {
            listingDatas[_index] = getListingData(_index);
        }
        return listingDatas;
    }

    // get balance of a listing
    function getListingBalance(uint32 _index) public view returns (uint) {
        return address(listings[_index]).balance;
    }

    // get price of a listing
    function getListingPrice(uint32 _index) public view returns (uint) {
        return address(listings[_index]).balance;
    }

    // get entire array of participants in a listing
    function getListingParticipants(uint32 _index)
        public
        view
        returns (address[] memory)
    {
        return listings[_index].getParticipants();
    }

    // create a listing
    function createListing(
        string memory identifier,
        address payable host,
        uint target,
        uint price
    ) public {
        Listing listing = new Listing(identifier, host, target, price);
        listings[nextIndex] = listing;
        emit Created(nextIndex, host, target, price);
        nextIndex++;
    }

    // register an account in a listing
    function participateInListing(uint32 _index) public payable {
        listings[_index].participate{value: msg.value}(msg.sender);
        emit Participated(msg.sender, msg.value);
    }

    // withdraw an account from being a participant in a listing
    function withdrawFromListing(uint32 _index) public payable {
        listings[_index].withdraw(payable(msg.sender));
        emit Withdrawn(msg.sender, listings[_index].price());
    }

    // TODO: release participant payment to host in a listing
    //function releasePayment(uint32 _index, address participant) public {}
}
