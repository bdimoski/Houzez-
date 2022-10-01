import React from "react";

import { ContactForm } from "./components/contactForm/ContactForm";
import RenderMap from "./components/google-mapAPI/RenderMap";

import { SectionTop } from "./components/section-top/SectionTop";

const ContactUs = () => {
  return (
    <div>
      <SectionTop />
      <ContactForm />
      <RenderMap />
    </div>
  );
};

export default ContactUs;
