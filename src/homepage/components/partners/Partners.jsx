import React from "react";

import { partnersData } from "./components/partnersData";
import "./PartnersStyle.css";

export const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-row">
          {partnersData.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner.partner} alt={partner.partnerAlt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
