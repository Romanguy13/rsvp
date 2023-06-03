// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract RSVP {
    event NewEvent(
        bytes32 indexed eventId,
        address eventOwner,
        uint256 eventTimestamp,
        uint256 deposit,
        uint256 maxCapacity,
        string eventDataCID
    );

    struct CreateEvent {
        bytes32 eventId;
        string eventDataCID;
        address eventOwner;
        uint256 eventTimestamp;
        uint256 deposit;
        uint256 maxCapacity;
        address[] confirmedRSVPs;
        address[] claimedRSVPs;
        bool paidOut;
    }

    mapping(bytes32 => CreateEvent) public idToEvent;

    event NewRSVP(bytes32 eventID, address attendeeAddress);

    function createNewEvent(
        uint256 _eventTimestamp,
        uint256 _deposit,
        uint256 _maxCapacity,
        string calldata _eventDataCID
    ) external {
        bytes32 _eventId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                _eventTimestamp,
                _deposit,
                _maxCapacity
            )
        );

        address[] memory _confirmedRSVPs;
        address[] memory _claimedRSVPs;

        require(
            idToEvent[_eventId].eventOwner == address(0),
            "Event already exists"
        );
        require(_deposit > 0, "Deposit must be greater than 0");
        require(_maxCapacity > 0, "Max capacity must be greater than 0");
        require(
            _maxCapacity <= 100,
            "Max capacity must be less than or equal to 100"
        );

        idToEvent[_eventId] = CreateEvent({
            eventId: _eventId,
            eventDataCID: _eventDataCID,
            eventOwner: msg.sender,
            eventTimestamp: _eventTimestamp,
            deposit: _deposit,
            maxCapacity: _maxCapacity,
            confirmedRSVPs: _confirmedRSVPs,
            claimedRSVPs: _claimedRSVPs,
            paidOut: false
        });

        emit NewEvent(
            _eventId,
            msg.sender,
            _eventTimestamp,
            _deposit,
            _maxCapacity,
            _eventDataCID
        );
    }

    function createNewRSVP(bytes32 eventId) external payable {
        // look up event
        CreateEvent storage myEvent = idToEvent[eventId];

        // transfer deposit to our contract / require that they sent in enough ETH
        require(
            msg.value >= myEvent.deposit,
            "You must send in enough ETH to cover the deposit"
        );

        // require that the event hasn't already happened (<eventTimestamp)
        require(
            block.timestamp < myEvent.eventTimestamp,
            "This event has already happened"
        );

        // require that the event hasn't already reached max capacity
        require(
            myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
            "This event has reached max capacity"
        );

        // make sure that the user hasn't already RSVP'd
        for (uint256 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            require(
                myEvent.confirmedRSVPs[i] != msg.sender,
                "You have already RSVP'd to this event"
            );
        }

        // add user to confirmedRSVPs array
        myEvent.confirmedRSVPs.push(msg.sender);

        // emit event
        emit NewRSVP(eventId, msg.sender);
    }
}
