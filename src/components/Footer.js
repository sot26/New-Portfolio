import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[120px] bg-[#F9F9F9]">
      <div className="flex justify-center items-center h-full gap-4 lg:gap-24 flex-col lg:flex-row px-[20px]">
        <div className="font-bold text-[17px] flex flex-wrap justify-center items-center text-center lg:text-left">
          Copyright © 2023. All rights are reserved
        </div>
        <div className="text-[25px] flex gap-[12px] ">
          <BsLinkedin />
          <BsGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
