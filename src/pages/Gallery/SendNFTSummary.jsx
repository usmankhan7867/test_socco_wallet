import React, { useState } from "react";

import Logo from "../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NFTImage from "../../assets/images/Rectangle185.png";
import SuccessfullySendNFTModal from "../../components/modals/gallery/SuccessfullySendNFTModal";

function SendNFTSummary() {
  const [isSuccessfullyDoneModal, setIsSuccessfullyDoneModal] = useState(false);
  return (
    <div className={`relative h-[600px] text-center`}>
      <SuccessfullySendNFTModal
        isOpen={isSuccessfullyDoneModal}
        setIsOpen={setIsSuccessfullyDoneModal}
      />

      <div
        id="cross"
        className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3"
      >
        <Link to="/home" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Summary</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="mt-6 mx-6 pb-20">
        <h5 className="text-sm text-light_green">
          Toni Polster - Golden Shoe 1987
        </h5>
        <img src={NFTImage} alt="NFT" className=" mx-auto px-24 pt-4" />
        <p className="font-semibold text-base mb-4 mt-3">Token #3131</p>
        <hr className=" border-white/30" />
        {/* ---------------------------------------------------------------- */}
        <div className="text-start">
          <p className="font-semibold text-base mt-4">From</p>
          <p className="text-sm">AndrewAinsley (0x7131CA84df...gt8848f8E696)</p>
          <p className="font-semibold text-base mt-4">To</p>
          <p className="text-sm">(0x16dcc0ecdjfyh7sjjf8dkahd8gfae2bf7c61037)</p>
          <hr className=" border-white/30 mt-4" />
          <p className="font-semibold text-base mt-4">Network Fee</p>
          <p className="text-sm">0.02 BNB ($26.35 USD)</p>
          <hr className=" border-white/30 mt-4" />
        </div>
        <p className="font-semibold text-base text-start mt-3 mb-2">Note</p>
        <textarea
          name="comment..."
          placeholder="Add a note..."
          id=""
          cols="33"
          rows="3"
          className="text-base rounded-md text-gray-600 outline-none p-2"
        ></textarea>
      </div>
      {/* Button */}
      <div className="fixed w-full bottom-0 px-5 bg-gradient-to-t from-back via-back/80 to-white/0">
        <button
          // disabled={!areAllFieldsFilled}
          onClick={() => {
            setIsSuccessfullyDoneModal(true);
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full disabled:bg-disable disabled:text-gray-400 py-3 mb-6 mt-3"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default SendNFTSummary;
