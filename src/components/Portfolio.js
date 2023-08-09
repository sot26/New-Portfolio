import React from "react";
import netflix from "../asset/netflix.jpg";
import crypto from "../asset/crypto.jpg";
import commerce from "../asset/commerce.jpg";
import netflixM from "../asset/netflixM.jpg";
import cryptoM from "../asset/cryptoM.jpg";
import commerceM from "../asset/commerceM.jpg";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-full bg-[#F9F9F9]"
      name="Projects"
    >
      <div className="flex justify-center items-center w-auto h-full my-[100px]">
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <div className="mb-[30px] md:mb-[62px] text-left w-full">
            <p className="text-[17px] font-bold text-[#147EFB] text-center md:text-left">
              PORTFOLIO
            </p>
            <p className="text-[25px] font-bold text-center md:text-left">
              Every project is a distinct development 🧩
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-[30px] md:gap-[50px]">
            <Card
              className="flex md:p-5 p-2 flex-col lg:flex-row md:gap-[80px] gap-[30px] sm:gap-[45px]  bg-white rounded-2xl"
              imgW={netflix}
              imgM={netflixM}
              name="Netflix Clone 🎥"
              desc="The Netflix Clone App is a web application designed to replicate the functionalities and features of the popular streaming platform, Netflix."
              tool="React"
              toolCN="py-3 auto flex justify-center items-center shadow-xl px-3"
              tool1="Tailwind"
              tool2="Firebase"
              code="https://github.com/sot26/Netflix-clone"
              demo="https://sot-netflix-clone.netlify.app/"
            />
            <Card
              className="flex md:p-5 p-2 lg:flex-row-reverse flex-col md:gap-[80px] gap-[30px] sm:gap-[45px]  bg-white rounded-2xl"
              imgW={crypto}
              imgM={cryptoM}
              name="Crypto Price Tracker 🪙 "
              desc="The crypto price tracker is a tool designed to monitor and track the prices of various cryptocurrencies in real-time."
              tool="React"
              toolCN="py-3 auto flex justify-center items-center shadow-xl px-3"
              tool1="Tailwind"
              tool2="C.G API"
              title="Coingecko API"
              code="https://github.com/sot26/crypto-tracker"
              demo="https://sot-crypto-tracker.netlify.app/"
            />
            <Card
              className="flex md:p-5 p-2 md:gap-[80px] gap-[30px] sm:gap-[45px] flex-col lg:flex-row  bg-white rounded-2xl"
              imgW={commerce}
              imgM={commerceM}
              name="E-Commerce Website 🛒 "
              desc="The E-Commerce website serves as a virtual storefront, allowing users to browse and purchase items conveniently from the comfort of their own homes"
              //   tool="React"
              toolCN="hidden"
              tool1="Redux"
              tool2="Firebase"
              tool3CN="py-3 auto flex justify-center items-center shadow-xl px-3"
              tool3="Stripe"
              code="https://github.com/sot26/E-commerce"
              demo="https://sotshop.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
