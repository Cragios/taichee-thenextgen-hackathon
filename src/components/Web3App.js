import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../utils/connectors";
import Pages from "./Pages/Pages";

function Web3App() {
  const { activate } = useWeb3React();

  // persist metamask connection
  useEffect(() => {
    const persistWalletConnection = async () => {
      if (localStorage.getItem("isWalletConnected") === "true") await activate(injected);
    };
    persistWalletConnection();
  }, []);

  // useEffect(() => {
  //   const logCurrentMessage = async () => {
  //     const message = await helloWorld.loadCurrentMessage();
  //     console.log(message);
  //   };
  //   logCurrentMessage();
  // }, []);

  return <Pages />;
}

export default Web3App;
