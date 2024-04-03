import React from "react";
import "./Hire.css";
import Header from "../../Components/Header/Header";
import TemporaryStuffingHeading from "../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import TemporaryStuffingParaSection from "../../Components/TemporaryStaffingFunction/TemporaryStuffingParaSection/TemporaryStuffingParaSection";

import TemporaryStuffingImgSection from "../../Components/TemporaryStaffingFunction/TemporaryStuffingImgSection/TemporaryStuffingImgSection";

import Footer from "../../Components/Footer/Footer";
import hire_image from "../../Assets/Images/hire_image.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hire = () => {
  const Crousel_Card = [
    {
      id: 1,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum consequatur earum nulla quam autem tempore amet, ducimus accusantium voluptatum reiciendis accusamus esse commodi? Error nihil deleniti adipisci dolorem veritatis!",
      author_name: "- Candidate",
    },
    {
      id: 2,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum consequatur earum nulla quam autem tempore amet, ducimus accusantium voluptatum reiciendis accusamus esse commodi? Error nihil deleniti adipisci dolorem veritatis!",
      author_name: "- Candidate",
    },
    {
      id: 3,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum consequatur earum nulla quam autem tempore amet, ducimus accusantium voluptatum reiciendis accusamus esse commodi? Error nihil deleniti adipisci dolorem veritatis!",
      author_name: "- Candidate",
    },
    {
      id: 4,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum consequatur earum nulla quam autem tempore amet, ducimus accusantium voluptatum reiciendis accusamus esse commodi? Error nihil deleniti adipisci dolorem veritatis!",
      author_name: "Candidate",
    },
    {
      id: 5,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum consequatur earum nulla quam autem tempore amet, ducimus accusantium voluptatum reiciendis accusamus esse commodi? Error nihil deleniti adipisci dolorem veritatis!",
      author_name: "Candidate",
    },
  ];

  const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev" onClick={props.onClick}>
      {/* Your custom previous arrow content */}
      &lt;
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next" onClick={props.onClick}>
      {/* Your custom next arrow content */}
      &gt;
    </div>
  );

  const slider = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 700, // Adjust speed as needed
    autoplay: true,
    autoplaySpeed: 5000, // Adjust autoplay speed as needed
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <div className="hire_section">
        <div className="hire">
          <div className="itContainer wrapper">
            <TemporaryStuffingHeading
              h1={["Employers | Request Technology Staff "]}
              h3={[
                "We find the best technology candidates for any position fast! Our nationwide offices recruit for all US cities and markets.",
              ]}
            />

            <div className="itContentContainer">
              <div className="itLeftContainer">
                <TemporaryStuffingParaSection
                  paragraph1="Tech Sierra Technology is a leading recruitment firm for tech-based employers. Specializing in executive search, direct hire, and contract roles across tech, engineering, creative, marketing, sales, and IT. Our passionate recruiters connect clients with top talent locally and nationally since 2006."
                  paragraph2="With an extensive network of premier, experienced, diverse, and innovative candidates, we’re equipped to meet your unique hiring needs. Our recruiting offices span the nation, ensuring comprehensive coverage of all India Locations and markets for technology positions."
                />
              </div>

              <div className="itRightContainer hire-btm-ctn">
                <TemporaryStuffingImgSection imageUrl={hire_image} />
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="crousel_container">
            <Slider {...slider} className="slider">
              {Crousel_Card.map((item) => (
                <div className="crousel_card">
                  <div className="carousel_text">
                    <p>
                      <em>{item.details}</em>
                    </p>
                  </div>
                  <div className="author_name">
                    <span>{item.author_name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="form_container">
            <div className="form_header">
              <h3>
                READY TO HIRE? PLEASE TELL US A BIT ABOUT YOUR TEAM AND THE ROLE
                YOU ARE HIRING FOR.
              </h3>
            </div>
            <form action="">
              <div className="input_container">
                <div className="input_field">
                  <label htmlFor="first name">
                    First Name <span>*</span>
                  </label>
                  <input type="text" name="first name" />
                </div>

                <div className="input_field">
                  <label htmlFor="last name">
                    Last Name <span>*</span>
                  </label>
                  <input type="text" name="last name" />
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input type="email" name="email" />
                  </div>

                  <div className="input_field">
                    <label htmlFor="phone">
                      Phone <span>*</span>
                    </label>
                    <input type="phone" name="phone" />
                  </div>
                </div>

                <div className="input_field">
                  <label htmlFor="title">
                    Title <span>*</span>
                  </label>
                  <input type="text" name="title" />
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="Organization">
                      Organization <span>*</span>
                    </label>
                    <input type="email" name="Organization" />
                  </div>

                  <div className="input_field">
                    <label htmlFor="Website">
                      Website <span>*</span>
                    </label>
                    <input type="phone" name="Website" />
                  </div>
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="Position_Type">
                      Position Type <span>*</span>
                    </label>
                    <select name="cars" id="cars">
                      <option value="volvo">Temporary / Contract</option>
                      <option value="saab">Direct Hire / Permanent</option>
                      <option value="mercedes">Executive Search</option>
                      <option value="audi">Payrolling</option>
                      <option value="audi">
                        Apply With US As A Candidate{" "}
                      </option>
                    </select>
                  </div>

                  <div className="input_field">
                    <label htmlFor="Position_Location">
                      Position Location <span>*</span>
                    </label>
                    <select name="cars" id="cars">
                      <option value="volvo">Temporary / Contract</option>
                      <option value="saab">Direct Hire / Permanent</option>
                      <option value="mercedes">Executive Search</option>
                      <option value="audi">Payrolling</option>
                      <option value="audi">
                        Apply With US As A Candidate{" "}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="title_position">
                      Title of Position <span>*</span>
                    </label>
                    <input type="text" name="title_position" />
                  </div>

                  <div className="input_field">
                    <label htmlFor="file">
                      upload job Description, If Available{" "}
                    </label>
                    <input type="file" name="Website" className="file_field" />
                    <span>Max. file size: 20 MB.</span>
                  </div>
                </div>

                <div className="textare_field">
                  <label htmlFor="Website">
                    Or Alternately, Describe Position{" "}
                  </label>
                  <textarea name="" id="" cols="149" rows="20"></textarea>
                </div>

                <div className="input_field">
                  <label htmlFor="Position_Type">
                    How Did You Hear About us?
                  </label>
                  <select name="cars" id="cars">
                    <option value="volvo">Please Select</option>
                    <option value="saab">Google</option>
                    <option value="mercedes">Direct Mail</option>
                    <option value="audi">Networking Event</option>
                    <option value="audi">Client Referral</option>
                    <option value="audi">Personal Contact</option>
                  </select>
                </div>
              </div>

              <div className="btn">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>

          <div class="hire_section_btm_container">
            <h2 class="hire_section_main_title">
              More Information for Employers
            </h2>

            <ul className="hire_section_btm_links">
              <li>
                <a href="#FIXME">WHY CHOOSE SCION</a>
              </li>
              <li>
                <a href="#FIXME">HIRE TALENT</a>
              </li>
              <li>
                <a href="#FIXME">EXPERTISE</a>
              </li>
              <li>
                <a href="#FIXME">IT STAFFING</a>
              </li>
              <li>
                <a href="#FIXME">CREATIVE STAFFING</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hire;
