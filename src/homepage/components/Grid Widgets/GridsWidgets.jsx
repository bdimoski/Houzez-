import React from "react";
import GridImages from "./components/Grid Images/GridImages";
import Title from "./components/Title/Title";
import WhiteSpaceBottom from "./components/White Space Bottom/WhiteSpaceBottom";
import TopWhiteSpace from "./components/White Space Top/TopWhiteSpace";

const GridsWidgets = () => {
  return (
    <section className="GridsWidgets p-[20px]">
      <div>
        <div className="w-full">
          <div className="sectionWrapper w-full">
            <TopWhiteSpace />
            <Title />
            <GridImages />
           <WhiteSpaceBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridsWidgets;
