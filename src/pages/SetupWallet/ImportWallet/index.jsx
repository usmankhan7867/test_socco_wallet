import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import Logo from "../../../assets/logo.svg";
import CopyAddressModal from "../../../components/modals/create-new-wallet/CopyAddressModal";
import PrivacyPolicyModal from "../../../components/modals/create-new-wallet/PrivacyPolicyModal";
import TermsAndConditionsModal from "../../../components/modals/create-new-wallet/TermsAndConditionsModal";
import ImportWalletSuccessModal from "../../../components/modals/create-new-wallet/import-wallet/ImportWalletSuccessModal";
import { importWallet } from "../../../helper/setupWallet";

function ImportSeedPhrase() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [seedPhrase, setSeedPhrase] = useState(new Array(12).fill(""));
  const inputRefs = useRef(Array(12).fill(null));
  const [isAllChecked, setIsAllChecked] = useState({
    terms: false,
    privacy: false,
  });
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  // Modal States =============================================================>
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isImportSuccessModalOpen, setIsImportSuccessModalOpen] =
    useState(false);
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] =
    useState(false);
  const [isTermsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen] =
    useState(false);

  // Handle changes in input fields
  const handleInputChange = (index, value) => {
    const newFieldValues = [...seedPhrase];
    newFieldValues[index] = value;
    setSeedPhrase(newFieldValues);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === " " && index < seedPhrase.length - 1) {
      // If space is pressed and there is a next input field, focus on it
      e.preventDefault(); // Prevent the default behavior
      inputRefs.current[index + 1].focus();
    } else if (e.key === "Backspace" && index > 0 && seedPhrase[index] === "") {
      // If Backspace is pressed, the current field is empty, and there is a previous field,
      // focus on the last character of the previous field
      const prevFieldValue = seedPhrase[index - 1];
      inputRefs.current[index - 1].focus();

      // Move the cursor to the end of the previous field
      if (inputRefs.current[index - 1] && prevFieldValue) {
        const prevFieldLength = prevFieldValue.length;
        inputRefs.current[index - 1].setSelectionRange(
          prevFieldLength,
          prevFieldLength
        );
      }
    }
  };

  console.log("Seeding Seed:", seedPhrase);

  const handleImportWallet = async () => {
    if (seedPhrase.some((word) => word.trim() === "")) {
      // Display an error message or take appropriate action
      console.log("Please fill in all 12 fields.");
      setIsError(true);
      setAlertMessage("Please fill in all 12 fields.");
      setIsImportSuccessModalOpen(true);
    } else {
      // All fields are filled, proceed with importing the wallet
      const isSuccess = await importWallet(seedPhrase.join(" "));
      if (isSuccess) {
        setIsError(false);
        setIsImportSuccessModalOpen(true);
      } else {
        setIsError(true);
        setAlertMessage("Make sure your phrase is Correct!");
        setIsImportSuccessModalOpen(true);
      }
    }
  };

  useEffect(() => {
    console.log("use call back called!");
    if (seedPhrase[0].includes(" ")) {
      const words = seedPhrase[0].split(" ");
      if (words.length >= 12) {
        setSeedPhrase(words.slice(0, 12));
      } else {
        // If there are less than 12 words, pad with empty strings
        setSeedPhrase([...words, ...Array(12 - words.length).fill("")]);
        // Automatically focus on the first empty field
        if (inputRefs.current[words.length]) {
          inputRefs.current[words.length].focus();
        }
      }
    }
  }, [seedPhrase]);

  return (
    <div className="relative h-[600px] text-center p-5">
      {/* Modal ================================================================>>> */}
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
      <ImportWalletSuccessModal
        alertMessage={alertMessage}
        isError={isError}
        isOpen={isImportSuccessModalOpen}
        setIsOpen={setIsImportSuccessModalOpen}
      />
      {/* Modal <<<================================================================ */}
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
        {seedPhrase.map((value, index) => (
          <div
            key={"phrase" + index + 1}
            className="w-full flex items-center text-sm font-semibold text-back bg-light_green rounded-full px-3 py-2"
          >
            {index + 1 + "."}
            <input
              type="text"
              value={seedPhrase[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-16 bg-transparent outline-none ml-0.5"
            />
          </div>
        ))}
      </div>
      {/* Term & Conditions ============================================================= */}
      <div className="flex items-center ml-1 mt-5">
        <input
          type="checkbox"
          onChange={() =>
            setIsAllChecked({ ...isAllChecked, terms: !isAllChecked.terms })
          }
          className=" bg-light_green mr-2 outline-none bg-transparent border-light_green"
          checked={isAllChecked.terms}
        />
        <p className="text-sm font-medium">
          I agree to{" "}
          <Link onClick={() => setIsTermsAndConditionsModalOpen(true)}>
            Terms & Conditions
          </Link>
        </p>
      </div>
      <div className="flex items-center ml-1 mt-1">
        <input
          type="checkbox"
          onChange={() =>
            setIsAllChecked({ ...isAllChecked, privacy: !isAllChecked.privacy })
          }
          className="mr-2 text-light_green"
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
            handleImportWallet();
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImportSeedPhrase;
