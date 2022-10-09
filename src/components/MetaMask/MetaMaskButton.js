import { useWeb3React } from "@web3-react/core";
import { injected } from "../../utils/connectors";

function MetaMaskButton() {
  const { active, account, activate, deactivate } = useWeb3React();

  // connect to metamask
  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (e) {
      console.log(e);
    }
  }

  // disconnect to metamask
  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {active ? (
        <button onClick={disconnect} className="px-4 py-2 bg-sky-100 rounded-md m-4">
          Disconnect from MetaMask
        </button>
      ) : (
        <button onClick={connect} className="px-4 py-2 bg-sky-100 rounded-md m-4">
          Connect to MetaMask
        </button>
      )}
    </div>
  );
}

export default MetaMaskButton;
