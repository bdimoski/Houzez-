import React from "react";

import ButtomSpace from "./components/Bottom Space/ButtomSpace";
import MainSection from "./components/Main Section/MainSection";
import ElShapeTop from "./components/El shape-top/ElShapeTop";
import TopSpace from "./components/Top Space/TopSpace";
import ElShapeBottom from "./components/El shape-bottom/ElShapeBottom";
import "./CustomForm.css";

const CustomForm = () => {
  return (
    <section className="custom_form w-[100%]">
      <div className="background-overlay-custom-form"></div>
      <ElShapeTop />
      <div className="container relative max-w-[1240px] py-0 px-4 m-auto">
        <TopSpace />
        <MainSection />
        <ButtomSpace />
      </div>
      <ElShapeBottom />
    </section>
  );
};

export default CustomForm;
