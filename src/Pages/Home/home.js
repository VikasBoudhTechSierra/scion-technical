import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import SectionThree from "../../Components/SectionThree/SectionThree";
import TextBox from "../../Components/TextBox/TextBox";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const heading = ["Our Proven History + Best of Staffing Since 2006"];

  const paragraphs = [
    //para 1
    "Scion Technology stands as a nationally recognized leader in IT staffing, specializing in recruitment across a diverse spectrum including engineering, IT, data, security, product, design, informatics, and executive leadership sectors. Our proactive outbound recruiting approach ensures the formation of high-performing technology teams precisely tailored to your needs.",
    //para 2
    "Benefit from our extensive national talent solutions and local networks, addressing onsite requirements for individual contributors, managerial, and executive leadership roles. From architecture to development, programming, systems, security, web, and apps, our direct placement services provide access to top-tier professionals poised to drive your business to new heights.",
    //para 3
    "With a nationwide presence and a dedicated team of US-based remote tech recruiters, we are equipped to serve all US cities and burgeoning technology markets. Our unwavering commitment to excellence has earned us consistent recognition from esteemed publications. For sixteen consecutive years, The Business Times has hailed Scion as a leading technology staffing firm, covering Retained, Contingent, and Temporary Services. Additionally, we proudly hold a spot on Forbes’ list of Best Executive Recruiting Firms in the United States, alongside the esteemed Best of Staffing award.",
    //para 4
    "At Scion, we pride ourselves on being your trusted partner throughout the search process. Our mission is to connect you with the best IT, engineering, and technology professionals available in the market. Leveraging our extensive experience in sourcing unparalleled talent across various positions, we serve as the preferred partner for both industry-leading corporations and cutting-edge startups.",
    //para 5
    "We offer innovative technology staffing solutions meticulously tailored to your unique needs. Backed by a team of experienced and knowledgeable technology recruiters, we stand ready to provide immediate support throughout the hiring process, regardless of the scale of your requirements.",
    //para 6
    "Partner with Scion Technology today, and let us assist you in building a resilient technology team that will propel your business to unparalleled success!",
  ];

  const buttonText = ["HIRE STAFF NOW"];

  const buttonLink = "/";

  return (
    <div>
      <Header />
      <Banner />
      <SectionThree />
      <TextBox
        heading={heading}
        paragraphs={paragraphs}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
      <SliderComponent />
      <Footer/>
    </div>
  );
};

export default Home;
