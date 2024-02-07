import React from "react";
import hand from "../asset/hand.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import me from "../asset/me.png";
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/js.png";
import react from "../asset/react.png";
import tailwind from "../asset/tailwind.png";
import mongo from "../asset/mongo.png";
import express from "../asset/express.png";
import node from "../asset/node.png";

const Home = () => {
  return (
    <div className="w-full md:h-[100vh] h-full bg-[#f9f9f9]" name="Home">
      <div className="flex flex-col justify-center items-center h-full pb-10 md:pb-0 px-[15px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-[500px] lg:mr-[100px] md:text-[55px] text-[37px] text-center lg:text-left ">
            <div className=" font-extrabold mb-[19px] w-full">
              <p className="w-full ">Front-End React </p>
              <p className="flex h-full w-full items-center justify-center lg:justify-normal mt-[-10px] ">
                Developer
                <img
                  className="h-[45px] w-auto ml-3"
                  src={hand}
                  alt="waving hand"
                />
              </p>
            </div>
            <p className="md:font-medium text-[18px] mb-[25px] ">
              Hi, I'm Omotosho Oluwatobi. A passionate Front-end React Developer
              based in Lagos, Nigeria. 📍
            </p>
            <div className="text-[30px] flex gap-[12px] justify-center lg:justify-normal">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oluwatobi-omotosho-854804145/"
              >
                <BsLinkedin className="hover:text-[#0072b1]" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sot26"
              >
                <BsGithub
                  size={30}
                  className="hover:text-white hover:bg-black rounded-full"
                />
              </a>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-normal">
            <img
              src={me}
              alt="my-pic"
              className="rounded-full h-[300px] w-auto md:h-full my-4 md:my-0"
            />
          </div>
        </div>
        <div className="mt-[60px] flex flex-col lg:flex-row justify-center items-center">
          <div className=" flex md:mr-[30px]">
            <p className="text-[17px] font-semibold lg:mr-5 border-b-2 lg:border-b-0 border-black mb-4 lg:mb-0 ">
              Tech Stack
            </p>
            <p className="hidden lg:flex">|</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-normal lg:mx-8 gap-y-4">
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Html"
            >
              <img src={html} className="html" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Css"
            >
              <img src={css} className="css" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Java Script"
            >
              <img src={js} className="js" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="React"
            >
              <img src={react} className="react" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Tailwind"
            >
              <img src={tailwind} className="tailwind" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="NODE"
            >
              <img src={node} className="tailwind" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Node Express"
            >
              <img src={express} className="tailwind" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="MongoDB"
            >
              <img src={mongo} className="tailwind h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
