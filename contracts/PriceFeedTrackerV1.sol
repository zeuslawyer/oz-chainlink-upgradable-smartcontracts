// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTracker is Initializable {
    address private admin;

    function initialize(address _admin) public initializer {
        admin = _admin;
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    /**
     * Network: Goerli
     * Aggregator: ETH/USD
     * Address: 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
     */
    function retrievePrice() public view returns (int) {
        AggregatorV3Interface aggregator = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
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

// 0xb35dC8619ce82c79D8Cf4f6Fa2e097e10dB41Fe6
// 0xA6E8069ddfE9438b406e7b0AB598e6dd72E2Bba9 -> 0x8623aed6d41fb9429f274dd0e5cef0fd766b2ac8
// 0x443eE9Ed674734f84daC8D6e0a6BA0D8054066e1 -> 0xe49d2e417f098b97257e01e7106bde4ee66e5a05
// 0x5c28462c2C6ca5635Fa1Efdc0A5d1D5600F4DcdE  -> 0x814299908dc13dde43bbdc28b067b9f5619e3a42 -> 0x99eda018edb3438f3ae742039b5011592f03be15
