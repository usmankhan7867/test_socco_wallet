import React, { useState } from "react";

import Logo from "../../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NetworkMoreInfoModal from "../../../components/modals/setting/safety-and-privacy/NetworkMoreInfoModal";
// import { AiOutlineRight } from "react-icons/ai";

function Network() {
  const [isNetworkMoreInfoModalOpen, setIsNetworkMoreInfoModalOpen] =
    useState(false);
  return (
    <div className={`relative h-[600px] text-center text-base`}>
      <NetworkMoreInfoModal
        isOpen={isNetworkMoreInfoModalOpen}
        setIsOpen={setIsNetworkMoreInfoModalOpen}
      />
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/setting" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Network</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Setting Options */}
      <p className="text-center text-sm mx-12 mt-6">
        SoccerCoin Wallet is based on the Binance Smart Chain Network.
      </p>
      {/* Button */}
      <div className="absolute w-[calc(100%-2.5rem)] bottom-4 left-6">
        <button
          // disabled={!areAllFieldsFilled}
          onClick={() => setIsNetworkMoreInfoModalOpen(true)}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          More Information
        </button>
      </div>
    </div>
  );
}

export default Network;
