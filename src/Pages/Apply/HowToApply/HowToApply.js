import React from "react";
import "./HowToApply.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { HTADATA, JOBSEEKERINFODATA } from "./HTAData";

const HowToApply = () => {
  return (
    <div className="howToApply">
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="HTABanner">
        <div className="wrapper">
          <h2>Job Seekers / Apply For Technology & IT Jobs</h2>
          <p>
            Find Your Perfect Job With Scion Technology | Apply for IT Jobs Now
          </p>
        </div>
      </div>
      <div className="HTAContent">
        <div className="wrapper">
          <p>Scion Technology Makes Applying as Easy as 1, 2, 3!</p>
          <p>
            When you apply with Scion Technology, you have access to an
            incredible technology recruitment team that listens to your career
            objectives and needs. As an agency that was founded by passionate
            recruitment experts who are deeply networked, we offer expert advice
            and resources to the companies we serve and the candidates we
            counsel. We thrive in connecting you to local, national, and remote
            businesses and organizations.
          </p>
          <p>
            We understand that searching for a job can be intimidating and
            stressful. We are honored to partner with you as you begin your
            journey. Regardless of your objective: a temporary job, a change in
            industry or finding the next step in your career, we have the
            connections and resources for you.
          </p>
          <p>
            At Scion Technology we have deep connections with industry-leading
            decision makers. We do the work of creating lifelong relationships
            with brands and corporations to ensure we are connecting you with
            the best employer match.
          </p>
          <p>
            Please note: while it is our goal and mission to help as many
            candidates as we can, while leading searches for talent, because of
            the volume of applicants we must reserve interview time for the most
            qualified applicants that meet our client’s hiring qualifications
            and industry preferences. If you are not selected to interview for a
            position, we would highly encourage you to apply to other openings
            available online with us! Many of our open career opportunities can
            be competitive and it is our job to deliver a detailed candidate
            screening process on behalf of employer clients.
          </p>
          <ul>
            {HTADATA.map((item) => (
              <li key={item.id}>
                <img src={item.imgSrc} alt={item.text} />
                <h4>{item.text}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="HTASendInfo">
        <div className="wrapper">
          <h4>
            <span>Be Considered For New Opportunities</span>
            <span>By Telling Us Who You Are</span>
          </h4>
          <span>
            <button>send us your info</button>
          </span>
        </div>
      </div>
      <div className="seeker-information">
        <div className="wrapper">
          <h3>
            <span>more job seeker information</span>
          </h3>
          <ul>
            {JOBSEEKERINFODATA.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.content}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToApply;
