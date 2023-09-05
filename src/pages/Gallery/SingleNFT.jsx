import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import BottomMenu from "../../components/BottomMenu";
import Logo from "../../assets/logo-sm.svg";
import MenuBarIcon from "../../assets/icons/menu-bars.svg";
import { ImCross } from "react-icons/im";
import NFTImage from "../../assets/images/Rectangle186.png";
import VideoModal from "../../components/modals/gallery/VideoModal";
import NFTInfoModal from "../../components/modals/gallery/NFTInfoModal";
import { useNavigate } from "react-router-dom";

function SingleNFT() {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isNFTInfoModalOpen, setIsNFTInfoModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(2);
  return (
    <div className={`relative h-[600px] text-center`}>
      <VideoModal isOpen={isVideoModalOpen} setIsOpen={setIsVideoModalOpen} />
      <NFTInfoModal
        isOpen={isNFTInfoModalOpen}
        setIsOpen={setIsNFTInfoModalOpen}
      />
      {isSideBarOpen && <SideBar />}
      <div
        id="cross"
        className="w-full sticky top-0 flex items-center justify-between bg-banner shadow-lg px-6 py-3"
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
        <p className="text-lg font-semibold">SingleNFT</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="pb-32 mt-3 mx-6">
        <h3 className="text-center text-xl mb-3">My NFTs</h3>
        <img
          src={NFTImage}
          alt="NFT"
          className="w-full cursor-pointer hover:scale-[1.01] transition-all ease-in-out"
          onClick={() => setIsVideoModalOpen(true)}
        />
        <p className="text-base font-bold ml-1 mt-4">
          Toni Polster
          <br /> Golden Shoe 1987
        </p>
        <p
          onClick={() => setIsNFTInfoModalOpen(true)}
          className="text-xs font-semibold text-light_green cursor-pointer mt-3"
        >
          More information
        </p>
      </div>
      <div className="fixed w-full bottom-0 px-5 bg-gradient-to-t from-back via-back/80 to-white/0">
        <button
          onClick={() => navigate("/gallery/nft/send")}
          className="w-full bg-btn text-white text-sm text-center font-semibold rounded-full disabled:bg-disable disabled:text-gray-400 py-3 mb-16 mt-3"
        >
          Send
        </button>
      </div>
      <BottomMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default SingleNFT;
