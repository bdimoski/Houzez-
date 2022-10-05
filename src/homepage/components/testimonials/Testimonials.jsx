import React from "react";
import WhiteSpace from "../../../About Us/Blog Posts/White Space/WhiteSpace";

import { testimonialsData } from "./components/testimonialsData";
import "./TestimonialsStyle.css";

const Testimonials = () => {
  return (
    <section className="testimonials flex">
      <div className="testimonials-container mx-auto">
        <div className="testimonials-title-subtitle">
          <div className="testimonials-title text-center">
            <h2 className="s-title">Testimonials</h2>
          </div>
          <div className="testimonials-subtitle text-center">
            <p className="s-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="testimonials-items md:flex md:flex-row">
          {testimonialsData.map((item, index) => (
            <div className="t-agent" key={index}>
              <div className="t-item">
                <div className="t-icon">{item.type}</div>
                <div className="t-description">{item.description}</div>
                <div className="t-img-name">
                  <div className="t-thub">
                    <img src={item.img} alt="item-name" />
                  </div>
                  <div className="t-info">
                    by <span>{item.author}</span>
                    <br />
                    <em> {item.position}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <WhiteSpace />
      </div>
    </section>
  );
};

export default Testimonials;
