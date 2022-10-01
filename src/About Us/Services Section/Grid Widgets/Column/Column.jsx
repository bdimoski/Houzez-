import React from "react";

import { BiRightArrow } from "react-icons/bi";
import "../GridWidgets.css";

const Column = ({ props }) => {
  return (
    <div className="relative hover-effect-grid">
      <img
        src={props.image}
        alt="images"
        className="h-[256px] rounded w-[100%] bg-cover bg-no-repeat bg-center"
      />
      <div className="absolute p-5 h-[100%] w-full top-[0%] text-white z-[1]">
        <div className="text-[12px] font-light cursor-pointer">{props.tag}</div>
        <div className="text-[18px] font-light cursor-pointer">
          {props.title}
        </div>
        <div className="absolute text-[12px] font-light uppercase bottom-[30px] cursor-pointer">
          More Details
        </div>
        <div className="absolute bottom-[30px] right-[30px] font-light cursor-pointer">
          {" "}
          <BiRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Column;
