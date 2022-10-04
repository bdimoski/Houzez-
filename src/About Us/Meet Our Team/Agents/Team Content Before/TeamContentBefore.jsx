import React from "react";

const TeamContentBefore = ({ props }) => {
  return (
    <div className="team-content-before p-6 absolute bottom-0 left-0 w-full text-center text-white">
      <div className="name">
        <strong>{props.name}</strong>
      </div>
      <div className="title font-light text-[15px]"> {props.title}</div>
    </div>
  );
};

export default TeamContentBefore;
