import React from "react";

import Informations from "./Informations/Informations";
import Title from "./Title/Title";
import WhiteSpace from "./White Space/WhiteSpace";
import "./YourVision.css";

const YourVision = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto relative">
        <div className="w-full p-2.5">
          <WhiteSpace />
          <Title />
          <Informations />
          <WhiteSpace />
        </div>
      </div>
    </div>
  );
};

export default YourVision;
