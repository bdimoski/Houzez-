import React from "react";

const PostInfo = ({ props }) => {
  return (
    <div className="informations">
      <p className="text-[#636363] text-[13px] leading-relaxed pb-2.5 font-light">
        {props.desc}
      </p>
    </div>
  );
};

export default PostInfo;
