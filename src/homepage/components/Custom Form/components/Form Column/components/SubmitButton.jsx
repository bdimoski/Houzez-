import React from "react";

const SubmitButton = () => {
  return (
    <div className="submit_form px-0.5 mb-[10px] w-[100%] flex-wrap items-end relative flex">
      <button
        type="submit"
        className="bg-[#00aeff] hover:bg-[#33beff] transition-all w-[100%] items-end min-h-[47px] text-white cursor-pointer py-[15px] px-[30px] rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
