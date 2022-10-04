import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LogoBg from "../assets/logo.png";
import LogoMob from "../assets/logoMob.png";

const Logo = () => {
  const initialBgImage = () => {
    if (window.innerWidth > 768) {
      return LogoBg
    } else {
      return LogoMob
    }
  };
  const [bgImage, setBgImage] = useState(initialBgImage);
  const resizeHandler = () => {
    if (window.innerWidth > 768) {
      return setBgImage(LogoBg);
    } else {
      return setBgImage(LogoMob);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });
  return <Link to='/'><img className="LogoBg" src={bgImage} alt="top" /></Link> 
};

export default Logo;
