import React from "react";

import Author from "./Author/Author";
import Content from "./Content/Content";
import Image from "./Image/Image";
import { postData } from "./Data/postData";

const Posts = () => {
  return (
    <div className="md:mt-6 md:w-full flex">
      <div className="md:flex flex-wrap w-full">
        {postData.map((el, index) => (
          <div className="md:w-[25%] p-4" key={index}>
            <Image props={el} />
            <Content props={el} />
            <Author props={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
