import React from "react";

import "./FormStyle.css";

export const Form = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-wrapper">
        <div className="contact-form-elements">
          <div className="contact-wrap">
            <div className="contact-text">
              <div className="contact-container">
                <p>
                  Design your custom contact forms with this Houzez Elementor
                  custom widget and connect your leads with the integrated
                  Houzez CRM.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-elements">
            <div className="contact-elements-container">
              <div className="form-element-container">
                <form className="form-class">
                  <div className="form-divs">
                    <div className="first-name">
                      <label htmlFor="firstName">
                        First Name <span className="red-span">*</span>
                      </label>
                      <input
                        type="text"
                        className="inputs"
                        name="first_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="last-name">
                      <label htmlFor="lastName">
                        Last Name <span className="red-span">*</span>
                      </label>
                      <input
                        type="text"
                        className="inputs"
                        name="Last_name"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div className="email elementor-c">
                      <label htmlFor="email">
                        Email <span className="red-span">*</span>
                      </label>
                      <input
                        type="email"
                        className="inputs"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="message elementor-c">
                      <label htmlFor="message">
                        Message <span className="red-span">*</span>
                      </label>
                      <textarea
                        name="message"
                        className="inputs"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="contact-form-btn elementor-c">
                      <button type="submit" className="contact-form-submit-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
