import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import TemporaryStuffingHeading from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import TemporaryStuffingParaSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingParaSection/TemporaryStuffingParaSection";
import TemporaryStuffingImgSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingImgSection/TemporaryStuffingImgSection";
import TemporaryStaffingAboveFooter from "../../../Components/TemporaryStaffingFunction/TemporaryStaffingAboveFooter/TemporaryStaffingAboveFooter";
import TemporaryStaffingLists from "../../../Components/TemporaryStaffingFunction/TemporaryStaffingLists/TemporaryStaffingLists";
import "./StartUp.css";
import StartupImgOne from "../../../Assets/Images/StartUpPage/ImageOne.jpg";
import StartupImgTwo from "../../../Assets/Images/StartUpPage/ImageTwo.jpg";
const Startup = () => {
  return (
    <div className="startup-container">
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="itContainer wrapper startUp-ctn">
        <TemporaryStuffingHeading
          h1={["Award-Winning Startup Staffing Agency for All India Locations"]}
          h3={[
            "Where innovation meets talent: your Startup’s staffing solution. Nationally recognized, Tech Sierra Technology provides top staffing services for Startups.",
          ]}
        />

        <div className="itContentContainer">
          <div className="itLeftContainer">
            <TemporaryStuffingParaSection
              MainHeading="Startup Staffing Experts"
              paragraph1="At Tech Sierra Technology, we are masters of the startup staffing game. We live and breathe tech, and we know exactly what it takes to find the perfect match for your growing business. With our insider knowledge of the constantly changing technology world, we are the ultimate matchmakers, connecting you with top-notch talent that will skyrocket your innovation, growth, and overall success. Our unrivaled commitment to excellence and our vast network of highly-qualified professionals make us the dream team for startups in search of extraordinary staffing solutions. With national locations throughout the country and an award-winning team, we make it easy for you to level up your team and company."
              h2={["Why Choose Tech Sierra Technology?"]}
              paragraph2=""
              secondPara="We understand that finding the right talent is crucial for startups to thrive in the competitive tech industry. We offer several compelling reasons to partner with us:"
            />
            <ol className="startUp-lists">
              <li>
                <TemporaryStaffingLists
                  subTitle="Expertise"
                  subPara="Our team of recruiters has comprehensive knowledge of the tech industry. We stay updated on the latest trends and developments, allowing us to identify candidates who possess the required skills, experience, and cultural compatibility to succeed in your startup environment."
                />
              </li>

              <li>
                <TemporaryStaffingLists
                  subTitle="Quality Candidates"
                  subPara="We have a rigorous screening and evaluation process to ensure we present you with the most qualified candidates. Our extensive network and industry connections enable us to attract highly skilled professionals who are passionate about contributing to tech startups."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Tailored Solutions"
                  subPara="We recognize that every startup has unique requirements. We work closely with you to understand your company’s culture, values, and organizational needs. This enables us to customize our approach and deliver staffing solutions that align with your business goals."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Speed and Efficiency"
                  subPara="We know things move quickly, and we understand the urgency of filling key positions within startups. Our streamlined processes and proactive approach enable us to identify and present qualified candidates quickly, saving you time and effort in the hiring process."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Flexible Staffing Options"
                  subPara="Whether you require temporary, contract-to-hire, or direct-hire placements, we offer flexible staffing solutions to meet your needs. We adapt our services to accommodate the ever-changing demands of your startup."
                />
              </li>
            </ol>
          </div>
          <div className="itRightContainer">
            <TemporaryStuffingImgSection
              buttonText={["Find Quality Candidates For Your Startup!"]}
              btnText={["Request Staff"]}
              buttonLink="/contact-us"
              imageUrl={StartupImgOne}
            />
          </div>
        </div>
        <div className="itContentContainer startUpbtn-left">
          <div className="itRightContainer">
            <TemporaryStuffingImgSection imageUrl={StartupImgTwo} />
          </div>
          <div className="itLeftContainer">
            <TemporaryStuffingParaSection
              // MainHeading="Startup Staffing Experts"
              // paragraph1="At Tech Sierra Technology, we are masters of the startup staffing game. We live and breathe tech, and we know exactly what it takes to find the perfect match for your growing business. With our insider knowledge of the constantly changing technology world, we are the ultimate matchmakers, connecting you with top-notch talent that will skyrocket your innovation, growth, and overall success. Our unrivaled commitment to excellence and our vast network of highly-qualified professionals make us the dream team for startups in search of extraordinary staffing solutions. With national locations throughout the country and an award-winning team, we make it easy for you to level up your team and company."
              h2={["Types of Startups We Serve"]}
              paragraph2=""
              secondPara="Tech Sierra Technology provides services for tech startups in a wide range of sectors. Some of the startup types we specialize in include:"
            />
            <ol className="startUp-lists">
              <li>
                <TemporaryStaffingLists
                  subTitle="Software Development Startups"
                  subPara="We have extensive experience in staffing startups focused on software development. This includes web and mobile application development, software engineering, front-end and back-end development, and more."
                />
              </li>

              <li>
                <TemporaryStaffingLists
                  subTitle="Artificial Intelligence (AI) and Machine Learning (ML) Startups"
                  subPara=" As AI and ML continue to transform industries, we provide staffing solutions for startups working on cutting-edge technologies in these fields. This includes roles such as AI engineers, data scientists, machine learning specialists, and natural language processing experts."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="E-commerce Startups"
                  subPara="We understand the unique staffing needs of e-commerce startups, from building robust platforms to managing inventory and logistics. Our expertise includes staffing for roles like e-commerce managers, web designers, UX/UI specialists, and digital marketers."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Cybersecurity Startups"
                  subPara="Security is paramount in today’s digital landscape, and we excel in sourcing talent for cybersecurity startups. Our network includes professionals skilled in network security, ethical hacking, information security analysis, and more."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Healthtech and Medtech Startups"
                  subPara="Startups innovating in the healthcare and medical technology sectors require specialized talent. We can assist you in finding professionals experienced in healthtech software development, medical device engineering, telemedicine, and health informatics."
                />
              </li>
              <li>
                <TemporaryStaffingLists
                  subTitle="Blockchain and Cryptocurrency Startups"
                  subPara="For startups venturing into the blockchain and cryptocurrency space, we provide staffing solutions for blockchain developers, smart contract engineers, cryptocurrency analysts, and more!"
                />
              </li>
            </ol>
            <p>
              These are just a few examples of the startup types we serve.
              Regardless of your industry or niche, Tech Sierra Technology has
              the expertise to connect you with the talented individuals who can
              drive your startup’s success.
            </p>
            <a href="#FIXME" target="_self" class="startUp-las">
              Launch A Search
            </a>
          </div>
        </div>

        <TemporaryStaffingAboveFooter
          bottomLinks={[
            { text: "REQUEST A STAFF | START A SEARCH", url: "#FIXME1" },
            { text: "Tech leadership roles", url: "#FIXME2" },
            { text: "our proven appraoch", url: "#FIXME3" },
          ]}
          h2={["Learn More"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Startup;
