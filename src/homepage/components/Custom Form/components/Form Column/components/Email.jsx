import React from "react";

const Email = () => {
  return (
    <div className="email-adress px-0.5 mb-[-10px] w-[100%] flex-wrap items-center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Adress"
        className="placeholder-[#373a3c] bg-white border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1"
      />
    </div>
  );
};

export default Email;
