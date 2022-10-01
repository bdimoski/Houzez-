import React from "react";

const LastName = () => {
  return (
    <div className="last-name px-0.5 md:mb-[-10px] mb-[-10px] md:w-[50%] w-full flex-wrap items-center">
      <input
        type="text"
        name="last_name"
        id="last_name"
        placeholder="Last Name"
        className="placeholder-[#373a3c] bg-white border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1 m-0"
      />
    </div>
  );
};

export default LastName;
