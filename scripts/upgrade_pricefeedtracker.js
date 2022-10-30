const { ethers, upgrades } = require("hardhat");

async function main() {
  const deployedProxyAddress = "0x443eE9Ed674734f84daC8D6e0a6BA0D8054066e1"; // Check this address is right before deploying.
  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");
  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main();
