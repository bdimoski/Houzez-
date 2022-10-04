import React from "react";

import { AiOutlineUser } from "react-icons/ai";

const Author = ({ props }) => {
  return (
    <div className="author flex text-[#636363] text-[13px] border-t-[1px] border-[#dce0e0]">
      <div className="flex mx-auto w-[82%] items-center mt-4">
        <AiOutlineUser size={15} />
        <span className="mx-2 font-light text-[#636363] text-[12px]">
          by {props.author}
        </span>
      </div>
    </div>
  );
};

export default Author;
