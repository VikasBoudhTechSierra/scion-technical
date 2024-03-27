import React, { useState } from "react";
import techsierraLogo from "../../Assets/Images/scion-logo.png";

import {
  NavItems,
  aboutUsDrop,
  permanentPlacement,
  temporaryStaffingDrop,
} from "./HeaderItems";
import "./Header.css";

function AboutUsDown({ closeDropDown }) {
  return (
    <ul className="services-subMenu" onMouseLeave={() => closeDropDown(false)}>
      {aboutUsDrop.map((item) => (
        <li key={item.id}>
          <a href="#fixme" className={item.cName}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function TemporaryStaffingDown({ closeDropDown }) {
  return (
    <ul className="services-subMenu" onMouseLeave={() => closeDropDown(false)}>
      {temporaryStaffingDrop.map((item) => (
        <li key={item.id}>
          <a href="#fixme" className={item.cName}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function PermenrntPlacementDown({ closeDropDown }) {
  return (
    <ul className="services-subMenu" onMouseLeave={() => closeDropDown(false)}>
      {permanentPlacement.map((item) => (
        <li key={item.id}>
          <a href="#fixme" className={item.cName}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const [showAboutDropDown, setAboutShowDropDown] = useState(false);
  const [showTPDropDown, setTPShowDropDown] = useState(false);
  const [showPermanentPlacement, setShowPermentPlacement] = useState(false);

  return (
    <div className="wrapper headerCtn">
      <header>
        <ul>
          <li>
            <div>
              <a href="#FIXME" title="Search Jobs">
                search jobs
              </a>{" "}
              |{" "}
              <a href="#FIXME" title="Hire Staff">
                hire staff
              </a>
            </div>
          </li>
          <li className="scionLogo">
            <a href="#FIXME" title="Scion Technology">
              <img src={techsierraLogo} alt="Scion Technology" />
            </a>
          </li>
          <li>
            <a href="tel:+8884878850">call us: (888) 487-8850</a>
          </li>
        </ul>
      </header>
      <nav>
        <ul className="nav-items">
          {NavItems.map((item) => {
            if (item.title === "about us") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setAboutShowDropDown(true)}
                  onMouseLeave={() => setAboutShowDropDown(false)}
                >
                  <a href="#fixme">{item.title}</a>
                  {showAboutDropDown && (
                    <AboutUsDown closeDropDown={setAboutShowDropDown} />
                  )}
                </li>
              );
            } else if (item.title === "temporary staffing") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setTPShowDropDown(true)}
                  onMouseLeave={() => setTPShowDropDown(false)}
                >
                  <a href="#fixme">{item.title}</a>
                  {showTPDropDown && (
                    <TemporaryStaffingDown closeDropDown={setTPShowDropDown} />
                  )}
                </li>
              );
            } else if (item.title === "permenrnt placement") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setShowPermentPlacement(true)}
                  onMouseLeave={() => setShowPermentPlacement(false)}
                >
                  <a href="#fixme">{item.title}</a>
                  {showPermanentPlacement && (
                    <PermenrntPlacementDown
                      closeDropDown={setShowPermentPlacement}
                    />
                  )}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <a href="#fixme">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
