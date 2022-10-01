import React from "react";

const YourInformation = () => {
  return (
    <div className="your_information border-1 relative flex-wrap px-auto mb-[10px] w-[100%] items-center">
      <label
        htmlFor=""
        className="font-semibold text-[15px] pb-0 mb-0 cursor-pointer"
      >
        Your Information
      </label>
      <div className="max-w-[100%] relative flex w-[100%]">
        <select
          name="your_information"
          id="form-field"
          className="bg-white font-light text-[#373a3c] border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1"
        >
          <option value="I'm a">I'm a</option>
          <option value="I'm a real estate agent">
            I'm a real estate agent
          </option>
          <option value="I'm a property owner">I'm a property owner</option>
        </select>
      </div>
    </div>
  );
};

export default YourInformation;
