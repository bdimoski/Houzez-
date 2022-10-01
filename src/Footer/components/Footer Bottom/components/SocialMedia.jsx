import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="sm:w-[200px] my-auto items-center w-full">
      <ul className="flex md:w-full justify-center my-4">
        <li className="px-2 hover:text-[#00aeef] transition cursor-pointer">
          <FaFacebook />
        </li>
        <li className="px-2 hover:text-[#00aeef] transition cursor-pointer">
          <FaTwitter />
        </li>
        <li className="px-2 hover:text-[#00aeef] transition cursor-pointer">
          <AiOutlineGooglePlus />
        </li>
        <li className="px-2 hover:text-[#00aeef] transition cursor-pointer">
          <FiLinkedin />
        </li>
        <li className="px-2 hover:text-[#00aeef] transition cursor-pointer">
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
