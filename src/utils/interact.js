const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

//Market
const marketContractABI = require("../abi/Market.json");
const marketContractAddress = "0xd5b7EFd40aAB930c5170B65B1D17a839D43d13dF";
const marketContract = new web3.eth.Contract(marketContractABI, marketContractAddress);

export const market = {
  getAllListingData: async () => {
    const allListingData = await marketContract.methods.getAllListingData().call();
    return allListingData;
  },
  // TODO: add listener for other events (Participated, Withdrawn, etc...)
  // currently only listens for Created
  addSmartContractListener: () => {
    marketContract.events.Created({}, (error, data) => {
      if (error) {
        alert("😥 " + error.message);
      } else {
        console.log(data);
        alert("Listing successfully deployed!");
      }
    });
  },
  createListing: async (identifier, account, target, price) => {
    if (!window.ethereum || account === null) {
      alert("💡 Connect your Metamask wallet to update the message on the blockchain.");
      return;
    }
    //sign the transaction
    marketContract.methods.createListing(identifier, account, target, price).send({ from: account });
  },
  participateInListing: async (key, account, value) => {
    if (!window.ethereum || account === null) {
      alert("💡 Connect your Metamask wallet to update the message on the blockchain.");
      return;
    }
    //sign the transaction
    marketContract.methods.participateInListing(key).send({ from: account, value: value });
  },
  withdrawFromListing: async (key, account) => {
    if (!window.ethereum || account === null) {
      alert("💡 Connect your Metamask wallet to update the message on the blockchain.");
      return;
    }
    //sign the transaction
    marketContract.methods.withdrawFromListing(key).send({ from: account });
  },
};
