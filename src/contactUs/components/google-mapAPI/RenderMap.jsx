import React from "react";
import RenderingMap from "./components/RenderingMap";

import "./RenderMapStyle.css";

const RenderMap = () => {
  return (
    <section className="render-map">
      <div className="render-api">
        <div className="api-container">
          <RenderingMap />
          <div className="adress">
            <p>
              <span className="adress-span">Adress: </span>1584 Biscayne Blvd,
              Miami, FL 33132 –{" "}
              <a href="#" className="adress-link">
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenderMap;
