import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Adjust speed as needed
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="sliderContainer">
      <h1>Testimonials</h1>
      <Slider {...settings} className="slider">
        <div className="sliderPara">
          <p>
            “I was particularly grateful for Scion's responsiveness to all of my
            requests and questions given our time frame…and great customer
            service – responding to my emails within a couple hours if not less.
            [They also] did a great job of listening to my concerns and feedback
            and responding with understanding before either providing
            appropriate reassurance and/or taking prompt action.”
          </p>
          <h3>Programming Professional</h3>
        </div>
        <div className="sliderPara">
          <p>
            Glassdoor Reviews: "Great place to work!" -- "Dream job!" -- "I love
            this place!!!" -- "Amazing Company and Team!" -- "Great Company!" --
            Rating: 4.8 - 14 votes
          </p>
          <h3></h3>
        </div>
        <div className="sliderPara">
          <p>
            “Scion’s associate has definitely been a great addition to the team.
            He is very attentive and is picking up the process very quickly. We
            are very grateful to have him here!”
          </p>
          <h3>Executive Client</h3>
        </div>
        <div className="sliderPara">
          <p>
            "The great thing about Scion is that everyone there has got
            character. These are legitimately good people, and they know
            staffing. There's nothing worse than giving your resume to some
            cubicle zombie whose life revolves around the toner level of the
            copy machine. You pour your life into that damned resume and you
            want to hand it over to someone who matters in some way, right?
            Well, Scion's the place. "
          </p>
          <h3>Gary Lugtu, Manager, Phacil, Inc.</h3>
        </div>
        <div className="sliderPara">
          <p>
            “… by far the best temp placement representative we have had the
            opportunity to work with. [Scion Staffing] plays an active role in
            matching our culture with a temp new hire. All of our employees have
            been extremely pleased with the caliber of candidates…” -
          </p>
          <h3>Management Professional in Mid-Size Architecture Firm</h3>
        </div>
        <div className="sliderPara">
          <p>
            “The folks that Scion sends are always top notch even with the
            shortest of notice…responsive, attentive to detail, and provides a
            great service.”
          </p>
          <h3>Technical/Engineering Professional</h3>
        </div>
        <div className="sliderPara">
          <p>
            “…by far the best agency recruiter / account manager I've ever
            worked with (and I've worked with a lot them).”
          </p>
          <h3>HR Director in the Technology Sector</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              cursor: "pointer",
              margin: "0px",
              fontSize: "50px", // Adjust font size as needed
              color: i === currentSlide ? "black" : "white",
            }}
          >
            &#8226; {/* Unicode for a bullet/dot */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
