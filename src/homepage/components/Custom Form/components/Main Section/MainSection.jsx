import React from "react";
import FormColumn from "../Form Column/FormColumn";
import TextColumn from "../Text Column/TextColumn";

const MainSection = () => {
  return (
    <div className="content grid md:grid-cols-2 gap-10 w-full grid-cols-1">
      <TextColumn />
      <FormColumn />
    </div>
  );
};

export default MainSection;
