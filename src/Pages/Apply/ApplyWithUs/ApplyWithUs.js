import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import "./ApplyWithUs.css";

const ApplyWithUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    availablePosition: "",
    annualSalary: "",
    positionTitle: "",
    LikeToShare: "",
  });

  const [file, setFiles] = useState({
    uploadResume: "",
    coverLetter: "",
    additionalInfo: "",
  });

  const [radio, setRadio] = useState({
    authorizedToWork: "",
    relocation: "",
    futureOpportunities: "",
  });

  const [checkbox, setCheckbox] = useState({
    partTime: false,
    fullTime: false,
    interestedTime: false,
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    location,
    availablePosition,
    annualSalary,
    positionTitle,
    LikeToShare,
  } = formData;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnFiles = (event) => {
    const { name, files } = event.target;
    setFiles({ ...file, [name]: files });
  };

  const handleOnRadio = (event) => {
    const { name, value } = event.target;
    setRadio({ ...radio, [name]: value });
  };

  const handleOnChecked = (event) => {
    const { name, checked } = event.target;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      phone,
      location,
      availablePosition,
      annualSalary,
      positionTitle,
      LikeToShare,
      file.uploadResume,
      file.coverLetter,
      file.additionalInfo,
      radio.authorizedToWork,
      radio.futureOpportunities,
      radio.relocation,
      checkbox.fullTime,
      checkbox.interestedTime,
      checkbox.partTime
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      availablePosition: "",
      annualSalary: "",
      positionTitle: "",
      LikeToShare: "",
    });
    setCheckbox({
      partTime: false,
      fullTime: false,
      interestedTime: false,
    });
    setFiles({
      uploadResume: "",
      coverLetter: "",
      additionalInfo: "",
    });
    setFiles({
      authorizedToWork: "",
      relocation: "",
      futureOpportunities: "",
    });
  };

  return (
    <div>
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="applyForm">
        <div className="wrapper">
          <h3>register to apply with us</h3>
          <h5>
            <span>quick registration</span>
          </h5>
          <form onSubmit={handleOnSubmit}>
            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="firstName">first name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email ID"
                  value={formData.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="location">location you are seeking work</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location You Are Seeking Work"
                  value={formData.location}
                  onChange={handleOnChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="availablePosition">
                  When Are You Available To Start A New Position?
                </label>
                <input
                  type="text"
                  name="availablePosition"
                  id="availablePosition"
                  placeholder="Enter Available Position"
                  value={formData.availablePosition}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="uploadResume">Please Upload Your Resume</label>
                <input
                  type="file"
                  name="uploadResume"
                  id="uploadResume"
                  onChange={handleOnFiles}
                />
              </div>

              <div className="input-group">
                <label htmlFor="annualSalary">Desired Annual Salary</label>
                <input
                  type="text"
                  placeholder="Please Enter a Number"
                  name="annualSalary"
                  id="annualSalary"
                  value={formData.annualSalary}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="coverLetter">
                  Upload Your Cover Letter (Optional)
                </label>
                <input
                  type="file"
                  name="coverLetter"
                  id="coverLetter"
                  onChange={handleOnFiles}
                />
              </div>
              <div className="input-group">
                <label htmlFor="work-type">
                  Are You Looking for Full-Time or Part-Time Work?
                </label>
                <label htmlFor="partTime">
                  <input
                    type="checkbox"
                    name="partTime"
                    id="partTime"
                    checked={checkbox.partTime}
                    onChange={handleOnChecked}
                  />
                  part-time
                </label>
                <label htmlFor="fullTime">
                  <input
                    type="checkbox"
                    name="fullTime"
                    id="fullTime"
                    checked={checkbox.fullTime}
                    onChange={handleOnChecked}
                  />
                  full-time
                </label>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="additionalInfo">
                  Upload Additional Information/Work Samples (Optional)
                </label>
                <input
                  type="file"
                  name="additionalInfo"
                  id="additionalInfo"
                  onChange={handleOnFiles}
                />
              </div>
              <div className="input-group">
                <label htmlFor="work-type">
                  Are You Legally Authorized To Work In The United States?
                </label>
                <label htmlFor="authorizedToWork-yes">
                  <input
                    type="radio"
                    name="authorizedToWork"
                    id="authorizedToWork-yes"
                    value="yes"
                    checked={radio.authorizedToWork === "yes"}
                    onChange={handleOnRadio}
                  />
                  yes
                </label>
                <label htmlFor="authorizedToWork-no">
                  <input
                    type="radio"
                    name="authorizedToWork"
                    id="authorizedToWork-no"
                    value="no"
                    checked={radio.authorizedToWork === "no"}
                    onChange={handleOnRadio}
                  />
                  no
                </label>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="relocation">Are You Open to Relocation?</label>
                <label htmlFor="relocation-yes">
                  <input
                    type="radio"
                    name="relocation"
                    id="relocation-yes"
                    value="yes"
                    checked={radio.relocation === "yes"}
                    onChange={handleOnRadio}
                  />
                  yes
                </label>
                <label htmlFor="relocation-no">
                  <input
                    type="radio"
                    name="relocation"
                    id="relocation-no"
                    value="no"
                    checked={radio.relocation === "no"}
                    onChange={handleOnRadio}
                  />
                  no
                </label>
              </div>
              <div className="input-group">
                <label htmlFor="futureOpportunities">
                  May We Send You Text Messages About This Position Or Other
                  Future Opportunities?
                </label>
                <label htmlFor="futureOpportunities-yes">
                  <input
                    type="radio"
                    name="futureOpportunities"
                    id="futureOpportunities-yes"
                    value="yes"
                    checked={radio.futureOpportunities === "yes"}
                    onChange={handleOnRadio}
                  />
                  yes
                </label>
                <label htmlFor="futureOpportunities-no">
                  <input
                    type="radio"
                    name="futureOpportunities"
                    id="futureOpportunities-no"
                    value="no"
                    checked={radio.futureOpportunities === "no"}
                    onChange={handleOnRadio}
                  />
                  no
                </label>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="positionTitle">
                  What is the Title of the Position You're Interested In
                </label>
                <input
                  type="text"
                  name="positionTitle"
                  id="positionTitle"
                  placeholder="Interested Positions"
                  value={formData.positionTitle}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="apply-form-group textarea">
              <div className="input-group">
                <label htmlFor="LikeToShare">
                  Anything Else You Would Like to Share?
                </label>
                <textarea
                  rows={8}
                  name="LikeToShare"
                  id="LikeToShare"
                  value={formData.LikeToShare}
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="positionTitle">
                  I am interested in learning of new job opportunities.
                </label>
                <label htmlFor="interestedTime">
                  <input
                    type="checkbox"
                    name="interestedTime"
                    id="interestedTime"
                    checked={checkbox.interestedTime}
                    onChange={handleOnChecked}
                  />
                  yes
                </label>
              </div>
            </div>

            <div className="apply-form-group text-note">
              <span>
                Please note: Submitting your application can sometimes take a
                few seconds. Also, depending on your internet connection in some
                instances may take longer. Please don't navigate away from this
                page until it is complete.
              </span>
            </div>

            <div className="apply-btn">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyWithUs;
