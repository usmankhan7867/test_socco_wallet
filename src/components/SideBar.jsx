import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="absolute top-[60px] text-base left-2 bg-banner/80 border border-white/30 backdrop-blur-md rounded shadow-md px-5 py-6">
      <div>
        <Link to="/home/receive" className="text-white">
          <div className="flex items-center cursor-pointer hover:underline">
            <BsQrCodeScan className="mr-2" />
            <span>Account Details</span>
          </div>
        </Link>

        <div className="flex items-center cursor-pointer hover:underline mt-5">
          <MdOpenInNew className="mr-2" />
          <span>View on explorer</span>
        </div>
        <div className="flex items-center cursor-pointer hover:underline mt-5">
          <HiMiniChatBubbleLeftRight className="mr-2" />
          <span>Support</span>
        </div>
        <Link to="/setting" className="text-white">
          <div className="flex items-center cursor-pointer hover:underline mt-5">
            <AiOutlineSetting className="mr-2" />
            <span>Setting</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
