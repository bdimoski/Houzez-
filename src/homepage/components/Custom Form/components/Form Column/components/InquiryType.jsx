import React from "react";

const InquiryType = () => {
  return (
    <div className="inqiury-type relative flex-wrap px-auto mb-[10px] w-[100%] items-center border-1">
      <label
        htmlFor=""
        className="font-semibold text-[15px] pb-0 mb-0 cursor-pointer"
      >
        Inquiry Type
      </label>
      <div className="max-w-[100%] relative flex w-[100%]">
        <select
          name="inqiury_type"
          id="form-field"
          className="bg-white font-light text-[#373a3c] border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1"
        >
          <option value="Select">Select</option>
          <option value="Purchase">Purchase</option>
          <option value="Rent">Rent</option>
          <option value="Sell">Sell</option>
          <option value="Miss">Miss</option>
          <option value="Evaluation">Evaluation</option>
          <option value="Mortage">Mortage</option>
        </select>
      </div>
    </div>
  );
};

export default InquiryType;
