// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTrackerV2 is Initializable {
    address private admin;
    address public pricefeed;

    // Emitted when the stored value changes
    event PriceFeedChangedTo(address newFeed);

    function initialize(address _admin) public initializer {
        admin = _admin;
        pricefeed = 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e; // initialize with ETH/USD on Goerli.
        emit PriceFeedChangedTo(pricefeed);
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    // Updates price feed address
    function setPriceFeed(address newfeed) public {
        // address oldfeed = pricefeed;
        pricefeed = newfeed;
        emit PriceFeedChangedTo(newfeed);
    }

    function getPriceFeed() public view returns (address) {
        return pricefeed;
    }

    // Fetches the price from the pricefeed
    function retrievePrice() public view returns (int) {
        AggregatorV3Interface aggregator = AggregatorV3Interface(pricefeed);
        (
            ,
            /*uint80 roundID*/
            int price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = aggregator.latestRoundData();

        return price;
    }
}
