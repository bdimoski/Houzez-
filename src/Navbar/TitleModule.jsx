import React from "react";

const TitleModule = ({ curLocation }) => {
  const displayProp = curLocation === "/" ? "inherit" : "none";
  return (
    <div
      className="houzez-title-container absolute md:top-[40%] top-[30%] w-full z-[22] flex text-center"
      style={{ display: `${displayProp}` }}
    >
      <div className="houzez-title-subtitle max-w-[850px] mx-auto">
        <div className="text-white">
          <h2 className="houzez-title text-[45px] mb-2">Welcome to Houzez 2.0</h2>
          <p className="houzez-subtitle text-[25px] font-thin">
            "Packed with 100+ new features and improvements, it is the biggest
            all-in-one solution for real estate companies and professionals"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleModule;
