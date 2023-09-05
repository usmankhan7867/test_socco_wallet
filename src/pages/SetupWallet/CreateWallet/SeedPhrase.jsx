import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import Logo from "../../../assets/logo.svg";
import StartAlertModal from "../../../components/modals/create-new-wallet/StartAlertModal";
import CopyAddressModal from "../../../components/modals/create-new-wallet/CopyAddressModal";
import PrivacyPolicyModal from "../../../components/modals/create-new-wallet/PrivacyPolicyModal";
import TermsAndConditionsModal from "../../../components/modals/create-new-wallet/TermsAndConditionsModal";
import { textDownloader } from "../../../utils/textFileDownloader";

function SeedPhrase() {
  const navigate = useNavigate();
  // "harsh cycle flag floor hamster ball ridge visit portion uncle can radio"
  const [seedPhrase, setSeedPhrase] = useState("");
  const [isAllChecked, setIsAllChecked] = useState({
    terms: false,
    privacy: false,
  });
  // Modal States =============================================================>
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isStartAlertModalOpen, setIsStartAlertModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] =
    useState(false);
  const [isTermsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen] =
    useState(false);
  // Modal States =============================================================<

  useEffect(() => {
    setIsStartAlertModalOpen(true);
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(["phrase"]).then((result) => {
      setSeedPhrase(result.phrase);
    });
  }, []);

  return (
    <div className="relative h-[600px] text-center p-5">
      <StartAlertModal
        isOpen={isStartAlertModalOpen}
        setIsOpen={setIsStartAlertModalOpen}
      />
      <CopyAddressModal
        isOpen={isCopyModalOpen}
        setIsOpen={setIsCopyModalOpen}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyModalOpen}
        setIsOpen={setIsPrivacyPolicyModalOpen}
      />
      <TermsAndConditionsModal
        isOpen={isTermsAndConditionsModalOpen}
        setIsOpen={setIsTermsAndConditionsModalOpen}
      />
      <MdOutlineArrowBack
        onClick={() => navigate("/setup-wallet")}
        className=" text-lg cursor-pointer hover:scale-125 transition-all ease-in-out "
      />
      <img src={Logo} alt="logo" className="mx-auto -mt-10 h-16" />
      <h3 className="text-center text-2xl my-3">Your Seed Phrase</h3>
      <p className="text-sm font-medium mb-3">
        Secure these 12 words and keep them <br /> at a safe place.
        <Link className=""> More information.</Link>
      </p>
      <div className="grid grid-cols-3 gap-4 my-4">
        {seedPhrase?.split(" ").map((value, index) => (
          <div
            key={value}
            className="text-sm font-semibold text-back bg-light_green rounded-full py-2"
          >
            {index + 1 + ". " + value}
          </div>
        ))}
      </div>
      <span
        onClick={() => setIsCopyModalOpen(true)}
        className=" flex justify-center items-center my-5 cursor-pointer"
      >
        <TbNotes className="text-btn text-xl" />
        <p
          onClick={() => {
            navigator.clipboard.writeText(seedPhrase);
            textDownloader(seedPhrase);
          }}
          className="text-sm ml-1"
        >
          Copy the Seed Phrase
        </p>
      </span>
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={() =>
            setIsAllChecked({ ...isAllChecked, terms: !isAllChecked.terms })
          }
          className=" bg-light_green mr-1 outline-none bg-transparent border-light_green"
          checked={isAllChecked.terms}
        />
        <p className="text-sm font-medium">
          I agree to{" "}
          <Link onClick={() => setIsTermsAndConditionsModalOpen(true)}>
            Terms & Conditions
          </Link>
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={() =>
            setIsAllChecked({ ...isAllChecked, privacy: !isAllChecked.privacy })
          }
          className="mr-1 text-light_green"
          checked={isAllChecked.privacy}
        />
        <p className="text-sm font-medium">
          I agree to{" "}
          <Link onClick={() => setIsPrivacyPolicyModalOpen(true)}>
            Privacy Policy
          </Link>
        </p>
      </div>
      {/* Button */}
      <div className="absolute w-[calc(100%-2.5rem)] bottom-5">
        <button
          disabled={!isAllChecked.terms || !isAllChecked.privacy}
          onClick={() => {
            navigate("/setup-wallet/verify-seed-phrase");
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SeedPhrase;
