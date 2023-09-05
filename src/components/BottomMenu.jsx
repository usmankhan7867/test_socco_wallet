import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function BottomMenu({ selectedTab, setSelectedTab }) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full flex items-center justify-between bg-banner shadow-lg">
      <div
        onClick={() => {
          setSelectedTab(1);
          navigate("/home");
        }}
        className={`w-1/3 py-2.5 flex justify-center items-center hover:scale-105 cursor-pointer ${
          selectedTab === 1 ? "bg-btn hover:scale-100" : ""
        }`}
      >
        <RiMoneyDollarCircleLine className="text-3xl" />
      </div>
      <div
        onClick={() => {
          setSelectedTab(2);
          navigate("/gallery");
        }}
        className={`w-1/3 py-2.5 flex justify-center items-center hover:scale-105 cursor-pointer ${
          selectedTab === 2 ? "bg-btn hover:scale-100" : ""
        }`}
      >
        <AiOutlineAppstore className="text-3xl" />
      </div>

      <div
        onClick={() => {
          setSelectedTab(3);
          navigate("/transactions");
        }}
        className={`w-1/3 py-2.5 flex justify-center items-center hover:scale-105 cursor-pointer ${
          selectedTab === 3 ? "bg-btn hover:scale-100" : ""
        }`}
      >
        <BiHistory className="text-3xl" />{" "}
      </div>
    </div>
  );
}

export default BottomMenu;
