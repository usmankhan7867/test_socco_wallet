import React, { useState } from "react";

import Logo from "../../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NotEnoughAmountModal from "../../../components/modals/home/send/NotEnoughAmountModal";

function Send() {
  const [amount, setAmount] = useState(null);
  const [recipiant, setRecipiant] = useState(null);
  const [isNotEnoughAmount, setIsNotEnoughAmount] = useState(false);
  return (
    <div className={`relative h-[600px] text-center`}>
      <NotEnoughAmountModal
        isOpen={isNotEnoughAmount}
        setIsOpen={setIsNotEnoughAmount}
      />
      <div
        id="cross"
        className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3"
      >
        <Link to="/home" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Send</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="mt-6 mx-6">
        <input
          placeholder="Wallet Address"
          type="text"
          onChange={(e) => setRecipiant(e.target.value)}
          className="w-full text-sm font-semibold text-back rounded-full outline-none px-4 py-3 mb-5"
        />
        <div className="w-full flex justify-between items-center text-base font-semibold bg-white text-back mb-3 rounded-full">
          <input
            placeholder="Amount Soco"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className="w-full text-sm font-semibold outline-none px-4 py-3 rounded-l-full"
          />
          <span className=" text-btn text-xs px-3 cursor-pointer">Max</span>
        </div>
        <p className="text-center text-sm font-medium mt-4">
          Total Offer Amount: .... SoCo (.... USD)
        </p>
        <p className="text-center text-sm font-medium mb-5">
          Max. Amount: .... SoCo (.... USD)
        </p>
        {/* Transaction================================================s */}
        <hr />
        <div className="flex justify-between items-center  mt-2">
          <h2 className="text-sm">Recent</h2>
          <p className="text-xs font-semibold text-light_green cursor-pointer">
            Clear
          </p>
        </div>
        {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
          <div className="flex text-base items-center border-b border-white/30 hover:bg-white/20 cursor-pointer py-2">
            <div className="h-10 w-10 bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-700 rounded-full mr-2" />
            {"0x919F1aF9BC7bB98D7052CB8B080578d8f4a1210d"
              .slice(0, 25)
              .concat("...")
              .concat("0x919F1aF9BC7bB98D7052CB8B080578d8f4a1210d".slice(-5))}
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="fixed w-full bottom-0 px-5 bg-gradient-to-t from-back via-back/80 to-white/0">
        {amount && recipiant ? (
          <Link
            to={`/home/send/summary?amount=${amount}&recipiant=${recipiant}`}
          >
            <button className="w-full bg-btn text-white text-sm text-center font-semibold rounded-full disabled:bg-disable disabled:text-gray-400 py-3 mb-6 mt-3 ">
              Continue
            </button>
          </Link>
        ) : (
          <button className="w-full text-sm text-center font-semibold rounded-full bg-disable text-gray-400 border border-gray-400 py-3 mb-6 mt-3">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Send;
