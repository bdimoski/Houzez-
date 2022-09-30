import React from "react";

import "./MansoryStyle.css";

const SquareCard = ({ title, subtitle, image, textLink, icon }) => {
  return (
    <div
      className="square-div hover-effect-masonary"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "275px",
        gridRowEnd: `span ${Math.ceil(275 / 10 + 1)}`,
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

export default SquareCard;
