import React from "react";

import Agents from "./Agents/Agents";
import Title from "./Title/Title";
import WhiteSpace from "./White Space/WhiteSpace";

const MeetOurTeam = () => {
  return (
    <div className="w-full">
      <div className="md:max-w-[1240px] md:mx-auto md:relative md:flex">
        <div className="md:w-full md:flex flex-wrap overflow-hidden p-2.5">
          <WhiteSpace />
          <Title />
          <Agents />
          <WhiteSpace />
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
