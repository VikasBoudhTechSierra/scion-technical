import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import "./ApplyWithUs.css";

const ApplyWithUs = () => {
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
          <form>
            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="firstName">first name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
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
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number"
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
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="uploadResume">Please Upload Your Resume</label>
                <input type="file" name="uploadResume" id="uploadResume" />
              </div>

              <div className="input-group">
                <label htmlFor="annualSalary">Desired Annual Salary</label>
                <input
                  type="text"
                  placeholder="Please Enter a Number"
                  name="annualSalary"
                  id="annualSalary"
                />
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="coverLetter">
                  Upload Your Cover Letter (Optional)
                </label>
                <input type="file" name="coverLetter" id="coverLetter" />
              </div>
              <div className="input-group">
                <label htmlFor="work-type">
                  Are You Looking for Full-Time or Part-Time Work?
                </label>
                <label htmlFor="part-time">
                  <input type="checkbox" name="part-time" id="part-time" />
                  part-time
                </label>
                <label htmlFor="full-time">
                  <input type="checkbox" name="full-time" id="full-time" />
                  full-time
                </label>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="coverLetter">
                  Upload Additional Information/Work Samples (Optional)
                </label>
                <input type="file" name="coverLetter" id="coverLetter" />
              </div>
              <div className="input-group">
                <label htmlFor="work-type">
                  Are You Legally Authorized To Work In The United States?
                </label>
                <label htmlFor="authorizedToWork-yes">
                  <input
                    type="radio"
                    name="relocation"
                    id="authorizedToWork-yes"
                  />
                  yes
                </label>
                <label htmlFor="authorizedToWork-no">
                  <input
                    type="radio"
                    name="relocation"
                    id="authorizedToWork-no"
                  />
                  no
                </label>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="relocation">Are You Open to Relocation?</label>
                <label htmlFor="relocation-yes">
                  <input type="radio" name="relocation" id="relocation-yes" />
                  yes
                </label>
                <label htmlFor="relocation-no">
                  <input type="radio" name="relocation" id="relocation-no" />
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
                  />
                  yes
                </label>
                <label htmlFor="futureOpportunities-no">
                  <input
                    type="radio"
                    name="futureOpportunities"
                    id="futureOpportunities-no"
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
                ></textarea>
              </div>
            </div>

            <div className="apply-form-group">
              <div className="input-group">
                <label htmlFor="positionTitle">
                  I am interested in learning of new job opportunities.
                </label>
                <label htmlFor="interested-time">
                  <input
                    type="checkbox"
                    name="interested-time"
                    id="interested-time"
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
