import React from "react";
import "./NavBar.css";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import MobileNav from "./MobileNav";
import NavPc from "./NavPc";
import Slider from "../Navbar/Slider";
import TitleModule from "./TitleModule";

const BrowserView = styled.div`
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const MobileView = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const curLocation = useLocation();

  return (
    <div className="relative">
      <div
        className={`mobile-background ${
          curLocation.pathname === "/" ? "home-background " : "site-background"
        } w-full`}
      >
        <div className="relative">
          <div className="flex items-center pl-4 h-24 max-w-[1240px] mx-auto text-white">
            <BrowserView>
              <NavPc />
            </BrowserView>

            <MobileView className="w-full text-black">
              <MobileNav />
            </MobileView>
          </div>
        </div>
      </div>
      <TitleModule curLocation={curLocation.pathname} />
      <Slider curLocation={curLocation.pathname} />
      <div className="background-overlay"></div>
    </div>
  );
};

export default Navbar;
