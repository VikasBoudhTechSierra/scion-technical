import React from "react";
import "./SectionThree.css";
import ImageOne from "../../Assets/Images/EpowerSectionImages/Temporary-IT-Technology-Staffing.png";
import ImageTwo from "../../Assets/Images/EpowerSectionImages/EdTech-blog.png";
import ImageThree from "../../Assets/Images/EpowerSectionImages/Technology-Executive-Search-Services.png";
import ImageFour from "../../Assets/Images/EpowerSectionImages/Online-Courses-blog.png";
const SectionThree = () => {
  return (
    <div className="EmpowerCtn">
      <div className="wrapper">
        <h2>
          Empower your team with cutting-edge IT staffing and tech recruitment
          solutions crafted by industry leaders. Seamlessly integrate top talent
          and unlock long-term success with our tailored tech services.
        </h2>
        <ul className="MainCtn">
          <li>
            <a href="#FIXME">
              <img src={ImageOne} alt="Temporary-IT-Technology-Staffing" />
            </a>
            <a href="#FIXME" className="EmpowerTxt">
              <h3>IT & Engineering Staffing</h3>
              <p>
                Elevate your IT team with skilled contract professionals
                available for long-term tech contracts. Flexible hiring options
                spanning every city in the India and remote.
              </p>
            </a>
          </li>
          <li>
            <a href="#FIXME">
              <img src={ImageTwo} alt="EdTech-blog" />
            </a>
            <a href="#FIXME" className="EmpowerTxt">
              <h3>Local & National IT Recuriting</h3>
              <p>
                National talent solutions for your core technology, engineering,
                and IT needs, spanning individual contributors, managerial, and
                leadership positions.
              </p>
            </a>
          </li>
          <li>
            <a href="#FIXME">
              <img
                src={ImageThree}
                alt="Technology-Executive-Search-Services"
              />
            </a>
            <a href="#FIXME" className="EmpowerTxt">
              <h3>IT & Technology Executive Search Services</h3>
              <p>
                Award-winning technology, engineering, and IT executive search
                services. Premiere executive talent for expanding corporations,
                startups, brands, and organizations nationwide.
              </p>
            </a>
          </li>
          <li>
            <a href="#FIXME">
              <img src={ImageFour} alt="Online-Courses-blog" />
            </a>
            <a href="#FIXME" className="EmpowerTxt">
              <h3>Remote & Onsite Technology Staff</h3>
              <p>
                From engineering, software, IT, and creative to tech executive
                leadership, we have you covered with amazing remote talent ready
                to join your team!
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionThree;
