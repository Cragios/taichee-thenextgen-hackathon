import { Fragment, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import MetaMaskButton from "./MetaMaskButton";

function MetaMaskCard() {
  const { active, chainId, account } = useWeb3React();
  const [balance, setBalance] = useState("Pending...");

  return (
    <div className=" border rounded-md p-8 mx-24 my-8 ">
      <h2>MetaMask</h2>
      {active ? (
        <Fragment>
          <p>
            <span style={{ fontWeight: "bold" }}>Account:</span> {account}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Network ID:</span> {chainId}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Balance (GoerliETH):</span> {balance}
          </p>
        </Fragment>
      ) : null}
      <MetaMaskButton />
    </div>
  );
}

export default MetaMaskCard;
