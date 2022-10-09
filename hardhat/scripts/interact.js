// interact.js

const API_KEY = process.env.API_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MARKET_CONTRACT_ADDRESS = process.env.MARKET_CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/Market.sol/Market.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider((network = "goerli"), API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const marketContract = new ethers.Contract(MARKET_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const tx = await marketContract.createListing("Apple", PUBLIC_KEY, 10, 2);
  await tx.wait();
  const allListingData = await marketContract.getAllListingData();
  console.log(allListingData);

  // console.log("Updating the message...");
  // const tx = await helloWorldContract.update("This is the new message.");
  // await tx.wait();

  // const newMessage = await helloWorldContract.message();
  // console.log("The new message is: " + newMessage);
}

main();
