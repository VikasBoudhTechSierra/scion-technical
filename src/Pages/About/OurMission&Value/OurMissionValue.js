import React from "react";
import "./OurMissionValue.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import missionandvalues from "../../../Assets/Images/AbouUsPage/Mission-and-Values.jpg";
const OurMissionValue = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="mission-values-container">
        <div className="wrapper">
          <h2 className="section-title">Our Mission &amp; Values</h2>
          <div className="mission-statement-ctn">
            <p className="mission-statement">
              It is our mission to diligently provide the nation's best staffing
              and executive search services, guided by socially conscious
              business practices. At Scion, we lead by example, consistently
              promoting operational excellence, delivering employee and client
              satisfaction, upholding professional ethics, celebrating
              diversity, equity, and inclusion, and fostering the true potential
              of our industry.
            </p>
          </div>
          <div className="mission-values-main">
            <div>
              <h3 className="subsection-title">Our Name</h3>
              <p className="subsection-content">
                Tech Sierra Technology takes its name from a sector that portion
                of a plant which, when introduced to a new foundation or growth
                area, we strategically place new talent to improve
                organizational growth.
              </p>

              <h3 className="subsection-title">Our Values</h3>
              <div className="value-section">
                <h4 className="value-title">DIVERSITY &amp; INCLUSION</h4>
                <p className="value-description">
                  We believe diverse teams are more than a strength; they are
                  essential for creating value and competitive advantage. We
                  strive for applications, interviews, coaching processes are
                  inclusive, equitable, and bias-free all the while ensuring we
                  are accurately representing our firm and essentially in the
                  partnerships and connections we traditionally create.
                </p>
              </div>

              <div className="value-section">
                <h4 className="value-title">INTEGRITY &amp; ETHICS</h4>
                <p className="value-description">
                  We do the right things. We remain steadfastly to our
                  candidates, clients, and stakeholders. We communicate honestly
                  and transparently, act with respect, and we deliver on our
                  commitments.
                </p>
              </div>

              <div className="value-section">
                <h4 className="value-title">SERVICE EXCELLENCE</h4>
                <p className="value-description">
                  We are committed to excellence in everything we do, striving
                  to deliver lasting value to our clients, candidates, partners,
                  and staff.
                </p>
              </div>

              <div className="value-section">
                <h4 className="value-title">LEARNING &amp; INNOVATION</h4>
                <p className="value-description">
                  We continually refine our services, processes, communication,
                  and operational systems and structures, utilizing
                  ever-evolving technological tools to empower our far-reaching
                  impact and growth. We are humble and embrace individual
                  professional development opportunities to strengthen our
                  company from within.
                </p>
              </div>

              <div className="value-section">
                <h4 className="value-title">PASSION</h4>
                <p className="value-description">
                  We take pride in empowering our clients’ strategic hiring
                  goals and connecting extraordinary candidates to new career
                  pathways. We celebrate the opportunity to uplift and improve
                  the futures of individuals and organizations alike.
                </p>
              </div>

              <div className="value-section">
                <h4 className="value-title">TEAMWORK &amp; POSITIVITY</h4>
                <p className="value-description">
                  We are committed to providing value and inspiring others
                  through our work. We believe empathy and positivity fuel
                  effective collaboration. We hold these core values and
                  leverage them at all levels of our organization. Together, we
                  succeed.
                </p>
              </div>
            </div>
            <div>
              <div className="button-container">
                <span className="primary-button">
                  Ready to launch your search?
                </span>
                <p>
                  <a className="employer_cta_button" href="/contact-us">
                    Connect With Us
                  </a>
                </p>
              </div>

              <img
                className="mission-image"
                src={missionandvalues}
                alt="Diverse group of people with their hands together"
              />
            </div>
          </div>
          <div className="mission-section-btm-container">
            <h2 className="section-main-title">Learn More About TechSierra</h2>

            <ul className="mission-section-btm-links">
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
      </div>
      <Footer />
    </div>
  );
};

export default OurMissionValue;
