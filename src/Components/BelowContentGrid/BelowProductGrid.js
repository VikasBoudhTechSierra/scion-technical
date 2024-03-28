import React from "react";
import "./BelowProductGrid.css";

const BelowProductGrid = ({ itRoles, h4 }) => {
  return (
    <div className="belowContentSection">
      <h4>{h4}</h4>
      <div className="belowContentGrid">
        <ul className="itContentGridleftUl">
          {itRoles
            .slice(0, Math.ceil(itRoles.length / 2))
            .map((role, index) => (
              <li key={index}>{role}</li>
            ))}
        </ul>
        <ul className="itContentGridRightUl">
          {itRoles.slice(Math.ceil(itRoles.length / 2)).map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BelowProductGrid;
