/* eslint-disable react/style-prop-object */
import React from "react";
import "./Footer.css";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="Footer_Container">
      <div className="footer_top_holder">
        <div className="top-wrapper">
          <div className="middle-div">
            <p>(888) 487 - 8850</p>
            <br />
            <p>Join Our Team</p>
            <br />
            <p>Our Office/ Contact Us</p>
            <br />
            <p>Privacy Policy/ Terms of Service</p>
            <br />
            <p className="sitemap">Sitemap</p>
            <br />
            <div className="social-icons">
              <div>
                <BiLogoLinkedin size={30} />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_holder">
        <p>© 2024 Tech Sierra Staffing, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
