import React from "react";
import "./IT.css";
import Header from "../../../Components/Header/Header";
import temporaryStaffingItImg from "../../../Assets/Images/temporaryStaffingItImg.png";
import Footer from "../../../Components/Footer/Footer";
import BelowProductGrid from "../../../Components/BelowContentGrid/BelowProductGrid";
import TemporaryStuffingHeading from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import TemporaryStaffingAboveFooter from "../../../Components/TemporaryStaffingFunction/TemporaryStaffingAboveFooter/TemporaryStaffingAboveFooter";
import TemporaryStuffingImgSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingImgSection/TemporaryStuffingImgSection";
import TemporaryStuffingParaSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingParaSection/TemporaryStuffingParaSection";

const IT = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="itContainer wrapper">
        <TemporaryStuffingHeading
          h1={["Temporary IT Technology Staffing Services"]}
          h3={[
            "Hire The Best IT Technology Staff On The Market For Your Team! We Staff All India Locations and Remote Roles!",
          ]}
        />

        <div className="itContentContainer">
          <div className="itLeftContainer">
            <TemporaryStuffingParaSection
              paragraph1="For a decade and a half, our local tech recruiting teams have connected skilled IT technology talent with amazing companies and brands all over the US. We are happy to provide award-winning IT Technology staffing services for all of our clients nationwide. Our team of industry-expert recruiters have great success for one simple reason: We love what we do."
              paragraph2="Our firm is a socially conscious staffing and recruiting firm that truly believes in making a positive impact in the communities we support and, via our staffing mission, help our clients and candidates excel professionally. We employ expert recruiters who can customize our process to meet the strategic hiring needs of your organization."
              secondPara="When it comes to your IT technology staffing needs, our award-winning recruiting team has you covered. Your organization relies on technology to operate. Everything from computer systems to hardware needs to be running at their maximum efficiency. The importance of having qualified technology staff has never been higher, especially when you need staffing solutions quickly to stay on track. We have a diverse pool of nearly 14 million highly qualified candidate options and a nationwide footprint, and our regional offices can help your organization hire the talent you need for any state in the US. See the difference Tech Sierra Technology can make and contact us today to get started!"
            />
          </div>
          <div className="itRightContainer">
            <TemporaryStuffingImgSection
              buttonText={["We’ll Find the Best Person For the Job"]}
              btnText={["Request Staff"]}
              buttonLink="/contact-us"
              imageUrl={temporaryStaffingItImg}
            />
          </div>
        </div>

        <BelowProductGrid
          itRoles={[
            "Computer Support Specialist",
            "Network Specialist",
            "Computer Systems Manager",
            "Information Systems Support Specialist",
            "Database Administrator",
            "Network Architect",
            "Information Security Specialist",
            "Other IT Technology Roles!",
          ]}
          h4={[
            "OUR TEAM OF DIVERSE CANDIDATES CAN FILL THE FOLLOWING IT TECHNOLOGY ROLES:",
          ]}
        />
        <TemporaryStaffingAboveFooter
          bottomLinks={[
            { text: "Request Staff", url: "#FIXME1" },
            { text: "Search Open Positions", url: "#FIXME2" },
            { text: "Our Clients", url: "#FIXME3" },
            { text: "Why Choose TeachSierra", url: "#FIXME4" },
          ]}
          h2={["Learn More About TechSierra"]}
        />
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
      </div>
      <Footer />
    </div>
  );
};

export default IT;
