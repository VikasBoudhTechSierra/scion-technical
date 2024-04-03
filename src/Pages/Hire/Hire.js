import React, { useState } from "react";
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






  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    organization: '',
    website: '',
    positionType: 'volvo',
    positionLocation: 'volvo',
    positionTitle: '',
    jobDescription: '',
    positionDescription: '',
    referral: 'volvo'

  })
  console.log(formData)

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    // Validation rules
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (formData.phone.trim() === '') {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (formData.title.trim() === '') {
      errors.title = 'Title is required';
    }
    if (formData.organization.trim() === '') {
      errors.organization = 'Organization is required';
    }
    if (formData.website.trim() === '') {
      errors.website = 'Website is required';
    } else if (!/^https?:\/\/\S+$/.test(formData.website)) {
      errors.website = 'Invalid URL';
    }
    if (formData.positionType === 'volvo') {
      errors.positionType = 'Position Type is required';
    }
    if (formData.positionLocation === 'volvo') {
      errors.positionLocation = 'Position Location is required';
    }
    if (formData.positionTitle.trim() === '') {
      errors.positionTitle = 'Title of Position is required';
    }
    if (formData.jobDescription.trim() === '') {
      errors.jobDescription = 'Job Description is required';
    }
    if (formData.positionDescription.trim() === '') {
      errors.positionDescription = 'Position Description is required';
    }
    if (formData.referral === 'volvo') {
      errors.referral = 'Please select how you heard about us';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log('Form is valid, submitting data:', formData);
    } else {
      console.error('Form is invalid. Please check the errors.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <form onSubmit={handleSubmit}>
              <div className="input_container">
                <div className="input_field">
                  <label htmlFor="firstName">First Name <span>*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                  {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </div>

                <div className="input_field">
                  <label htmlFor="lastName">Last Name <span>*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                  {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                  </div>
                  <div className="input_field">
                    <label htmlFor="phone">Phone <span>*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                  </div>
                </div>

                <div className="input_field">
                  <label htmlFor="title">Title <span>*</span></label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} />
                  {formErrors.title && <span className="error">{formErrors.title}</span>}
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="organization">Organization <span>*</span></label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
                    {formErrors.organization && <span className="error">{formErrors.organization}</span>}
                  </div>
                  <div className="input_field">
                    <label htmlFor="website">Website <span>*</span></label>
                    <input type="text" name="website" value={formData.website} onChange={handleChange} />
                    {formErrors.website && <span className="error">{formErrors.website}</span>}
                  </div>
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="positionType">Position Type <span>*</span></label>
                    <select name="positionType" value={formData.positionType} onChange={handleChange}>
                      <option value="volvo">Please Select</option>
                      <option value="saab">Temporary / Contract</option>
                      <option value="saab">Direct Hire / Permanent</option>
                      <option value="mercedes">Executive Search</option>
                      <option value="audi">Payrolling</option>
                      <option value="audi">Apply With India As A Candidate</option>
                    </select>
                    {formErrors.positionType && <span className="error">{formErrors.positionType}</span>}
                  </div>

                  <div className="input_field">
                    <label htmlFor="positionLocation">Position Location <span>*</span></label>
                    <select name="positionLocation" value={formData.positionLocation} onChange={handleChange}>
                      <option value="volvo">Please Select</option>
                      <option value="saab">Temporary / Contract</option>
                      <option value="saab">Direct Hire / Permanent</option>
                      <option value="mercedes">Executive Search</option>
                      <option value="audi">Payrolling</option>
                      <option value="audi">Apply With India As A Candidate</option>
                    </select>
                    {formErrors.positionLocation && <span className="error">{formErrors.positionLocation}</span>}

                  </div>
                </div>

                <div className="input_row_field">
                  <div className="input_field">
                    <label htmlFor="positionTitle">Title of Position <span>*</span></label>
                    <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange} />
                    {formErrors.positionTitle && <span className="error">{formErrors.positionTitle}</span>}
                  </div>
                  <div className="input_field">
                    <label htmlFor="jobDescription">Upload job Description, If Available</label>
                    <input type="file" name="jobDescription" className="file_field" />
                    {formErrors.jobDescription && <span className="error">{formErrors.jobDescription}</span>}
                    <span>Max. file size: 20 MB.</span>
                  </div>
                </div>

                <div className="textare_field">
                  <label htmlFor="positionDescription">Or Alternately, Describe Position</label>
                  <textarea name="positionDescription" value={formData.positionDescription} onChange={handleChange} cols="149" rows="20"></textarea>
                  {formErrors.positionDescription && <span className="error">{formErrors.positionDescription}</span>}
                </div>

                <div className="input_field">
                  <label htmlFor="referral">How Did You Hear About us?</label>
                  <select name="referral" value={formData.referral} onChange={handleChange}>
                    <option value="volvo">Please Select</option>
                    <option value="saab">Google</option>
                    <option value="mercedes">Direct Mail</option>
                    <option value="audi">Networking Event</option>
                    <option value="audi">Client Referral</option>
                    <option value="audi">Personal Contact</option>
                  </select>
                  {formErrors.referral && <span className="error">{formErrors.referral}</span>}
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
