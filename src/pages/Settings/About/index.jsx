import React from "react";
import Logo from "../../../assets/logo-sm.svg";
import LogoLong from "../../../assets/logo.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function About() {
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
      <img src={LogoLong} alt="logo" className="mx-auto mt-2 -mb-8" />
      <p className="text-center text-base font-semibold mx-12">Version 1.02</p>
      <p className="text-center text-sm mx-12 mt-24">Term & Conditions</p>
      <p className="text-center text-sm mx-12 mt-2">Privacy Policy</p>
      <p className="text-center text-sm mx-12 mt-2">Support</p>
      <p className="text-center text-sm mx-12 mt-2">soccercoin.io</p>
    </div>
  );
}

export default About;
