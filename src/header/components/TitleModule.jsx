import React from "react";

import "./TitleModule.css";

const TitleModule = ({ curLocation }) => {
  const displayProp = curLocation === "/" ? "inherit" : "none";
  return (
    <div
      className="houzez-title-container"
      style={{ display: `${displayProp}` }}
    >
      <div className="houzez-title-subtitle">
        <h2 className="houzez-title">Welcome to Houzez 2.0</h2>
        <p className="houzez-subtitle">
          "Packed with 100+ new features and improvements, it is the biggest
          all-in-one solution for real estate companies and professionals"
        </p>
      </div>
    </div>
  );
};

export default TitleModule;
