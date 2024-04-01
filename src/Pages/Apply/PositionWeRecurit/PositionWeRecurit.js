import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import TemporaryStuffingHeading from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import TemporaryStuffingParaSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingParaSection/TemporaryStuffingParaSection";
import TemporaryStuffingImgSection from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingImgSection/TemporaryStuffingImgSection";
import TemporaryStaffingAboveFooter from "../../../Components/TemporaryStaffingFunction/TemporaryStaffingAboveFooter/TemporaryStaffingAboveFooter";
import "./PositionWeRecurit.css";
import StartupImgOne from "../../../Assets/Images/Apply/jobseeker-additional-resources.jpg"

const PositionWeRecurit = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="itContainer wrapper pwr-ctn">
        <TemporaryStuffingHeading
          h1={[
            "We Recruit Premier Technology Talent For Growing Brands, Services, and Technology Employers",
          ]}
          h3={["Exceptional talent and technology opportunities await."]}
        />
        <div className="itContentContainer">
          <div className="itLeftContainer">
            <TemporaryStuffingParaSection
              MainHeading=""
              paragraph1="TechSierra Technology Staffing is an award-winning national technology recruiting, creative, and IT staffing firm. Our expert technology recruitment team always invests the time required to get to know our people so that we can make incredible talent matches.  It is always our focus and goal to facilitate a perfect fit between our candidates’ talents and our clients’ opportunities. As a socially conscious technology recruiting firm and leader in our industry, we aim to provide exceptional service to both our clients and candidates at all times. Additionally, our nationwide regional headquarters service all 50 states and recruit for a wide variety of technology, software engineering, creative marketing, and cutting-edge emerging technologies."
            />
            <div>
              <TemporaryStuffingParaSection
                MainHeading="For Technology Clients Seeking to Hire, We:"
                paragraph1=""
              />
              <ul>
                <li>
                  <p>
                    Stand ready to connect you to our incredible national and
                    local networks of technology professionals.
                  </p>
                </li>
                <li>
                  <p>
                    Can immediately assist you, engage the search quickly, and
                    are happy to meet and exceed your hiring timeline and
                    requirements.
                  </p>
                </li>
                <li>
                  <p>
                    Encourage you to explore more about our award-winning
                    technology recruiting firm in the following pages: Why
                    Choose TechSierra, Our Clients, and Our Mission & Values.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <TemporaryStuffingParaSection
                MainHeading="For Qualified Candidates During Our Search Process, We:"
                paragraph1=""
              />
              <ul>
                <li>
                  <p>
                    Aim to present multiple IT/Tech job opportunities that align
                    with your background.
                  </p>
                </li>
                <li>
                  <p>
                    Help you find the right opportunity and working environment.
                  </p>
                </li>
                <li>
                  <p>
                    Prepare you for a successful interview with tips and advice.
                  </p>
                </li>
                <li>
                  <p>Negotiate the salary and benefits on your behalf.</p>
                </li>
                <li>
                  <p>
                    Explain the opportunity, employer goals, and likes/dislikes.
                  </p>
                </li>
                <li>
                  <p>Support your transition into your new role/start date.</p>
                </li>
                <li>
                  <p>
                    Stay in touch with you even after hire, acting on your
                    behalf as your personal recruiting partner
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <TemporaryStuffingParaSection
                MainHeading="The Benefits Your TechSierra Technology Staffing Recruiter May Connect You with Can Include:"
                paragraph1=""
              />
              <ul>
                <li>
                  <p>Generous compensation packages (hourly or annual).</p>
                </li>
                <li>
                  <p>
                    Major medical, vision, and dental insurance packages for
                    permanent positions.
                  </p>
                </li>
                <li>
                  <p>Sick, holiday, and/or vacation pay.</p>
                </li>
                <li>
                  <p>Relocation assistance.</p>
                </li>
                <li>
                  <p>Possible stock options at our startup clients.</p>
                </li>
                <li>
                  <p>
                    401k, bonus plans, signing bonuses, and/or commuter
                    benefits.
                  </p>
                </li>
                <li>
                  <p>A competitive raise from your current salary.</p>
                </li>
                <li>
                  <p>
                    A professional and efficient pathway to meet hard-to-reach
                    top employers.
                  </p>
                </li>
                <li>
                  <p>A job you will love!</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="itRightContainer">
            <TemporaryStuffingImgSection
              buttonText={["Find the Best Leader"]}
              btnText={["Apply Online"]}
              buttonLink="/contact-us"
              imageUrl={StartupImgOne}
            />
            <TemporaryStuffingImgSection
              buttonText={["Hire the Best Tech Professionals"]}
              btnText={["Requesting Staff"]}
              buttonLink="/contact-us"
              // imageUrl={StartupImgOne}
            />
          </div>
        </div>
        <div className="pwr-btm-ctn">
          <h2 className="pwr-btm-heading">Tech Jobs Available Through TechSierra</h2>
          <div className="pwr-btm-lists">

          <div>
            <h4>Technology Executive Leadership</h4>
            <ul>
              <li>Chief Executive Officer (CEO)</li>
              <li>Chief Technical Officer (CTO)</li>
              <li>Chief Information Officer (CIO)</li>
              <li>VP of Engineering (VP)</li>
              <li>VP of Technology (VP)</li>
              <li>Security Officer (CISO)</li>
              <li>Chief Product Officer (CPO)</li>
              <li>Digital Officers (CDO)</li>
            </ul>
          </div>
          <div>
            <h4>
              IT: Systems, Security, Data & Networking (Permanent Placement &
              Contract)
            </h4>
            <ul>
              <li>Director of IT</li>
              <li>IT Manager</li>
              <li>Business Intelligence Analyst</li>
              <li>Database Administrator</li>
              <li>Data Analyst</li>
              <li>HelpDesk – Specialist, Supervisor</li>
              <li>Network Administrator</li>
              <li>IT Support</li>
              <li>Systems Engineer</li>
              <li>Data Scientist</li>
              <li>Network Engineer</li>
            </ul>
          </div>
          <div>
            <h4>Creative: Marketing & Design (Contract & Direct Hire)</h4>
            <ul>
              <li>Digital Designer / Producer</li>
              <li>Graphic Designer</li>
              <li>Product Manager</li>
              <li>Project Manager</li>
              <li>SEO Analyst</li>
              <li>Marketing Specialist/Manager</li>
              <li>Art Director</li>
              <li>Creative Director</li>
              <li>Technical Writers</li>
            </ul>
          </div>
          <div>
            <h4>Software & Engineering (Permanent Placement & Contract)</h4>
            <ul>
              <li>Engineering Manager</li>
              <li>Software Engineers & Developer</li>
              <li>Full-Stack Software Engineer/Developer</li>
              <li>DevOps Engineer</li>
              <li>Machine Learning Engineer</li>
              <li>Backend/Frontend Engineer</li>
              <li>Data Engineer</li>
              <li>Security Engineer</li>
              <li>Cloud Engineer</li>
              <li>Architect</li>
              <li>Mobile Developer</li>
              <li>Product Developer</li>
              <li>UI/UX Designer</li>
            </ul>
          </div>
          <div>
            <h4>Trending Skills:</h4>
            <ul>
              <li>Office 365</li>
              <li>Remote Desktop</li>
              <li>Citrix</li>
              <li>Active Directory</li>
              <li>Routing/Switching/Firewall Configuration</li>
              <li>PowerShell</li>
              <li>Onboarding</li>
              <li>Ticketing Systems</li>
              <li>CCISP certification</li>
              <li>CCNA certification</li>
            </ul>
          </div>

          <div>
            <h4>Trending Skills:</h4>

            <ul>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Sketch</li>
              <li>Adobe</li>
              <li>Copywriting</li>
            </ul>
          </div>

          <div>
            <h4>Trending Skills:</h4>

            <ul>
              <li>Spark</li>
              <li>Scala</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>.NET</li>
              <li>Cloud: AWS, G-Cloud, Azure</li>
              <li>Distributed Systems</li>
            </ul>
          </div>
          </div>

        </div>
        <div className="pwr-above-footer">

        <TemporaryStaffingAboveFooter 
          bottomLinks={[
            { text: "apply with us", url: "#FIXME1" },
            { text: "view our open positions", url: "#FIXME2" },
            { text: "interview tips", url: "#FIXME3" },
          ]}
          h2={["More Information"]}
        />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PositionWeRecurit;
