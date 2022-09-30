import React from "react";

const WrapperInside = ({ props }) => {
  return (
    <div>
      <ul className="item-price-wrapper text-white absolute left-[30px] bottom-[115px] right-auto p-0 z-[2]">
        <li className="font-bold">{props.price}</li>
      </ul>
      <div className="labels absolute bottom-auto top-[15px] right-[30px]">
        <a
          href=""
          className="m-0 text-[10px] text-white bg-[rgba(0,0,0,0.65)] px-1 py-0.5 rounded-sm uppercase hover:text-[#00aeef]"
        >
          {props.tag}
        </a>
      </div>
      <span className="absolute top-[20px] left-[30px] text-white bg-[#61ce70] text-[10px] uppercase font-medium py-0.5 px-1 rounded-sm">
        Featured
      </span>
    </div>
  );
};

export default WrapperInside;
