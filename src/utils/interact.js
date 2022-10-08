const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

// helloworld
const helloWorldContractABI = require("../abi/HelloWorld.json");
const helloWorldContractAddress = "0x9fC92EE5d1e1135369feC687B92dF00F10FF025e";
const helloWorldContract = new web3.eth.Contract(helloWorldContractABI, helloWorldContractAddress);

export const helloWorld = {
  loadCurrentMessage: async () => {
    const message = await helloWorldContract.methods.message().call();
    return message;
  },
};
