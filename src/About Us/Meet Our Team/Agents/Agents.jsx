import React from "react";

import "../Agents/Agents.css";
import { agentsData } from "../Data/Data";
import TeamContentAfter from "./Team Content After/TeamContentAfter";
import TeamContentBefore from "./Team Content Before/TeamContentBefore";

const Agents = () => {
  return (
    <div className="md:mt-6 md:w-full flex">
      <div className="md:flex flex-wrap w-full">
        {agentsData.map((el, index) => (
          <div className="md:w-[25%] cursor-pointer" key={index}>
            <div className="flex p-2.5">
              <div className="hover-effect-agent bg-cover bg-no-repeat bg-center relative">
                <img src={el.profilePhoto} alt="agent{index}" />
                <TeamContentBefore props={el} />
                <TeamContentAfter props={el} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
