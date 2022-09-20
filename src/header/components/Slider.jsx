import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { BackgroundImg } from "../../assets/Background";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade
        pauseOnHover={false}
        arrows={false}
        duration={8000}
        transitionDuration={1000}
      >
        {BackgroundImg.map((img, index) => {
          return (
            <div key={index} className="imgContainer">
              <img src={img.image} alt={img.desc} className="images" />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slider;
