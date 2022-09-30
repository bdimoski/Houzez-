import React from "react";

import "./MansoryStyle.css";

const VerticalCard = ({ title, subtitle, image, textLink, icon }) => {
  console.log(icon);
  return (
    <div
      className="vertical-div hover-effect-masonary"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "580px",
        gridRowEnd: `span ${Math.ceil(580 / 10 + 1)}`,
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

export default VerticalCard;
