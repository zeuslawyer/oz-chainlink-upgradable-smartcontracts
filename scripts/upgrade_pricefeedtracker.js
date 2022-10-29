const { ethers, upgrades } = require("hardhat");

async function main() {
  const deployedProxyAddress = "0xA6E8069ddfE9438b406e7b0AB598e6dd72E2Bba9"; // Check this address is right before deploying.
  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");
  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main();
