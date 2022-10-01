import React from "react";

import AllRights from "./components/AllRights";
import TermsAndConditions from "./components/TermsAndConditions";
import SocialMedia from "./components/SocialMedia";

const FooterBootom = () => {
  return (
    <div className="flex flex-col max-w-[1140px] px-auto justify-center md:mx-auto md:justify-between md:flex-row">
      <AllRights />
      <TermsAndConditions />
      <SocialMedia />
    </div>
  );
};

export default FooterBootom;
