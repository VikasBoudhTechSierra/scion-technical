import React from "react";
import Header from "../../../Components/Header/Header";
import "./WhyDiversity.css";
import Flipcard_image1 from "../../../Assets/Images/flipcard_image1.png";
import Flipcard_image2 from "../../../Assets/Images/flipcard_image2.png";
import Flipcard_image3 from "../../../Assets/Images/flipcard_image3.png";

import Staff_1 from "../../../Assets/Images/staff_committe_1.png";
import Staff_2 from "../../../Assets/Images/staff_committe_2.png";
import Staff_3 from "../../../Assets/Images/staff_committe_3.png";
import Footer from "../../../Components/Footer/Footer";

const WhyDiversity = () => {
  const FlipCard = [
    {
      id: 1,
      img: Flipcard_image1,
      header: "Internal Staff",
      para: "Of Scion’s internal staff members that were surveyed, nearly 66% identify as coming from a diverse group. This meets Scion’s goal of having a staff consisting of at least 50% come from a diverse background or group.",
    },
    {
      id: 2,
      img: Flipcard_image2,
      header: "Tech Sierra Perm Placements",
      para: "Of the Tech Sierra Perm Placements surveyed, over 59% identify as being from a diverse group.",
    },
    {
      id: 3,
      img: Flipcard_image3,
      header: "Tech Sierra Temp Placements",
      para: "60% of Scion&#8217;s Temporary Placements have identified as coming from a diverse background.",
    },
  ];

  const StaffCard = [
    {
      id: 1,
      img: Staff_1,
      name: "Joshua Steele – Co-Chair",
      para: "I am proud to say that the growth and impact of the Tech Sierra Staffing Diversity, Equity, and Inclusion committee is having a multiplier effect on the interest and passion that our team brings to our work and clients. With DEI, there is an inherent, wide spectrum of where peoples’ interest and passion is.",
    },
    {
      id: 2,
      img: Staff_2,
      name: "Cheryl Nantang – Co-Chair",
      para: "As a member of the Tech Sierra DEI Committee, I joined to help establish a supportive and welcoming work environment where employees of all backgrounds and demographic characteristics could work together to ensure that equitable recruiting practices and solutions are developed and implemented. Thus, our voice extends the business’s reach to our partners and clients.",
    },
    {
      id: 3,
      img: Staff_3,
      name: "Candice Zemina",
      para: "Embracing diversity, equity, inclusion, representation, and an overall sense of belonging can significantly change perceptions of the world around you. Letting diversity, equity, inclusion, and belonging be a foundational part of how you approach others in your personal and professional life creates an environment that people want to be a part of.",
    },
    {
      id: 4,
      img: Staff_3,
      name: "Ex Hopson",
      para: "“We need to give each other the space to grow, to be ourselves, to exercise our diversity. We need to give each other space so that we may both give and receive such beautiful things as ideas, openness, dignity, joy, healing, and inclusion.”",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <Header />
      </div>

      <div className="diversity_section">
        <div className="wrapper">
          <div className="text_container">
            <div className="main_header">
              <h1>
                <em> Diversity, Equity & Inclusion</em>{" "}
              </h1>
            </div>

            <div className="sub_para_details">
              <div className="sub_para_header">
                <h1>A Socially Conscious Tech Diversity Staffing Agency</h1>
                <p>
                  {" "}
                  <em>
                    At Scion, we believe that diverse teams are not only a
                    strength, but an essential part of success for any business
                    and organization. This is why we recognize Diversity,
                    Equity, and Inclusion as one of our core values. At the very
                    core of our organization as a socially conscious diversity
                    staffing agency, we are passionate about making sure that
                    our clients do everything possible to promote and ensure
                    that their entire hiring process, from application to
                    interviews, is thoughtfully equitable, inclusive, and
                    beneficial for all applicants, including those from a
                    diverse background. Our recruiting and staffing firm
                    maintain the willingness to ask questions and make best
                    practice recommendations to our clients, candidates, and
                    vendors to achieve this goal.
                  </em>
                </p>
              </div>
            </div>

            <div className="analyse_section">
              <div className="analyse_header">
                <h3>
                  <em>
                    <strong>Tech Sierra Diversity by the Numbers</strong>
                  </em>
                </h3>
              </div>

              <div className="flip_card_section">
                {FlipCard.map((item) => (
                  <div className="flip_card">
                    <div className="flip_card_inner">
                      <div className="flip_card_front">
                        <img src={item.img} alt="" />
                      </div>

                      <div className="flip_card_back">
                        <h2>{item.header}</h2>
                        <p>
                          <strong>{item.para}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>

              <div className="analyse_para">
                <p>
                  <em>
                    As your recruiting partner, we have made the conscious
                    decision to not aid companies or organizations that are
                    discriminatory, harass employees, or that do not foster a
                    positive workplace environment. We have partnered with many
                    clients who share a similar mission as ours, and we are
                    excited to keep partnering with more amazing organizations
                    that share these values. Our staff is dedicated to providing
                    intentional recruitment support by being aware of and
                    removing bias throughout our processes and continuing to be
                    an industry leader by sharing best practices with our
                    clients, candidates and internal staff.
                  </em>
                </p>
              </div>
            </div>
          </div>

          <div className="staff_committee_section">
            <div className="committee_header_section">
              <h3>Tech Sierra Technology Staffing DEI Committee</h3>
            </div>

            <div className="committee_card_section">
              {StaffCard.map((item) => (
                <div className="committee_card">
                  <div className="image_staff">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="staff_name">
                    <h3>
                      {" "}
                      <strong>{item.name}</strong>
                    </h3>
                  </div>

                  <div className="about_staff">
                    <p>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="banner_image_section">
            <div className="accomplished_section">
              <div className="accomplished_header">
                <h2>
                  {" "}
                  <strong>What We’ve Accomplished</strong>
                </h2>
              </div>

              <div className="accomplished_para">
                <p>
                  Impact is defined as having a strong effect on someone or
                  something. At Tech Sierra Technology, we believe that our work
                  in the staffing industry has a major impact, not only on the
                  amazing talent and clients that we partner with but with our
                  internal staff who make help us reach our DEI goals every day.
                  In the last year, Tech Sierra has made tremendous strides in
                  the diversity front and as we continue to grow, bigger strides
                  will be made to make the working world a more diverse,
                  equitable, and inclusive place where people of all
                  ethnicities, religion, and abilities will be able to find work
                  and success.
                </p>

                <span>
                  Here is a glance at what our DEI committee has accomplished
                  thus far:
                </span>
              </div>

              <div className="accomplished_sub_header">
                <h4>
                  PARTNERSHIP WITH A DEI CONSULTANT FIRM SPARK EQUITY IN ACTION
                </h4>

                <span>
                  Find out more information about our DEI Consultant Partner
                  here.
                </span>
              </div>

              <div className="staff_areas_details">
                <h2>OUR STAFF IS TRAINED IN DEI AREAS SUCH AS:</h2>
                <div className="staff_point">
                  <ul>
                    <li>
                      {" "}
                      <strong>Building on DEI Foundations</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Microaggressions 101</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>DEI and Belonging</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>
                        Moving From DEI Awareness to Accountability
                      </strong>
                    </li>
                    <li>
                      {" "}
                      <strong>DEI and Unconscious Bias Foundations</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Cultural Sensitivity</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>The Intersection of DEI in our Daily Work</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Giving and Receiving Feedback</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Diversity Candidate Search</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Equitable Strategies and Communication</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="accomplished_events">
                <ul>
                  <li>
                    DIVERSITY CANDIDATE SEARCH BLUEPRINT GUIDE AND DIVERSITY
                    INCLUSION AND EQUITY COMMUNICATION TIPS FOR OUR SERVICES
                  </li>
                  <li>
                    WE HAVE COMMITTED TO A DEI AUDIT OF OUR PROCESSES AND
                    SERVICES EVERY TWO YEARS
                  </li>
                  <li>
                    TECH SIERRA HAS ADDED JUNETEENTH AS A COMPANY-RECOGNIZED
                    HOLIDAY
                  </li>
                </ul>
              </div>

              <div className="accomplished_subcommitties">
                <h2>WE ESTABLISHED DEI SUBCOMMITTEES:</h2>
                <div className="subcommitties_points">
                  <ul>
                    <li>
                      {" "}
                      <strong>Charter Committee</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Communications Committee</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Strategic Plan Committee</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>DEIC Application Process Committee </strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Core Committee</strong>
                    </li>
                    <li>
                      {" "}
                      <strong>Internal Resources Committee</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="accomplished_finalized">
                <h2>FINALIZED OUR DEI STRATEGIC PLAN</h2>
              </div>
            </div>
          </div>

          <div className="banner_image_future_section">
            <div className="future_section">
              <div className="future_header">
                <h2>
                  <strong>What The Future Holds</strong>
                </h2>
              </div>

              <div className="future_sub_head">
                <p>
                  Here’s a look at what our incredible DEI team is looking to
                  accomplish in the future:
                </p>
              </div>
              <div className="future_points">
                <ul>
                  <li>
                    <strong>
                      Further collaborations with Scion’s Marketing Division
                    </strong>
                  </li>

                  <li>
                    <strong>
                      Formal DEI landing pages on all Tech Sierra websites
                    </strong>
                  </li>

                  <li>
                    <strong>External DEI Documents for our Clients</strong>
                  </li>

                  <li>
                    <strong>
                      Quarterly Sessions for more informal DEI Learning
                      Opportunities
                    </strong>
                  </li>

                  <li>
                    <strong>
                      Create new 2024 Goals based on DEI findings from 2023
                    </strong>
                  </li>

                  <li>
                    <strong>
                      Strengthen Staff Resources and Internal Documents
                    </strong>
                  </li>

                  <li>
                    <strong>
                      Further Education and Conversation with Outside Expert
                    </strong>
                  </li>

                  <li>
                    <strong>Speakers</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="diversity_section_btm_container">
            <h2 class="diversity_section_main_title">Additional Resources</h2>

            <ul className="diversity_section_btm_links">
              <li>
                <a href="#FIXME">Our Mission</a>
              </li>
              <li>
                <a href="#FIXME">Why Choose Scion</a>
              </li>
              <li>
                <a href="#FIXME">our clients</a>
              </li>
              <li>
                <a href="#FIXME">Request Staff</a>
              </li>
              <li>
                <a href="#FIXME">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhyDiversity;
