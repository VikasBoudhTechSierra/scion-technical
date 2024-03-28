import React from "react";
import "./IT.css";
import Header from "../../../Components/Header/Header";
import temporaryStaffingItImg from "../../../Assets/Images/temporaryStaffingItImg.png";
import Footer from "../../../Components/Footer/Footer";

const IT = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="itContainer wrapper">
        <h1>Temporary IT Technology Staffing Services</h1>
        <h3>
          Hire The Best IT Technology Staff On The Market For Your Team! We
          Staff All US Locations and Remote Roles!
        </h3>

        <div className="itContentContainer">
          <div className="itLeftContainer">
            <p>
              For a decade and a half, our local tech recruiting teams have
              connected skilled IT technology talent with amazing companies and
              brands all over the US. We are happy to provide award-winning IT
              Technology staffing services for all of our clients nationwide.
              Our team of industry-expert recruiters have great success for one
              simple reason: We love what we do.
            </p>
            <p>
              Our firm is a socially conscious staffing and recruiting firm that
              truly believes in making a positive impact in the communities we
              support and, via our staffing mission, help our clients and
              candidates excel professionally. We employ expert recruiters who
              can customize our process to meet the strategic hiring needs of
              your organization.
            </p>
            <div className="secondPara">
              <h2>Temporary and Contract IT Technology Staffing Services</h2>
              When it comes to your IT technology staffing needs, our
              award-winning recruiting team has you covered. Your organization
              relies on technology to operate. Everything from computer systems
              to hardware needs to be running at their maximum efficiency. The
              importance of having qualified technology staff has never been
              higher, especially when you need staffing solutions quickly to
              stay on track. We have a diverse pool of nearly 14 million highly
              qualified candidate options and a nationwide footprint, and our
              regional offices can help your organization hire the talent you
              need for any state in the US. See the difference Scion Technology
              can make and contact us today to get started!
            </div>
          </div>
          <div className="itRightContainer">
            <div className="button-container">
              <span className="primary-button">
                We’ll Find the Best Person For the Job
              </span>
              <p>
                <a class="employer_cta_button" href="/contact-us">
                  Request Staff
                </a>
              </p>
            </div>

            <img
              className="mission-image"
              src={temporaryStaffingItImg}
              alt="Diverse group of people with their hands together"
            />
          </div>
        </div>
        <div className="belowContentSection">
          <h4>
            OUR TEAM OF DIVERSE CANDIDATES CAN FILL THE FOLLOWING IT TECHNOLOGY
            ROLES:
          </h4>
          <div className="belowContentGrid">
            <ul className="itContentGridleftUl">
              <li>Computer Support Specialist</li>
              <li>Network Specialist</li>
              <li>Computer Systems Manager</li>
              <li>Information Systems Support Specialist</li>
            </ul>
            <ul className="itContentGridRightUl">
              <li>Database Administrator</li>
              <li>Network Architect</li>
              <li>Information Security Specialist</li>
              <li>Other IT Technology Roles!</li>
            </ul>
          </div>
        </div>
        <div className="belowGridContent">
          Our dedicated staffing team is prepared to provide you with brilliant,
          exceptional, and experienced IT technology staff members to ensure
          your organization is thriving. We provide specialized staffing
          solutions to organizations across the country. We understand that you
          need a trusting and fast staffing partner, regardless of your
          location. That’s why we’ve built a team of regional and remote offices
          that have established great working relationships with talent across
          the nation.
        </div>
        <h5>
          FOR IMMEDIATE IT, TECHNOLOGY, AND ENGINEERING STAFFING START A SEARCH
          HERE NOW OR CALL (888) 487-8850.
        </h5>
        <div class="mission-section-btm-container">
          <h2 class="section-main-title">Learn More About TechSierra</h2>

          <ul className="it-section-btm-links">
            <li>
              <a href="#FIXME">request staff</a>
            </li>
            <li>
              <a href="#FIXME">search open positions</a>
            </li>
            <li>
              <a href="#FIXME">our clients</a>
            </li>
            <li>
              <a href="#FIXME">why choose teachSierra</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IT;
