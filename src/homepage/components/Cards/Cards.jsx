import React from "react";
import "./Cards.css";
import { cardsData } from "./cardsData";

const Cards = () => {
  return (
    <div className="container max-w-[100%]">
      <div className="w-full m-auto pb-[8rem] px-4 text-white bg-[#004274] mb-[0px] ">
        <div className="md:w-[60%] w-[80%] mx-auto grid md:grid-cols-3 gap-0.5 wrapper">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="w-full text-[#E9EFF3] gradient flex flex-col p-4 my-4 hover:-translate-y-4 duration-300 hover:shadow-2xl"
            >
              <h2 className="text-lg text-center mt-10">{item.title}</h2>
              <p className="text-center text-base text-[#BBCDDA] py-2 m-2">
                {item.paragraph}
              </p>
              <a
                href="#"
                className="text-center font-medium mx-8 mt-4 text-[#00AEEE]"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="div-transform lg:border-[0px 0px 80px 1920px;]"></div>
    </div>
  );
};

export default Cards;
