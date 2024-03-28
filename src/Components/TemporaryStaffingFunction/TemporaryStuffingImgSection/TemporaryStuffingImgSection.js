import React from "react";

const TemporaryStuffingImgSection = ({
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
  btnText,
}) => {
  return (
    <>
      <div className="button-container">
        <span className="primary-button">{buttonText}</span>
        <p>
          <a className="employer_cta_button" href={buttonLink}>
            {btnText}
          </a>
        </p>
      </div>

      <img className="mission-image" src={imageUrl} alt={imageAlt} />
    </>
  );
};

export default TemporaryStuffingImgSection;
