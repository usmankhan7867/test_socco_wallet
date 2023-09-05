import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import Logo from "../../assets/logo-sm.svg";
import MenuBarIcon from "../../assets/icons/menu-bars.svg";
import { ImCross } from "react-icons/im";
import { TbNotes } from "react-icons/tb";
import { FiDownload, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import { getAddress, getTokenBalance } from "../../web3/useWallet";
import CopyAddressModal from "../../components/modals/create-new-wallet/CopyAddressModal";

function Home() {
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    function handleUseWallet() {
      getAddress().then((address) => setAddress(address));
      getTokenBalance().then((balance) => setBalance(balance));
    }
    handleUseWallet();
  }, []);
  return (
    <div className={`relative h-[600px] text-center`}>
      {isSideBarOpen && <SideBar />}
      <CopyAddressModal
        isOpen={isCopyModalOpen}
        setIsOpen={setIsCopyModalOpen}
      />
      <div
        id="cross"
        className=" sticky top-0 w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3"
      >
        {isSideBarOpen ? (
          <ImCross
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className="text-lg cursor-pointer w-[23px]"
          />
        ) : (
          <img
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            src={MenuBarIcon}
            alt="menu"
            className="h-4 cursor-pointer"
          />
        )}

        <p className="text-lg font-semibold">Home</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="mt-6 mx-10">
        <h3 className="text-center text-2xl">Wallet 1</h3>
        <p
          onClick={() => {
            navigator.clipboard.writeText(address);
            setIsCopyModalOpen(true);
          }}
          className="text-center text-base flex items-center justify-center cursor-pointer"
        >
          <TbNotes className="mr-1" />
          {address.slice(0, 7).concat("...").concat(address.slice(-5))}
        </p>
        <div className="w-full bg-white text-base text-center text-back font-bold rounded-full py-3 mb-3 mt-10">
          {balance === null ? "Loading..." : balance + " Socco"}
        </div>
        <div className="w-full bg-white text-base text-center text-back font-bold rounded-full py-3 mb-3 mt-4">
          ..... $
        </div>
        <div className="flex justify-center items-center gap-10 mt-10">
          <Link to="/home/send" className="text-white">
            <div className="flex flex-col text-sm font-medium cursor-pointer hover:scale-105">
              <div className="bg-banner text-white text-lg h-12 w-12 flex justify-center items-center rounded-full">
                <FiSend className="" />
              </div>
              Send
            </div>
          </Link>
          <Link to="/home/receive" className="text-white">
            <div className="flex flex-col text-sm font-medium cursor-pointer hover:scale-105">
              <div className="bg-banner text-white text-lg h-12 w-12  flex justify-center items-center rounded-full">
                <FiDownload className="" />
              </div>
              Receive
            </div>
          </Link>
        </div>
      </div>

      <BottomMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default Home;
