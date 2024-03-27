import React, { useRef, useEffect } from "react";
import "./TextBox.css";
import { Link } from "react-router-dom";

const TextBox = ({
  wrapperCustom,
  heading,
  paragraphs,
  buttonText,
  buttonLink,
  marginLeft,
  width,
  images,
  backgroundSize,
  headingTwo,
  paragraphPartTwo
}) => {
  // Ref for the background image container
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        const textBoxHeight = backgroundRef.current.offsetHeight;
        const backgroundOffset = (scrollPosition / textBoxHeight) * 100; 
        backgroundRef.current.style.backgroundPosition = `center ${
          -backgroundOffset * 0.2
        }px`; 
      }
    };
  

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <div
      className="textBoxContainer"
      ref={backgroundRef} // Assign ref to the background image container
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: backgroundSize || "auto",
        width: wrapperCustom,
        backgroundAttachment: "fixed"
      }}
    >
      <div
        className="textMain"
        style={{
          marginLeft: marginLeft,
          width: width
        }}
      >
        <h1 className="textBoxHeading">{heading}</h1>
        <div className="textBoxParagraph">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="textBoxPara">
              {paragraph}
            </p>
          ))}
        </div>
        <h1 className="textBoxHeading">{headingTwo}</h1>
        {paragraphPartTwo ? (
          <div className="textBoxParagraph">
            {paragraphPartTwo.map((paragraph, index) => (
              <p key={index} className="textBoxPara">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
        <Link to={buttonLink}>
          <button className="textBoxBtn">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default TextBox;
