import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import Logo from "../../assets/logo-sm.svg";
import MenuBarIcon from "../../assets/icons/menu-bars.svg";
import { ImCross } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import BottomMenu from "../../components/BottomMenu";

function Transactions() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(3);
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
        <p className="text-lg font-semibold">Transactions</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Account */}
      <div className="pb-9 mt-3 mx-6">
        <h3 className="text-center text-xl mb-3">Last Transactions</h3>
        {[12, 2, 3, 3, 3, 4].map((value, index) => (
          <div key={"wooowow" + index}>
            <div className="flex items-center justify-between text-start">
              <div>
                <p className="text-xs">18th Mar 2023, 14:34 pm</p>
                <p className="text-base font-semibold mt-0.5 leading-6">
                  x3dk....3kkl to x7df....3e03
                </p>
                <p className="text-base font-bold text-light_green leading-4">
                  100 SoCo ($6.00)
                </p>
              </div>
              <div className="bg-banner text-white text-lg h-12 w-12 flex justify-center items-center rounded-full">
                <FiSend className="" />
              </div>
            </div>
            <hr className="border-white/30 my-4" />
          </div>
        ))}
      </div>

      <BottomMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default Transactions;
