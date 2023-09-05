import React, { useEffect, useState } from "react";

import Logo from "../../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import NotEnoughAmountModal from "../../../components/modals/home/send/NotEnoughAmountModal";
import EnterYourPasswordModal from "../../../components/modals/EnterYourPasswordModal";
import SuccessfullyDoneModal from "../../../components/modals/home/send/SuccessfullyDoneModal";
import { getAddress, transferToken } from "../../../web3/useWallet";
import TxLoadingModal from "../../../components/modals/home/send/TxLoadingModal";

function Summary() {
  // const amount = 12;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const amount = params.get("amount");
  const recipiant = params.get("recipiant");
  console.log("params: a:", amount, "r:", recipiant);
  const [address, setAddress] = useState("");
  const [isNotEnoughAmount, setIsNotEnoughAmount] = useState(false);
  const [isTxLoaing, setIsTxLoaing] = useState(false);
  const [isSuccessfullyDoneModal, setIsSuccessfullyDoneModal] = useState(false);
  const [isYourPasswordModal, setIsYourPasswordModal] = useState(false);
  const successfullyDone = () => {
    setIsSuccessfullyDoneModal(true);
  };

  const handleTransferToken = async () => {
    setIsTxLoaing(true);
    const success = await transferToken(recipiant, amount);
    setIsTxLoaing(false);
    console.log("Is Tx Success:", success);
    if (success) {
      setIsSuccessfullyDoneModal(true);
    } else {
      console.log("Error ka Modal Banana Hai:");
    }
  };

  useEffect(() => {
    getAddress().then((address) => setAddress(address));
  }, []);

  return (
    <div className={`relative h-[600px] text-center`}>
      <NotEnoughAmountModal
        isOpen={isNotEnoughAmount}
        setIsOpen={setIsNotEnoughAmount}
      />
      <SuccessfullyDoneModal
        isOpen={isSuccessfullyDoneModal}
        setIsOpen={setIsSuccessfullyDoneModal}
      />
      <EnterYourPasswordModal
        isOpen={isYourPasswordModal}
        setIsOpen={setIsYourPasswordModal}
        callbackFunc={successfullyDone}
        route={null}
      />
      <TxLoadingModal isOpen={isTxLoaing} setIsOpen={setIsTxLoaing} />

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
      <div className="mt-6 mx-6">
        <h5 className="text-3xl">{amount} SoCo</h5>
        <p className="text-center text-sm font-medium mt-1 mb-3">
          $2,107.11 USD
        </p>
        <hr className=" border-white/30" />
        {/* ---------------------------------------------------------------- */}
        <div className="text-start">
          <p className="font-semibold text-base mt-4">From</p>
          <p className="text-sm">{address}</p>
          <p className="font-semibold text-base mt-4">To</p>
          <p className="text-sm">{recipiant}</p>
          <hr className=" border-white/30 mt-4" />
          <p className="font-semibold text-base mt-4">Network Fee</p>
          <p className="text-sm">0.00 BNB (Free)</p>
          <hr className=" border-white/30 mt-4" />
        </div>
        <p className="font-semibold text-base text-start mt-3 mb-2">Comment</p>
        <textarea
          name="comment..."
          placeholder="Type your comment..."
          id=""
          cols="34"
          rows="4"
          className="text-base rounded-md text-gray-600 outline-none p-1"
        ></textarea>
      </div>
      {/* Button */}
      <div className="fixed w-full bottom-0 px-5 bg-gradient-to-t from-back via-back/80 to-white/0">
        <button
          // disabled={!areAllFieldsFilled}
          onClick={() => {
            // if (parseInt(amount) > 100) setIsNotEnoughAmount(true);
            // else setIsYourPasswordModal(true);
            handleTransferToken();
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full disabled:bg-disable disabled:text-gray-400 py-3 mb-6 mt-3"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Summary;
