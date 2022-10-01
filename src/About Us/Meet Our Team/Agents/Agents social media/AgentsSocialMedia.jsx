import React from "react";

import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

const AgentsSocialMedia = () => {
  return (
    <div className="sm:w-[200px] mx-auto items-center text-[15px] w-full">
      <ul className="flex md:w-full justify-center my-4">
        <li className="px-1">
          <FaFacebook className="text-[#48629a]" />
        </li>
        <li className="px-1">
          <FaTwitter className="text-[#0099d4]" />
        </li>
        <li className="px-1">
          <FiLinkedin className="text-[#006a9d]" />
        </li>
        <li className="px-1">
          <FaPinterest className="text-[#b51d23]" />
        </li>
        <li className="px-1">
          <AiOutlineGooglePlus className="text-[#b51d23]" />
        </li>
      </ul>
    </div>
  );
};

export default AgentsSocialMedia;
