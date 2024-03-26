import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import SectionThree from "../../Components/SectionThree/SectionThree";
import TextBox from "../../Components/TextBox/TextBox";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import RecruitingSpecialties from "../../Components/RecruitingSpecialties/RecruitingSpecialties";
import Footer from "../../Components/Footer/Footer";
import hireStaff from "../../Assets/Images/Homepage/hire-staff.png"
import startaSearch from "../../Assets/Images/Homepage/home-tech-whychoose.jpg"
import techSearch from "../../Assets/Images/Homepage/launchYourTechSearch.jpg"

const Home = () => {
  const heading = ["Our Proven History + Best of Staffing Since 2006"];
  const headingTwo = ["Why Choose Our IT Staffing Agency"];
  const headingThree = ["Powerful Tech Talent Connections"];
  const headingFour = ["Cutting-Edge Technology Professionals"];
  const paragraphs = [
    //para 1
    "techsierra Technology stands as a nationally recognized leader in IT staffing, specializing in recruitment across a diverse spectrum including engineering, IT, data, security, product, design, informatics, and executive leadership sectors. Our proactive outbound recruiting approach ensures the formation of high-performing technology teams precisely tailored to your needs.",
    //para 2
    "Benefit from our extensive national talent solutions and local networks, addressing onsite requirements for individual contributors, managerial, and executive leadership roles. From architecture to development, programming, systems, security, web, and apps, our direct placement services provide access to top-tier professionals poised to drive your business to new heights.",
    //para 3
    "With a nationwide presence and a dedicated team of US-based remote tech recruiters, we are equipped to serve all US cities and burgeoning technology markets. Our unwavering commitment to excellence has earned us consistent recognition from esteemed publications. For sixteen consecutive years, The Business Times has hailed techsierra as a leading technology staffing firm, covering Retained, Contingent, and Temporary Services. Additionally, we proudly hold a spot on Forbes’ list of Best Executive Recruiting Firms in the United States, alongside the esteemed Best of Staffing award.",
    //para 4
    "At techsierra, we pride ourselves on being your trusted partner throughout the search process. Our mission is to connect you with the best IT, engineering, and technology professionals available in the market. Leveraging our extensive experience in sourcing unparalleled talent across various positions, we serve as the preferred partner for both industry-leading corporations and cutting-edge startups.",
    //para 5
    "We offer innovative technology staffing solutions meticulously tailored to your unique needs. Backed by a team of experienced and knowledgeable technology recruiters, we stand ready to provide immediate support throughout the hiring process, regardless of the scale of your requirements.",
    //para 6
    "Partner with techsierra Technology today, and let us assist you in building a resilient technology team that will propel your business to unparalleled success!",
  ];

  const paraTwo = [
    "We specialize in recruiting proven engineering, IT, and technology professionals and leadership for technology-based employers and departments. The secret to our technology recruiting success lies within our commitment to excellence at every level of our work and firm. At techsierra Technology, we are focused on providing you with incredible technology talent options that match your unique working requirements, and technology, as well as align with your company values. Our mission is clear: to connect you expediently and thoughtfully to the absolute best technology talent on the market available within your budget. We provide premier tech talent for companies, brands, and organizations seeking to hire experienced, motivated, and reliable employees. We bring a wealth of incredible local and nationwide technology candidates and diverse pipelines of exceptional candidate networks..",
    "The foundation of techsierra Technology Staffing is rooted in the relationships we’ve mindfully built with startups, corporations, venture capitalists, and industry thought leaders. We offer our tech clients unparalleled reach into national and local talent networks of 14,000,000+ qualified candidate options and boast a truly expansive vetted pool of national and local IT and technology professionals actively seeking new opportunities. Our experienced recruiters specialize in providing placements across a wide variety of technologies, infrastructures, apps, startups, products, services, and methods. We recruit with cutting-edge tech and are accustomed to delivering diverse and robust experienced talent for our devoted clients. From temporary IT contractors to tech executive placement needs, we stand ready to connect you to the talent you’re searching for."
  ];

  const paraThreePartOne = [
    "An expert tech recruiting and staffing partner is essential in today’s competitive technology market. techsierra Technology actively networks, recruits, and places exceptional IT talent for a variety of verticals and specialized teams.",
    "techsierra’s dedicated tech recruiters will leverage their vast experience in the industry and deep networks of talented candidates on your behalf, customizing targeted talent searches for specific skill sets. It’s OK, you can call us “head-hunters”!",
    "We provide pre-screened, exceptional technology professionals that cannot be found on job boards or other talent pools. Our clients rave about our personal recruitment attention and communication, detailed approach, and well-developed tech professional networks.",
    "We place temporary contract staff for teams of all sizes and lead complex direct hire and technology executive searches nationwide for a number of job opportunities. With regional offices throughout the United States, our local and vast technology candidate network is built, diverse, and immediately ready for us to leverage on your behalf. Simply tell our tech recruiting exerts the background you hope to hire and the combination of skills that you need, and we will take care of the rest. We deliver best-in-class potential candidates and build strong business relationships with our client partners and talent connections.",
  ];
  const paragraphPartTwo = ["Our team connects with, recruits, and delivers the IT, engineering, and creative leaders of tomorrow. Our talented technology candidates are experienced in working with a variety of emerging technologies, programming languages, hardware, platforms, and environments.",
  "We recruit and staff all experience levels within web, mobile, software, network, big data, social, AI, product, emerging technologies, tech support initiatives, and more.",

  "Based on your environment, organizational culture, and hiring preferences we provide specialized, trusted technology and engineering employees that you can rely upon. This is what helps separate us from other staffing firms and makes us a powerful industry leader in matching talented professionals with businesses and organizations in the tech sector."];

  const buttonText = ["HIRE STAFF NOW"];
  const buttonTextTwo = ["START A SEARCH"];
  const buttonTextThree = ["LAUNCH YOUR TECH SEARCH"];
  const buttonLink = "/";

  return (
    <div>
      <Header />
      <Banner />
      <SectionThree />
      <TextBox 
        wrapperCustom="58%"
        images={hireStaff}
        marginLeft='0%'
        width="50%"
        backgroundSize="50% 100%" 
        heading={heading}
        paragraphs={paragraphs}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
        <RecruitingSpecialties />
        <TextBox 
        images={startaSearch}
        marginLeft='50%'
        width="30%"
        backgroundSize="115%" 
        heading={headingTwo}
        paragraphs={paraTwo}
        buttonText={buttonTextTwo}
        buttonLink={buttonLink}
      />
   
      <SliderComponent />
      <TextBox 
        images={techSearch}
        marginLeft='20%'
        width="28%"
        backgroundSize="120%" 
        heading={headingThree}
        paragraphs={paraThreePartOne}
        headingTwo={headingFour}
        paragraphPartTwo= {paragraphPartTwo}
        buttonText={buttonTextThree}
        buttonLink={buttonLink}
        />
        <Footer/>
    </div>
  );
};

export default Home;
