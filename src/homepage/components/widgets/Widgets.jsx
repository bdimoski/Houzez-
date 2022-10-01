import React from "react";

import { widgetData } from "./components/WidgetData";

import "./Widgets.css";

const Widgets = () => {
  return (
    <section className="widget-component">
      <div className="background-overlay"></div>
      <div className="el-shape shape-top" data-negative="false">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
      <div className="widgets-container p-2">
        <div className="widgets-title md:mx-[100px] md:mt-[250px] mt-[150px]">
          <h2 className="widgets-main-title">
            Houzez offers a wide range of drag-and-drop widgets to assist you in
            designing your pages
          </h2>
        </div>
        <div className="widgets-items">
          <div className="widget-cards md:flex md:pb-0 pb-[150px]">
            {widgetData.map((item, index) => (
              <div key={index} className="widget-item w-full">
                <div className="widget-image">
                  <img src={item.img} alt={item.index} />
                </div>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="el-shape shape-bottom" data-negative="false">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Widgets;
