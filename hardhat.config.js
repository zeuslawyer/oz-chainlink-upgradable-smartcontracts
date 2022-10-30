require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL_HTTP || process.env.GOERLI_RPC_URL_WS;

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY_DEV1;

const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY;

task(
  "balances",
  "Prints the list of AVAX account balances",
  async (args, hre) => {
    const accounts = await hre.ethers.getSigners();
    for (const account of accounts) {
      const balance = await hre.ethers.provider.getBalance(account.address);
      console.log(`${account.address} has balance ${balance.toString()}`);
    }
  }
);

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  accounts.forEach(account => {
    console.log(account.address);
  });
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
