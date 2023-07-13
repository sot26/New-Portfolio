import React from "react";
import laptop from "../asset/laptop.jpg";
import Figma from "../asset/Figma.png";
import firebase from "../asset/firebase.png";
import git from "../asset/git.png";
import redux from "../asset/redux.png";

const About = () => {
  return (
    <div className="w-full md:h-[100vh] h-full" name="About">
      <div className="flex flex-col justify-center items-center h-full my-12 md:m-0 px-[15px]">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center">
          <div className="lg:mr-[85px] px-5 md:px-0 flex items-center justify-center">
            <img
              className="lg:max-h-[400px] max-h-[300px] h-auto w-auto rounded-xl "
              src={laptop}
            />
          </div>
          <div className="max-w-[500px] flex flex-col justify-center items-center md:justify-normal">
            <p className="font-bold text-[17px] mb-[11px] text-[#147EFB] mt-6 md:mt-0">
              ABOUT ME
            </p>
            <p className="font-bold text-[25px] mb-[20px]">
              An enthusiastic Front-End Developer based in Lagos, Nigeria 📍
            </p>
            <p className="md:text-[17px] text-[15px] font-thin text-[#767676]">
              In my role as a Front-End Developer, I bring a formidable set of
              skills encompassing HTML, CSS, JavaScript, React, and Tailwind. My
              strength lies in creating and managing responsive websites that
              deliver seamless user experiences. I specialize in crafting
              dynamic and captivating interfaces by employing clean and
              optimized code, as well as leveraging state-of-the-art development
              tools and methodologies. Additionally, I am adept at working
              collaboratively with cross-functional teams, fostering a cohesive
              environment to deliver exceptional web applications.
            </p>
          </div>
        </div>
        <div className="mt-[60px] flex justify-center items-center flex-col lg:flex-row">
          <div className=" flex lg:mr-[70px] ">
            <p className="text-[17px] font-semibold lg:mr-5 border-b-2 lg:border-b-0 border-black mb-4 lg:mb-0 ">
              Tech Tools
            </p>
            <p className="lg:flex hidden">|</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-normal lg:mx-8 gap-y-4">
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Figma"
            >
              <img src={Figma} alt="figma" className="h-[48px] w-auto" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Firebase"
            >
              <img src={firebase} alt="firebase" className="h-[48px] w-auto" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Git"
            >
              <img src={git} alt="git" className="h-[48px] w-auto" />
            </div>
            <div
              className="w-[65px] h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center mr-6"
              title="Redux-toolkit"
            >
              <img
                src={redux}
                alt="redux-toolkit"
                className="h-[48px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
