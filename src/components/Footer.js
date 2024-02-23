import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[120px] bg-[#F9F9F9]">
      <div className="flex justify-center items-center h-full gap-4 lg:gap-10 flex-col lg:flex-row px-[20px]">
        <div className="font-bold text-[17px] flex flex-wrap justify-center items-center text-center lg:text-left">
          Copyright © 2023. All rights are reserved
        </div>
        <div className="text-[25px] flex gap-[12px] ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oluwatobi-omotosho-854804145/"
          >
            <BsLinkedin className="hover:text-[#0072b1]" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/sot26">
            <BsGithub className="hover:text-white hover:bg-black rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
