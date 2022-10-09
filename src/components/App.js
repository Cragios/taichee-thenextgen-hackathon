import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
// import { Provider } from "react-redux";
// import store from "./store";
import Web3App from "./Web3App";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Provider store={store}> */}
      <Web3App />
      {/* </Provider> */}
    </Web3ReactProvider>
  );
}

export default App;

// creds
// https://medium.com/coinmonks/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39
// https://www.web3.university/tracks/create-a-smart-contract
// https://www.loginradius.com/blog/engineering/guest-post/modern-login-signup-form-tailwindcss-react/
