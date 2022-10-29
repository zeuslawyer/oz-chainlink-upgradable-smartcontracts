const { ethers } = require("hardhat");

// https://www.youtube.com/watch?v=MhtJLUl51gE

async function main() {
  const alchemy = new ethers.providers.JsonRpcProvider(
    process.env.GOERLI_RPC_URL_HTTP
  );

  const gasPrice = await alchemy.getGasPrice();
  console.log(gasPrice);

  return;

  const DEV1 = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY_DEV1, alchemy);
  const DEV2 = "0x52eE5a881287486573cF5CB5e7E7D92F30b03014";

  const nonce = await alchemy.getTransactionCount(DEV1.address, "latest");
  console.log("clearing nonce ", nonce);

  const tx = {
    from: DEV1.address,
    to: DEV2,
    value: ethers.utils.parseUnits("0.000001", "ether"),
    gasPrice: gasPrice,
    gasLimit: ethers.utils.hexlify(10000 * 1000), // 10000 gwei
    nonce,
  };

  const transaction = await DEV1.sendTransaction(tx);
  console.log("transaction : ", transaction);
}

main();

