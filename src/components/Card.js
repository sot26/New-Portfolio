import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="image-wrap md:w-[530px] md:h-[340px] w-auto h-[350px] rounded-2xl">
        <img src={props.imgW} alt="site preview" className="hidden sm:block" />
        <img src={props.imgM} alt="site preview" className="block sm:hidden" />
      </div>
      <div className="w-[250px] xxs:w-[300px] md:max-w-[530px]">
        <div className=" object-center">
          <p className="mt-[15px] mb-[20px] text-[17px] font-bold text-center">
            {props.name}
          </p>
          <p className="text-[17px] font-medium mb-[20px] text-center">
            {props.desc}
          </p>
          <div className="mb-[30px] flex justify-center gap-4 flex-wrap">
            <p className={props.toolCN}>{props.tool}</p>
            <p className="py-3 auto flex justify-center items-center shadow-xl px-3">
              {props.tool1}
            </p>
            <p
              className="py-3 auto flex justify-center items-center shadow-xl px-3"
              title={props.title}
            >
              {props.tool2}
            </p>
            <p className={props.tool3CN}>{props.tool3}</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-[17px] font-bold gap-6">
          <a target="_blank" rel="noreferrer" href={props.code}>
            <button className="flex justify-center items-center hover:text-[#147EFB]">
              <p>Code</p> <BsGithub size={30} />
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href={props.demo}>
            <button className="flex justify-center items-center hover:text-[#147EFB]">
              <p>View site</p> <MdOpenInNew size={30} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
