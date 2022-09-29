import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Listing from "./components/Listing";
import Slider from "./components/Slider";
import TitleModule from "./components/TitleModule";

import "./Header.css";

const Header = () => {
  const curLocation = useLocation();

  return (
    <div className="header-container">
      <div
        className={`${
          curLocation.pathname === "/" ? "home-background " : "site-background"
        } `}
      >
        <div className="header-items">
          <Logo />
          <Navbar />
          <Favorites />
          <Listing />
        </div>
      </div>
      <TitleModule curLocation={curLocation.pathname} />
      <Slider curLocation={curLocation.pathname} />
      <div className="background-overlay"></div>
    </div>
  );
};
export default Header;