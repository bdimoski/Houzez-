import React from "react";

import AgentsSocialMedia from "../Agents social media/AgentsSocialMedia";

const TeamContentAfter = ({ props }) => {
  return (
    <div className="team-content-after flex">
      <div className="my-auto mx-[10%]">
        <div className="name text-[15px] w-full">
          <strong>{props.name}</strong>
        </div>
        <div className="title text-[15px] w-full">{props.title}</div>
        <div className="team-desc text-center my-6 text-[15px] font-light">
          {props.description}
        </div>
        <AgentsSocialMedia />
      </div>
    </div>
  );
};

export default TeamContentAfter;
