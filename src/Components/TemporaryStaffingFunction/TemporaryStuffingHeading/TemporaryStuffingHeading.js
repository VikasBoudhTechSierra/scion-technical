import React from "react";
import "./TemporaryStuffingHeading.css";

const TemporaryStuffingHeading = ({ h1, h3 }) => {
  return (
    <div className="temporaryStuffingHeading">
      <h1>{h1}</h1>
      <h3>{h3}</h3>
    </div>
  );
};

export default TemporaryStuffingHeading;
