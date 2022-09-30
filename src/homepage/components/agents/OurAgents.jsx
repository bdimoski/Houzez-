import React from "react";

import { ourAgentsData } from "./components/OurAgentsData";

import "./OurAgentsStyle.css";

const OurAgents = () => {
  return (
    <section className="meet-our-agents-section">
      <div className="agents-background-overlay"></div>
      <div className="agents-container">
        <div className="agents-wrap">
          <div className="elementor-agents-wrap">
            <div className="meet-our-agents">
              <div className="title-container">
                <h2 className="agents-title">Meet Our Agents</h2>
                <p className="agents-subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </p>
              </div>
            </div>
            <div className="agent-group">
              {ourAgentsData.map((agent, index) => (
                <div className="agent-info" key={index}>
                  <div className="agent-img">
                    <img
                      src={agent.img}
                      alt="agents"
                      className="agents-image"
                    />
                  </div>
                  <div className="agent-name">{agent.agentName}</div>
                  <div className="agent-company">{agent.agentCompany}</div>
                  <div className="agent-description">
                    {agent.agentDescription}
                  </div>
                  <div className="agents-btn">View Profile</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAgents;
