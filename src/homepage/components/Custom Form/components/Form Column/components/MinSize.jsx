import React from "react";

const MinSize = () => {
  return (
    <div className="minimum_area px-0.5 mb-[10px] md:w-[50%] w-full flex-wrap items-center md:text-base">
      <input
        type="number"
        name="minimum_area"
        id="minimum_area"
        placeholder="Minimum size (Sq Ft)"
        className="placeholder-[#373a3c] bg-white border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1 m-0"
      />
    </div>
  );
};

export default MinSize;
