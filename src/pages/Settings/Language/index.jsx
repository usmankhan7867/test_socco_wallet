import React from "react";

import Logo from "../../../assets/logo-sm.svg";
import UK from "../../../assets/icons/UK.png";
import GM from "../../../assets/icons/GM.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { AiOutlineRight } from "react-icons/ai";

function Language() {
  return (
    <div className={`relative h-[600px] text-center text-base`}>
      <div className="w-full flex items-center justify-between bg-banner shadow-lg px-6 py-3">
        <Link to="/setting" className="text-white">
          <BiArrowBack className="text-lg cursor-pointer w-[23px]" />
        </Link>
        <p className="text-lg font-semibold">Menu</p>
        <img src={Logo} alt="logo" className="h-4" />
      </div>
      {/* Setting Options */}
      <div className="py-6">
        <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-not-allowed">
          <span className="">
            <img src={UK} alt="uk" className="inline h-5 mr-2" />
            English
          </span>
          <input type="radio" checked className="" />
        </div>
        <div className="flex justify-between items-center hover:bg-banner/20 px-6 py-3 cursor-not-allowed">
          <span className="">
            <img src={GM} alt="gm" className="inline h-5 mr-2 rounded-full" />
            Germany
          </span>
          <input type="radio" className="" />
        </div>
      </div>
    </div>
  );
}

export default Language;
