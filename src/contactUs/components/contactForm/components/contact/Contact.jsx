import React from "react";

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import { BsSkype } from 'react-icons/bs'

import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact-contact">
      <div className="contact-wrap">
        <div className="contact-widget-wrapper">
          <div className="contact-widget-wrap">
            <div className="contact-widget-container">
              <p className="bold-title">For inquiries contact:</p>
              <p>
                <strong>Amy miller</strong>
                <br />
                Public Relations Manager
                <br />
                774 NE 84th St Miami, FL 33879
                <br />
                amy.miller@houzez.com
              </p>
              <p>
                <strong>Kyle Parker</strong>
                <br />
                Public Relations Associated
                <br />
                774 NE 84th St Miami, FL 33879
                <br />
                kyle.parker@houzez.com
              </p>
            </div>
            <div className="contact-elementor">
              <div className="elementor-widget-container">
                <div className="elementor-text">
                  <p>
                    <strong>Corporate Headquarters</strong>
                    <br />
                    1584 Biscayne Boulevard
                    <br />
                    Miami FL, 33176
                  </p>
                </div>
              </div>
            </div>
            <div className="elementor-icons">
              <div className="elementor-icons-container">
                <div className="elementor-icons links">
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <FaFacebookSquare className="text-[#004274]"/>
                    </a>
                  </span>
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <FaTwitterSquare className="text-[#00AEEF]" />
                    </a>
                  </span>
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <FaYoutubeSquare className="text-[#cd201f]" />
                    </a>
                  </span>
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <FaLinkedin className="text-[#0077b5]"/>
                    </a>
                  </span>
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <FaInstagramSquare className="text-[#262626]"/>
                    </a>
                  </span>
                  <span className="elementor-item">
                    <a href="#" className="icons-links" target="_blank">
                      <BsSkype className="text-[#00aff0]" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
