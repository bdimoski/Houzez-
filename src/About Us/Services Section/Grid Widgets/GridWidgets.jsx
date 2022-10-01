import React from "react";

import Column from "./Column/Column";
import { dataService } from "../Data/dataService";
import BigCol from "./Big Col/BigCol";

const GridWidgets = () => {
  return (
    <div className="md:mt-6 md:w-full flex">
      <div className="md:flex flex-wrap w-full">
        <div className="flex flex-col gap-6 md:w-[25%] w-full p-2.5">
          {dataService[0].colOne.map((el, index) => (
            <Column props={el} key={index} />
          ))}
        </div>
        <div className="flex flex-col gap-6 md:w-[25%] w-full p-2.5">
          {dataService[1].colTwo.map((el, index) => (
            <Column props={el} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6 md:w-[25%] w-full p-2.5">
          {dataService[2].colThree.map((el, index) => (
            <BigCol props={el} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6 md:w-[25%] w-full p-2.5">
          {dataService[3].colFour.map((el, index) => (
            <BigCol props={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridWidgets;
