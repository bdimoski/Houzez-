import React from "react";

const ContinueLink = ({ props }) => {
  return (
    <div className="link text-[13px] leading-relaxed font-medium text-[#00aeef]">
      <a href="/">{props.link}</a>
    </div>
  );
};

export default ContinueLink;
