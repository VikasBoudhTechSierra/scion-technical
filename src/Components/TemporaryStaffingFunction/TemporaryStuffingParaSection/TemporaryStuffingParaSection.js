import React from "react";

const TemporaryStuffingParaSection = ({
  paragraph1,
  paragraph2,
  secondPara,
  h2,
  MainHeading
}) => {
  return (
    <>
      <h2>{MainHeading}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <div className="secondPara">
        <h2>{h2}</h2>
        {secondPara}
      </div>
    </>
  );
};

export default TemporaryStuffingParaSection;
