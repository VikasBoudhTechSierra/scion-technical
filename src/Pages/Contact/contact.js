import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TemporaryStaffingAboveFooter from "../../Components/TemporaryStaffingFunction/TemporaryStaffingAboveFooter/TemporaryStaffingAboveFooter";
import "./contact.css";
import ContactMap from "../../Assets/Images/Contact/contact-maps.png";
const Contact = () => {
  return (
    <div className="contact-ctn">
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="wrapper contact-header">
        <h1>Contact Us</h1>
        <h2>
          Technology & IT Temporary Staffing Agency, Direct-Hire Recruitment &
          Executive Search Firm
        </h2>
      </div>
      <div className="contact-main">
        <div className="contact-main-header">
          <h2>We recruit for all U.S. cities and remote positions.</h2>
        </div>
        <div className="contact-main--outer-header">
          <div className="wrapper contact-main-below-header">
            <div className="contact-address-maps">
              <h3>
                National Technology & IT Staffing For All U.S. Cities and
                Locations
              </h3>

              <ul>
                <li>
                  <span>west: </span>
                  <p>
                    San Francisco, CA; Los Angeles, CA; Portland, OR; Seattle,
                    WA; Las Vegas, NV and other locations.
                  </p>
                </li>
                <li>
                  <span>MOUNTAIN: </span>
                  <p>
                    Phoenix, AZ; Denver, CO; Salt Lake City, UT and other
                    locations.
                  </p>
                </li>
                <li>
                  <span>MIDWEST: </span>
                  <p>
                    Cincinnati, OH; Kansas City, MO; Chicago, IL; Detroit, MI;
                    Appleton, WI; Minneapolis, MN; St. Louis, MO and other
                    locations.
                  </p>
                </li>
                <li>
                  <span>SOUTH: </span>
                  <p>
                    Dallas/Austin/Houston/San Antonio, TX; Atlanta, GA; Miami,
                    FL; Raleigh-Durham/Charlotte, NC and other locations.
                  </p>
                </li>
                <li>
                  <span>EAST: </span>
                  <p>
                    {" "}
                    New York, NY; New Jersey, NJ; Stamford, CT; Washington, DC;
                    Boston, MA; Philadelphia, PA
                  </p>
                </li>
                <li>
                  <span>NATIONAL & REMOTE: </span>
                  <p> All US cites and locations</p>
                </li>
              </ul>
            </div>
            <figure>
              <img src={ContactMap} alt="Map" />
            </figure>
          </div>
        </div>
        <div className="contact-main-address-section">
          <div className="contact-main-btn-section">
            <h3>
              National Technology, IT, & Engineering Recruiting All U.S.
              Locations and Regions
            </h3>
            <div className="contact-two-btns">
              <a href="#FIXME" title="Request staff">
                request staff
              </a>
              <a href="#FIXME" title="Search Our Jobs">
                search our jobs
              </a>
            </div>
          </div>
          <div className="wrapper contact-name-locations">
            <h3>All U.S. Locations</h3>
            <p>Temporary Staffing, Direct Hire & Executive Search</p>
            <span>Voice: (888) 487-8850</span>
            <a href="#FIXME" title="Hire Staff">
              hire staff
            </a>
            <a href="#FIXME" title="Apply For Jobs">
              apply for jobs
            </a>
          </div>
          <ul className="wrapper contact-main-all-locations">
            <li>
              <h3>San Francisco, CA</h3>
              <address>
                <span>95 Third Street, 2nd Floor</span>
                <span>San Francisco, CA 94103</span>
                <span>Voice: (415) 392-7500</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
            <li>
              <h3>New York, NY</h3>
              <address>
                <span>85 Broad St</span>
                <span>New York, NY 10004</span>
                <span>Voice: (917) 525-5044</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
            <li>
              <h3>Denver, CO</h3>
              <address>
                <span>250 Fillmore St, Suite 150</span>
                <span>Denver, CO 80206</span>
                <span>Voice: (303) 800-1052</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
            <li>
              <h3>Los Angeles, CA</h3>
              <address>
                <span>515 South Flower St, 18th Floor</span>
                <span>Los Angeles, CA 90071</span>
                <span>Voice: (213) 314-0200</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
            <li>
              <h3>Austin, TX</h3>
              <address>
                <span>8120 Research Blvd Suite 105 #275</span>
                <span>Austin, TX 78758</span>
                <span>Voice: (512) 291-3199</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
            <li>
              <h3>Chicago, IL</h3>
              <address>
                <span>159 N Sangamon St</span>
                <span>Chicago, IL 60607</span>
                <span>Voice: (312) 620-5466</span>
                <a href="#FIXME" title="Learn More">
                  learn more
                </a>
              </address>
            </li>
          </ul>
        </div>
        <div className="contact-above-footer">
          <TemporaryStaffingAboveFooter
            bottomLinks={[
              { text: "request technical staff", url: "#FIXME1" },
              { text: "award-winning service", url: "#FIXME2" },
              { text: "positions we recruit", url: "#FIXME3" },
            ]}
            h2={["Learn More About TechSierra"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
