/* eslint-disable no-undef */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createNewWallet } from "../../helper/setupWallet";
import Logo from "../../assets/logo.svg";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    async function getStates() {
      const isPhrase = await chrome.storage.local
        .get(["phrase"])
        .then((result) => {
          return result.phrase ? true : false;
        });
      const isPassword = await chrome.storage.local
        .get(["password"])
        .then((result) => {
          return result.password ? true : false;
        });
      if (isPassword & isPhrase) navigate("/home");
      else if (isPhrase) navigate("/setup-wallet/verify-seed-phrase");
    }
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-[600px] text-center p-10">
      <img src={Logo} alt="logo" className="mx-auto" />
      <h3 className="text-center text-2xl mb-10">
        Welcome to
        <br /> Soccercoin
      </h3>

      <p className="text-xs font-medium">
        Easily send and receive your SoccerCoin <br /> tokens and NFTs.
      </p>

      <div className="absolute w-[calc(100%-5rem)] bottom-10">
        <button
          onClick={() => {
            navigate("/setup-wallet/import-seed-phrase");
          }}
          className="w-full bg-btn_gray text-sm text-center font-semibold rounded-full py-3 mb-3"
        >
          Restore Wallet
        </button>
        <br />
        <button
          onClick={() => {
            createNewWallet(navigate);
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 "
        >
          Create New Wallet
        </button>
      </div>
    </div>
  );
}

export default Welcome;
