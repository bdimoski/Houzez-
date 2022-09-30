import React from "react";

import "./Nobackground.css";

const NoBackgroundCard = ({ title, subtitle }) => {
  return (
    <div
      className="no-background"
      style={{
        height: "205px",
        gridRowEnd: `span ${Math.ceil(205 / 10 + 1)}`,
      }}
    >
      <h2 className="no-background-title">{title}</h2>
      <p className="no-background-text">{subtitle}</p>
    </div>
  );
};

export default NoBackgroundCard;
