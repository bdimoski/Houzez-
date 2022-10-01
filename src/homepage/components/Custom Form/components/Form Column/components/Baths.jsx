import React from "react";

const Baths = () => {
  return (
    <div className="number_baths px-0.5 mb-[10px] md:w-[50%] w-full flex-wrap items-center">
      <input
        type="number"
        name="number_baths"
        id="number_baths"
        placeholder="Number of baths"
        className="placeholder-[#373a3c] bg-white border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1 m-0"
      />
    </div>
  );
};

export default Baths;
