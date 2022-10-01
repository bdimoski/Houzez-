import React from "react";

const Image = ({ props }) => {
  return (
    <div className="flex pt-2.5 px-2.5 pb-0 cursor-pointer">
      <div className="hover-effect bg-cover bg-no-repeat bg-center relative ">
        <img src={props.postImage} alt="post1" className="rounded-sm" />
      </div>
    </div>
  );
};

export default Image;
