// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTrackerV2 is Initializable {
    address private admin;
    address public pricefeed;

    // Emitted when the stored value changes
    event PriceFeedChanged(address oldfeed, address newfeed);

    function initialize(address _admin) public initializer {
        admin = _admin;
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    // Updates price feed address
    function setPriceFeed(address newfeed) public {
        address old = pricefeed;
        pricefeed = newfeed;
        emit PriceFeedChanged(old, newfeed);
    }

    // Fetches the price from the pricefeed
    function retrievePrice() public view returns (int) {
        require(
            pricefeed != address(0x0),
            "PriceFeedTrackerV2: Pricefeed address not set."
        );

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
