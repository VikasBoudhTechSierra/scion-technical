import React from "react";
import "./TextBox.css";
import { Link } from "react-router-dom";

const TextBox = ({ heading, paragraphs, buttonText, buttonLink }) => {
  return (
    <div className="textBoxContainer">
      <h1 className="textBoxHeading">{heading}</h1>
      <div className="textBoxParagraph">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="textBoxPara">
            {paragraph}
          </p>
        ))}
      </div>
      <Link>
        <button to={buttonLink} className="textBoxBtn">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default TextBox;
