import React from "react";

import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

const WrapperOutside = ({ props }) => {
  return (
    <div className="item-wrap-outside text-center mt-4">
      <h2 className="title mb-3 font-medium ">
        <a href="" className="hover:text-[#00AEEF] transition text-[#222]">
          Awesome family home
        </a>
      </h2>
      <ul className="info-icons flex justify-center text-center text-sm font-medium pb-2.5">
        <li className="font-light flex mx-1 text-[#7A7A7A]">
          <i>
            <IoBedOutline size={20} />
          </i>
          <span className="mx-1">{props.beds}</span>
        </li>
        <li className="font-light flex mx-1 text-[#7A7A7A]">
          <FaShower size={20} className="mx-1" />
          {props.bathroom}
        </li>
        <li className="font-light flex mx-1 text-[#7A7A7A]">
          <i>
            <MdSquareFoot size={20} />
          </i>
          <span className="">{props.area}</span>
        </li>
      </ul>
      <h3 className="font-light uppercase text-[12px] text-[##222]">
        {props.title}
      </h3>
    </div>
  );
};

export default WrapperOutside;
