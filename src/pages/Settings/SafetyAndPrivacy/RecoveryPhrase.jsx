import React, { useState } from "react";
import Logo from "../../../assets/logo-sm.svg";
import LockIcon from "../../../assets/icons/lock.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import RecoveryPhraseAlertModal from "../../../components/modals/setting/safety-and-privacy/RecoveryPhraseAlertModal";
import PasswordModal from "../../../components/modals/PasswordModal";

function RecoveryPhrase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isPhraseRevealed, setIsPhraseRevealed] = useState(false);

  return (
    <div className={`relative h-[600px] text-center`}>
      <RecoveryPhraseAlertModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setIsPhraseRevealed={setIsPasswordModalOpen}
      />
      <PasswordModal
        isOpen={isPasswordModalOpen}
        setIsOpen={setIsPasswordModalOpen}
        setIsPhraseRevealed={setIsPhraseRevealed}
      />
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/setting" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Recovery Phrase</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Content */}
      <p className="text-center text-sm mx-12 mt-12">
        The secret Recovery Phrase gives you fully access to your wallet.
      </p>
      {/* ---- */}
      <div className=" bg-[#336969] p-4 rounded-xl border border-dashed border-white/40 mx-6 mt-6">
        {isPhraseRevealed ? (
          <div className="grid grid-cols-3 gap-4 my-4">
            {[
              "1. Coin",
              "2. NFT",
              "3. Geo",
              "4. Awan",
              "5. Smash",
              "6. Like",
              "7. Subscribe",
              "8. Remix",
              "9. Pro",
              "10. Macbook",
              "11. Iphone",
              "12. Brew",
            ].map((value, i) => (
              <div
                key={"phrase" + i}
                className="text-sm font-semibold text-back bg-light_green rounded-full py-2"
              >
                {value}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-56">
            <img src={LockIcon} alt="lock" />
          </div>
        )}
      </div>
      {/* --------- */}
      <p className="text-center text-sm mx-12 mt-6">
        Click button below to reveal to your secret recovery phrase.
      </p>
      {/* Button */}
      <div className="absolute w-[calc(100%-2.5rem)] bottom-4 left-6">
        <button
          // disabled={!areAllFieldsFilled}
          // onClick={() => setIsPhraseRevealed(!isPhraseRevealed)}
          onClick={() => {
            if (isPhraseRevealed) {
              setIsModalOpen(false);
              setIsPhraseRevealed(false);
            } else setIsModalOpen(true);
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          {isPhraseRevealed ? "Hide Recovery Phrase" : "Reveal Recovery Phrase"}
        </button>
      </div>
    </div>
  );
}

export default RecoveryPhrase;
