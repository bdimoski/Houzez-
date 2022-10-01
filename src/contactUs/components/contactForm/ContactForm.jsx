import React from "react";

import Contact from "./components/contact/Contact";
import { Form } from "./components/form/Form";

import "./ContactFormStyle.css";

export const ContactForm = () => {
  return (
    <section className="contactForm">
      <div className="contactform-container">
        <div className="contactform-row">
          <Form />
          <Contact />
        </div>
      </div>
    </section>
  );
};
