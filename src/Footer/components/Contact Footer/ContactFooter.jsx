import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaViber } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <div className="contact_footer">
      <h6 className="font-medium pt-2 mb-4 text-[18px]">Contact</h6>
      <ul className="mb-2">
        <li className="py-2 flex items-center text-[14px] font-light leading-relaxed hover:text-[#00aeef] transition cursor-pointer">
          <IoLocationOutline size={15} />
          <span className="pl-2"> 774 NE 84th St Miami, FL 33879</span>
        </li>
        <li className="py-2 flex items-center text-[14px] font-light leading-relaxed hover:text-[#00aeef] transition cursor-pointer">
          <FaViber size={15} />{" "}
          <span className="pl-2">Call us FREE +1 (800) 990 8877</span>
        </li>
        <li className="py-2 flex items-center text-[14px] font-light leading-relaxed hover:text-[#00aeef] transition cursor-pointer">
          <BsTelephone size={15} />
          <span className="pl-2">+1 (800) 990 8877</span>
        </li>
        <li className="py-2 flex items-center text-[14px] font-light leading-relaxed hover:text-[#00aeef] transition cursor-pointer">
          <MdOutlineMail size={15} />{" "}
          <span className="pl-2">email@email.com</span>{" "}
        </li>
      </ul>
      <a
        href="/"
        className="py-2 font-medium text-[14px] hover:text-[#00aeef] transition"
      >
        Contact us
      </a>
    </div>
  );
};

export default ContactFooter;
