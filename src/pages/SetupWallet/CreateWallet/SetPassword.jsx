import React, { useState } from "react";
import Logo from "../../../assets/logo-sm.svg";
import LogoLong from "../../../assets/logo.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import PasswordSetFailed from "../../../components/modals/create-new-wallet/set-password/PasswordSetFailed";
import PasswordSetSuccessfullyModal from "../../../components/modals/create-new-wallet/set-password/PasswordSetSuccessfullyModal";
import { passwordValidator } from "../../../utils/passwordValidator";

function SetPassword() {
  const [password, setPassword] = useState({ main: "", confirm: "" });
  // const [isValid, setIsValid] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordSetFailed, setIsPasswordSetFailed] = useState(false);
  const [isPasswordSetSuccess, setIsPasswordSetSuccess] = useState(false);
  return (
    <div className={`relative h-[600px] text-center text-base`}>
      <PasswordSetFailed
        isOpen={isPasswordSetFailed}
        setIsOpen={setIsPasswordSetFailed}
      />
      <PasswordSetSuccessfullyModal
        isOpen={isPasswordSetSuccess}
        setIsOpen={setIsPasswordSetSuccess}
      />
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/setup-wallet" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Set Password</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Setting Options */}
      <img src={LogoLong} alt="logo" className="mx-auto h-24" />
      <h6 className="text-center text-2xl font-semibold leading-7 mx-12 mb-6">
        Set your <br /> password
      </h6>
      <p className="text-center text-sm font-medium  mx-12 mb-6">
        Please set a password with the following rules:
      </p>
      <p className="text-center text-sm font-medium mx-12 mt-2">
        Min. 8 signs <br /> Min. 1 capital letter <br /> Min. 1 special
        character
      </p>
      <div className="mx-7 mt-6">
        <input
          placeholder="Password"
          type="text"
          onChange={(e) => setPassword({ ...password, main: e.target.value })}
          className="w-full text-base font-semibold text-back mb-3 rounded-full outline-none px-4 py-2"
        />
        <input
          placeholder="Repeat password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, confirm: e.target.value })
          }
          className="w-full text-base font-semibold text-back mb-3 rounded-full outline-none px-4 py-2"
        />
      </div>

      <div className="absolute w-[calc(100%-2.5rem)] bottom-4 left-6">
        <button
          // disabled={!areAllFieldsFilled}
          onClick={() => {
            if (passwordValidator(password.main, password.confirm)) {
              // eslint-disable-next-line no-undef
              chrome.storage.local.set({ password: password.main }).then(() => {
                console.log("Password is set successfully!");
              });
              setIsPasswordSetSuccess(true);
            } else setIsPasswordSetFailed(true);
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SetPassword;
