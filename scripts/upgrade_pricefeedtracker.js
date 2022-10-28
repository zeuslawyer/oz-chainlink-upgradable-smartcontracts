const { ethers, upgrades } = require("hardhat");

async function main() {
  const deployedProxyAddress = "0xdB7d8eBC621B9310de6e092656B4A78667B2a9Fe"; // Check this address is right before deploying.
  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");
  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main();
