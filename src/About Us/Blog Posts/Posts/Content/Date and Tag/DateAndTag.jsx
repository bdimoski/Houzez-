import React from "react";

import { IoCalendarOutline } from "react-icons/io5";
import { BsTag } from "react-icons/bs";

const DateAndTag = ({ props }) => {
  return (
    <div className="flex align-middle">
      <ul className="flex text-center text-sm font-medium pb-2 w-full gap-2">
        <li className="font-light flex my-auto text-[#636363] items-center">
          {" "}
          <IoCalendarOutline />
          <span className="mx-1 text-[12px]">{props.date}</span>{" "}
        </li>
        <li className="font-light flex my-auto mx-1 text-[##636363] items-center text-[12px]">
          <BsTag />{" "}
          <span className="text-[#00aeef] mx-1 cursor-pointer">
            {props.tag}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DateAndTag;
