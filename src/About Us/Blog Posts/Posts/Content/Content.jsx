import React from "react";

import ContinueLink from "./Continue Link/ContinueLink";
import DateAndTag from "./Date and Tag/DateAndTag";
import PostInfo from "./Post Informations/PostInfo";
import PostTitle from "./Post Title/PostTitle";

const Content = ({ props }) => {
  return (
    <div className="content flex w-[82%] mx-auto mb-4 mt-2">
      <div className="mx-auto">
        <DateAndTag props={props} />
        <PostTitle props={props} />
        <PostInfo props={props} />
        <ContinueLink props={props} />
      </div>
    </div>
  );
};

export default Content;
