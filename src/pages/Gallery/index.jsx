import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import BottomMenu from "../../components/BottomMenu";
import Logo from "../../assets/logo-sm.svg";
import MenuBarIcon from "../../assets/icons/menu-bars.svg";
import { ImCross } from "react-icons/im";
import NFTImage from "../../assets/images/Rectangle185.png";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(2);

  return (
    <div className={`relative h-[600px] text-center`}>
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
        <p className="text-lg font-semibold">Gallery</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="pb-16 mt-3 mx-6">
        <h3 className="text-center text-xl mb-3">My NFTs</h3>
        <div className="grid grid-cols-2 gap-6">
          {[12, 2, 3, 3, 3, 4].map((value, index) => (
            <div
              key={"my-nft-" + index}
              onClick={() => navigate("/gallery/nft")}
              className="cursor-pointer"
            >
              <img src={NFTImage} alt="NFT" className="" />
              <p className="text-sm text-start font-semibold mt-2 ml-1">
                Toni Polster
                <br /> Golden Shoe 1987
              </p>
            </div>
          ))}
        </div>
      </div>

      <BottomMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default Gallery;
