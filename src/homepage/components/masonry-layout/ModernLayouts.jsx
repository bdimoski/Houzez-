import React from "react";

import NoBackgroundCard from "./components/NoBackgroundCard";
import SquareCard from "./components/SquareCard";
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";
import { ModernLayoutData } from "./components/ModernLayoutData";

const ModernLayouts = () => {
  return (
    <section
      className="modern-layout-section"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="element-container"
        style={{
          width: "845px",
          display: "grid",
          gap: "0 10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
          gridAutoRows: "10px",
        }}
      >
        {ModernLayoutData.map((cardData, i) => {
          const { cardType } = cardData;

          if (cardType === "no-background") {
            const { title, subtitle } = cardData;
            return (
              <NoBackgroundCard key={i} title={title} subtitle={subtitle} />
            );
          } else if (cardType === "square") {
            const { title, subtitle, image, textLink, icon } = cardData;
            return (
              <SquareCard
                key={i}
                title={title}
                subtitle={subtitle}
                image={image}
                textLink={textLink}
                icon={icon}
              />
            );
          } else if (cardType === "vertical") {
            const { title, subtitle, image, textLink, icon } = cardData;
            return (
              <VerticalCard
                key={i}
                title={title}
                subtitle={subtitle}
                image={image}
                textLink={textLink}
                icon={icon}
              />
            );
          } else if (cardType === "horizontal") {
            const { title, subtitle, image, textLink, icon } = cardData;
            return (
              <HorizontalCard
                key={i}
                title={title}
                subtitle={subtitle}
                image={image}
                textLink={textLink}
                icon={icon}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default ModernLayouts;
