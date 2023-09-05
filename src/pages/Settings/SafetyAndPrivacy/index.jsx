import React, { useState } from "react";

import Logo from "../../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import ChangePasswordAlertModal from "../../../components/modals/setting/safety-and-privacy/ChangePasswordAlertModal";

function SafetyAndPrivacy() {
  const [isChecked, setIsChecked] = useState(false);
  const [isUnlockWithBiometricsChecked, setIsUnlockWithBiometricsChecked] =
    useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);

  return (
    <div className={`relative h-[600px] text-center`}>
      <ChangePasswordAlertModal
        isOpen={isResetPasswordModalOpen}
        setIsOpen={setIsResetPasswordModalOpen}
      />
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/setting" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Safety & Privacy</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Setting Options */}
      <div className="py-6 text-base">
        <Link
          to="/setting/safty-and-privacy/recovery-phrase"
          className="text-white"
        >
          <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3">
            <p className="">Recovery Phrase</p>
            <AiOutlineRight className="" />
          </div>
        </Link>

        <div
          onClick={() => setIsResetPasswordModalOpen(true)}
          className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer"
        >
          <p className="">Change user password</p>
          <AiOutlineRight className="" />
        </div>

        <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer">
          <p className="">Automatic app lock</p>
          <label className="relative inline-block w-[2.125rem] h-[1.1rem] rounded-full cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div
              className={`w-full h-full absolute rounded-full ${
                isChecked ? "bg-btn" : "bg-btn_gray"
              }`}
            ></div>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out top-px left-px ${
                isChecked ? "transform translate-x-[1rem]" : ""
              }`}
            ></div>
          </label>
        </div>
        <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer">
          <p className="">Unlock with Biometrics</p>
          {/* <AiOutlineRight className="" /> */}
          <label className="relative inline-block w-[2.125rem] h-[1.1rem] rounded-full cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isUnlockWithBiometricsChecked}
              onChange={() =>
                setIsUnlockWithBiometricsChecked(!isUnlockWithBiometricsChecked)
              }
            />
            <div
              className={`w-full h-full absolute rounded-full ${
                isUnlockWithBiometricsChecked ? "bg-btn" : "bg-btn_gray"
              }`}
            ></div>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out top-px left-px ${
                isUnlockWithBiometricsChecked
                  ? "transform translate-x-[1rem]"
                  : ""
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SafetyAndPrivacy;
