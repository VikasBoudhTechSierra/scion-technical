/* eslint-disable react/style-prop-object */
import React from "react";
import "./Footer.css";
import ASA_logo from "../../Assets/Images/asa_logo.png";
import BS_blue from "../../Assets/Images/best_staffing blue.png";
import BS_green from "../../Assets/Images/best_staffing green.png";
import Inc from "../../Assets/Images/Inc-5000.png";
import Business_Times from "../../Assets/Images/The-Business-Times-logo.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="Footer_Container">
      <div className="footer_top_holder">
        <div className="top-wrapper">
          <div className="left-div">
            <img src={ASA_logo} alt="" />
          </div>
          <div className="middle-div">
            <p>(888) 487 - 8850</p>
            <br />
            <p>Join Our Team</p>
            <br />
            <p> Our Awards and Recognition</p>
            <br />
            <p>Our Office/ Contact Us</p>
            <br />
            <p>Privacy Policy/ Terms of Service</p>
            <br />
            <p className="sitemap">Sitemap</p>
            <br />
            <div className="social-icons">
              <div>
                <BiLogoLinkedin size={30}/>{" "}
              </div>
              <div>
                <BsTwitter size={30}/>{" "}
              </div>
              <div>
                <BiLogoFacebook size={30}/>{" "}
              </div>
            </div>
          </div>
          <div className="right-div">
            <img src={BS_blue} alt="" />
            <img src={BS_green} alt="" />
            <img src={Inc} alt="" />
            <div>
              <img src={Business_Times} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_holder">
        <p>
          © 2024 techsierra Staffing, Inc. All rights reserved. Website by Ink
          Stained Creative
        </p>
      </div>
    </div>
  );
};

export default Footer;
