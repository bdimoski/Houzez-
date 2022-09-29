import React from "react";

import "./MansoryStyle.css";

const HorizontalCard = ({ title, subtitle, image, textLink, icon }) => {
  return (
    <div
      className="horizontal-div hover-effect-masonary"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "215px",
        gridRowEnd: `span ${Math.ceil(215 / 10 + 1)}`,
      }}
    >
      <div className="wrap">
        <div className="universal-subtitle">{subtitle}</div>
        <div className="universal-title">{title}</div>
        <div className="universal-text-link">{textLink}</div>
        <div className="universal-icon">{icon}</div>
      </div>
    </div>
  );
};

export default HorizontalCard;
