import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import Logo from "../../../assets/logo.svg";
import { useEffect, useState } from "react";
import ConfirmedModal from "../../../components/modals/create-new-wallet/verify-seed-phrase/ConfirmedModal";
import FailedModal from "../../../components/modals/create-new-wallet/verify-seed-phrase/FailedModal";
import { isSeedPhraseVerifySuccessfully } from "../../../helper/setupWallet";

function VerifySeedPhrase() {
  const navigate = useNavigate();
  // const seedPhrase =
  //   "harsh cycle flag floor hamster ball ridge visit portion uncle can radio";
  const [seedPhrase, setSeedPhrase] = useState("");
  const [fieldValues, setFieldValues] = useState(Array(4).fill(""));
  const [randomPhraseIndexes, setRandomPhraseIndexes] = useState([]);
  // modal states
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Handle changes in input fields
  const handleInputChange = (index, value) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  // Check if all fields are filled
  const areAllFieldsFilled = fieldValues.every((value) => value.trim() !== "");

  const handleFourRandomNumbers = () => {
    let indexes = [];
    const min = 0;
    const max = 12; // The range is 0 to 11 (inclusive of 1 but exclusive of 12)
    while (indexes.length < 4) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      if (!indexes.includes(randomNumber)) {
        indexes.push(randomNumber);
      }
    }
    return indexes;
  };

  // console.log(handleFourRandomNumbers());
  useEffect(() => {
    const indexes = handleFourRandomNumbers();
    setRandomPhraseIndexes(indexes.sort((a, b) => a - b));
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(["phrase"]).then((result) => {
      setSeedPhrase(result.phrase);
    });
  }, []);
  return (
    <div className="relative h-[600px] text-center p-5">
      <ConfirmedModal
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
      />
      <FailedModal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} />
      <MdOutlineArrowBack
        onClick={() => navigate("/setup-wallet/seed-phrase")}
        className=" text-lg cursor-pointer hover:scale-125 transition-all ease-in-out "
      />
      <img src={Logo} alt="logo" className="mx-auto -mt-10 h-16" />
      <h3 className="text-center text-2xl my-2">Confirm Phrase</h3>
      <p className="text-sm font-medium mb-3">
        Confirm Your Seed Phrase by <br /> adding 4 random seed phrases into the
        <br />
        respective fields below.
      </p>
      <div className=" bg-[#336969] p-4 rounded-xl border border-dashed border-white/40">
        <div className="grid grid-cols-2 gap-4 border-dotted border-btn_gray">
          {randomPhraseIndexes.map((value, index) => {
            return (
              <div key={"field#" + index + 1} className="flex items-center ">
                <p className="mr-2 font-semibold">{value + 1}.</p>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className=" text-sm font-medium text-back bg-white rounded-full py-2 px-2 w-full outline-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4">
        {seedPhrase.split(" ").map((value, index) => (
          <div
            key={"phrase" + index}
            className={`text-sm font-semibold text-back rounded-full py-2 ${
              randomPhraseIndexes.includes(index)
                ? "bg-white"
                : "bg-light_green"
            }`}
          >
            {randomPhraseIndexes.includes(index)
              ? ""
              : index + 1 + ". " + value}
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="absolute w-[calc(100%-2.5rem)] bottom-4">
        <button
          disabled={!areAllFieldsFilled}
          onClick={() => {
            console.log(
              "Is Verified: ",
              isSeedPhraseVerifySuccessfully(
                seedPhrase,
                randomPhraseIndexes,
                fieldValues
              )
            );
            if (
              !isSeedPhraseVerifySuccessfully(
                seedPhrase,
                randomPhraseIndexes,
                fieldValues
              )
            )
              setIsErrorModalOpen(true);
            else setIsSuccessModalOpen(true);
          }}
          className="w-full bg-btn text-sm text-center font-semibold rounded-full py-3 mb-3 disabled:bg-disable disabled:text-gray-400"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifySeedPhrase;
