import React from "react";
import { Link } from "react-router-dom";

import LogoBg from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-div">
      <Link to="/" className="logo">
        <img src={LogoBg} alt="homepage" />
      </Link>
    </div>
  );
};

export default Logo;
