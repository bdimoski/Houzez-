import React from "react";

import Cards from "./components/Cards/Cards";
import ModernLayouts from "./components/masonry-layout/ModernLayouts";
import Widgets from "./components/widgets/Widgets";
import MultipleItemsSlider from "./components/Multiple-items Slider/MultipleItemsSlider";
import CustomForm from "./components/Custom Form/CustomForm";
import GridsWidgets from "./components/Grid Widgets/GridsWidgets";
import OurAgents from "./components/agents/OurAgents";
import Testimonials from "./components/testimonials/Testimonials";
import { Partners } from "./components/partners/Partners";

const HomePage = () => {
  return (
    <div>
      <Cards />
      <MultipleItemsSlider />
      <Widgets />
      <ModernLayouts />
      <CustomForm />
      <GridsWidgets />
      <OurAgents />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default HomePage;
