import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="md:my-auto">
      <ul className="flex font-light md:justify-between justify-center">
        <li className="px-2 text-[14px] hover:text-[#00aeef] transition cursor-pointer">
          Privacy
        </li>
        <li className="px-2 text-[14px] hover:text-[#00aeef] transition cursor-pointer">
          Terms and conditions
        </li>
        <li className="px-2 text-[14px] hover:text-[#00aeef] transition cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
