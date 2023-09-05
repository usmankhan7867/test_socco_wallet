import Logo from "../../assets/logo-sm.svg";
import QR from "../../assets/icons/QR.svg";
import { BiArrowBack } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAddress } from "../../web3/useWallet";

function Receive() {
  const [address, setAddress] = useState("");
  useEffect(() => {
    function handleUseWallet() {
      getAddress().then((address) => setAddress(address));
    }
    handleUseWallet();
  }, []);
  return (
    <div className={`relative h-[600px] text-center`}>
      <div
        id="cross"
        className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3"
      >
        <Link to="/home" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Receive</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="mt-6 mx-10">
        <h3 className="text-center text-2xl">Wallet 1</h3>
        <img src={QR} alt="QR" className="my-10" />
        <p className="text-center text-base flex items-center justify-center cursor-pointer">
          <TbNotes className="mr-1 text-xl text-btn" />
          {/* {"0x919F1aF9BC7bB98D7052CB8B080578d8f4a1210d"
            .slice(0, 7)
            .concat("...")
            .concat("0x919F1aF9BC7bB98D7052CB8B080578d8f4a1210d".slice(-5))} */}
          {address.slice(0, 7).concat("...").concat(address.slice(-5))}
        </p>
      </div>
    </div>
  );
}

export default Receive;
