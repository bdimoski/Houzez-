import React from "react";

const PostTitle = ({ props }) => {
  return (
    <div className="title mb-2">
      <h2 className="text-[#222222] font-medium leading-snug cursor-pointer">
        {props.title}
      </h2>
    </div>
  );
};

export default PostTitle;
