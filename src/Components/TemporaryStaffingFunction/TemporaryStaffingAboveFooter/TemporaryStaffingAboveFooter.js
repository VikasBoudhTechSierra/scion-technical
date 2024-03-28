import React from "react";
import "./TemporaryStaffingAboveFooter.css";

const TemporaryStaffingAboveFooter = ({ bottomLinks, h2 }) => {
  return (
    <div className="mission-section-btm-container">
      <h2 className="section-main-title">{h2}</h2>
      <ul className="it-section-btm-links">
        {bottomLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemporaryStaffingAboveFooter;
