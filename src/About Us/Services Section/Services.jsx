import React from "react";

import GridWidgets from "./Grid Widgets/GridWidgets";
import Title from "./Title/Title";
import WhiteSpace from "./White Space/WhiteSpace";

const Services = () => {
  return (
    <div className="w-full">
      <div className="md:max-w-[1240px] md:mx-auto md:relative md:flex">
        <div className="md:w-full p-2.5 md:flex flex-wrap overflow-hidden">
          <WhiteSpace />
          <Title />
          <GridWidgets />
          <WhiteSpace />
        </div>
      </div>
    </div>
  );
};

export default Services;
