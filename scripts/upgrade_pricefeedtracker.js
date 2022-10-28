const { ethers, upgrades } = require("hardhat");

async function main() {
  const deployedProxyAddress = "0x9fcbBf6F6F3f381FaA79Bb88a04711143cf2fed1"; // Check this address is right before deploying.
  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");
  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main();
