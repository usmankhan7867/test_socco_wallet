import React from "react";

import Logo from "../../assets/logo-sm.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function MainSettings() {
  return (
    <div className={`relative h-[600px] text-center text-base`}>
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/home" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Menu</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Setting Options */}
      <div className="py-6">
        <Link to="/setting/language" className="text-white">
          <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3">
            <p className="">Language</p>
            <AiOutlineRight className="" />
          </div>
        </Link>

        <Link to="/setting/safty-and-privacy" className="text-white">
          <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer">
            <p className="">Safety & Privacy</p>
            <AiOutlineRight className="" />
          </div>
        </Link>

        <Link to="/setting/about" className="text-white">
          <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer">
            <p className="">Network</p>
            <AiOutlineRight className="" />
          </div>
        </Link>

        <Link to="/setting/network" className="text-white">
          <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-pointer">
            <p className="">About Soccercoin</p>
            <AiOutlineRight className="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainSettings;
