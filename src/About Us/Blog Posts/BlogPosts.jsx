import React from "react";

import Posts from "./Posts/Posts";
import Title from "./Title/Title";
import WhiteSpace from "./White Space/WhiteSpace";

const BlogPosts = () => {
  return (
    <div className="w-full">
      <div className="md:max-w-[1240px] md:mx-auto md:relative md:flex">
        <div className="md:w-full p-2.5 md:flex flex-wrap">
          <WhiteSpace />
          <Title />
          <Posts />
          <WhiteSpace />
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
