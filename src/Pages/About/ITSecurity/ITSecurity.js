import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import TemporaryStuffingHeading from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import TemporaryStuffingParaSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingParaSection/TemporaryStuffingParaSection";
import TemporaryStuffingImgSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingImgSection/TemporaryStuffingImgSection";
import BelowProductGrid from "../../../Components/BelowContentGrid/BelowProductGrid";
import TemporaryStaffingAboveFooter from "../../../Components/TemporaryStaffingFunction/TemporaryStaffingAboveFooter/TemporaryStaffingAboveFooter";
import temporaryStaffingItSecurityImg from "../../../Assets/Images/it-security.png";

const ITSecurity = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="itContainer wrapper">
        <TemporaryStuffingHeading
          h1={["Temporary IT Security Staffing Services"]}
          h3={[
            " Hire The Best IT Security Staff On The Market For Your Team! We Staff All US Locations and Remote Roles!",
          ]}
        />

        <div className="itContentContainer">
          <div className="itLeftContainer">
            <TemporaryStuffingParaSection
              paragraph1="For a decade and a half, our local tech recruiting teams have connected skilled technology IT security talent with amazing companies and brands all over the US. We are happy to provide award-winning services for all of our clients nationwide. Our team of industry-expert recruiters have great success for one simple reason: We love what we do."
              h2={[
                "Contract IT Security Staffing for all US Locations and Remote!",
              ]}
              paragraph2="Our firm is a socially conscious staffing and recruiting firm that truly believes in making a positive impact in the communities we support and, via our staffing mission, help our clients and candidates excel professionally. We employ expert recruiters who can customize our process to meet the strategic hiring needs of your organization."
              secondPara="When it comes to your IT security staffing needs, our award-winning recruiting team has you covered. In today’s cyber world, security is more important than ever. Keeping your company’s information and networks safe is crucial to long-lasting success. We have a diverse pool of nearly 14 million highly qualified candidate options and a nationwide footprint, and our regional offices can help your organization hire the talent you need for any state in the US. See the difference Scion Technology can make and contact us today to get started!"
            />
          </div>
          <div className="itRightContainer">
            <TemporaryStuffingImgSection
              buttonText={["We’ll Find the Best Person For the Job"]}
              btnText={["Request Staff"]}
              buttonLink="/contact-us"
              imageUrl={temporaryStaffingItSecurityImg}
            />
          </div>
        </div>

        <BelowProductGrid
          itRoles={[
            "Application Security Engineer",
            "Network Security Engineer",
            "Security Administrator",
            "Security Analyst",
            "Security Architect",
            "Security Specialist",
            "Systems Security Specialist",
            "Other IT Security Roles!",
          ]}
          h4={[
            "OUR TEAM OF DIVERSE CANDIDATES CAN FILL THE FOLLOWING IT TECHNOLOGY ROLES:",
          ]}
        />

        <div className="belowGridContent">
          Our dedicated recruitment team is prepared to provide you with bright,
          extraordinary, and experienced IT security staff members to ensure
          your organization is thriving. Our reach across the country is
          immense. We understand that you need a staffing partner that is
          dependable and works within your timeline, regardless of your
          location. That’s why we’ve built a large team of regional and remote
          offices that have established strong relationships with talent across
          the nation.
        </div>
        <h5>
          FOR IMMEDIATE IT, TECHNOLOGY, AND ENGINEERING STAFFING START A SEARCH
          HERE NOW OR CALL (888) 487-8850.
        </h5>
        <TemporaryStaffingAboveFooter
          bottomLinks={[
            { text: "SUBMIT A STAFFING REQUEST", url: "#FIXME1" },
            { text: "Sirect Hire Technology & It Staffing", url: "#FIXME2" },
            { text: "It & Technology Leadership Search", url: "#FIXME3" },
            { text: "Creative Staffing Services", url: "#FIXME4" },
          ]}
          h2={["Learn More About TechSierra"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ITSecurity;
