import React from "react";

import AboutFooter from "./components/About Footer/AboutFooter";
import ContactFooter from "./components/Contact Footer/ContactFooter";
import Newsletter from "./components/Newsletter Footer/Newsletter";
import FooterBootom from "./components/Footer Bottom/FooterBootom";

const Footer = () => {
  return (
    <div className="w-full bg-[#004274] text-white md:grid flex flex-col ">
      <div className="max-w-[1140px] mx-auto flex flex-col md:grid md:grid-cols-4 pt-[100px] pb-[100px] gap-12 p-10">
        <AboutFooter />
        <ContactFooter />
        <Newsletter />
      </div>
      <div className="w-full bg-[#00335A] py-5 align-middle text-center text-white">
        <FooterBootom />
      </div>
    </div>
  );
};

export default Footer;
