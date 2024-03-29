import React from "react";
import "./RecrutingSpecialist.css";
import { TiPlane } from "react-icons/ti";
import { BsFolder2 } from "react-icons/bs";
import { TiDeviceTablet } from "react-icons/ti";
import { MdOutlineMonitor } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { CgBriefcase } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa6";
import { BsKeyboard } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";

const RecruitingSpecialties = () => {
  const Data = [
    {
      id: 1,
      header: "Technology Leadership",
      text: "CEO, CIO, CTO, CxO, VP, Director Search. Nationwide + Local Technology Network",
      icon: TiPlane,
    },
    {
      id: 2,
      header: "Engineering",
      text: "Officer, VP, Director, Architect, Developer, Engineer, Programmer and More",
      icon: BsFolder2,
    },
    {
      id: 3,
      header: "WEB/APPLICATIONS",
      text: "VP/Director of Web Applications, Manager, Web Applications Developer, Mobile Developer",
      icon: TiDeviceTablet,
    },
    {
      id: 4,
      header: "Data & AI",
      text: "Chief Data Officer, AI Officer, VP/Director of Informatics, Data Scientist, Programmer/Analyst",
      icon: MdOutlineMonitor,
    },
    {
      id: 5,
      header: "Cybersecurity",
      text: "Chief Information Security Officer (CISO), VP/Director of IT Security, Architect, Engineer, Analyst",
      icon: MdGroups,
    },
    {
      id: 6,
      header: "IT, NETWORK & SUPPORT",
      text: "VP, Director, Infrastructure Architect, Network & NOC Engineer, Helpdesk, Tech Support",
      icon: CgBriefcase,
    },
    {
      id: 7,
      header: "Sales & Success",
      text: "VP of Sales/Success, Director of Sales/Success, Customer Success Manager, Technology Sales",
      icon: FaChartLine,
    },
    {
      id: 8,
      header: "Creative & Gaming",
      text: "VP, Creative Director, Producer, Front End, UI, UX, Product Designer, Animator, Rigger, CG, Artist",
      icon: BsKeyboard,
    },
    {
      id: 9,
      header: "Product & Project",
      text: "Chief Product Officer, VP/Director of Product, Technical Project Manager, Manager, Assistant",
      icon: HiOutlineBookOpen,
    },
  ];

  return (
    <div className="Recruiting_specialist">
      <div className="wrapper">
        <div className="recruiting_header">
          <h1>Our Recruiting Specialties</h1>
        </div>

        <div className="recruiter_card">
          {Data.map((item) => (
            <div key={item.id} className="main_card">
              <div className="card_header">
                <div className="icon_section">
                  <span>{item.icon && <item.icon />}</span>
                </div>
                <div className="text_header">
                  <h4>{item.header}</h4>
                </div>
              </div>
              <div className="card_footer">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitingSpecialties;
