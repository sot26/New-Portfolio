import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      name="Contact"
    >
      <div className="w-full  h-full py-[100px] px-[20px] lg:px-[50px]">
        <p className="text-[#147EFB] font-bold text-[17px] mb-[10px] text-center md:text-left">
          CONTACT
        </p>
        <p className="text-[25px] font-bold  text-center md:text-left">
          Hit me up! 👇
        </p>
        <div className="flex gap-[30px] md:gap-[70px] flex-col md:flex-row mt-[20px] md:mt-[60px]">
          <div className="flex">
            <div
              className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
              title="Telephone"
            >
              <FiPhoneCall size={22} />
            </div>
            <div>
              <p className="text-[17px] font-bold mb-[5px] ">Call</p>
              <a
                href="tel:+2348133168490"
                className="hover:text-[#147EFB] text-xs xxs:text-base"
              >
                <p>+2348133168490</p>
              </a>
            </div>
          </div>
          <div className="flex">
            <div
              className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
              title="Send E-mail"
            >
              <BiMailSend size={30} />
            </div>
            <div>
              <p className="text-[17px] font-bold mb-[5px] ">Mail</p>
              <a href="mailto:omotoshotobi26@gmail.com">
                <p className="hover:text-[#147EFB] text-xs xxs:text-base">
                  Omotoshotobi26@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
