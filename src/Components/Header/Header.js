import React, { useEffect, useState } from "react";
import techsierraLogo from "../../Assets/Images/TechSierraBigFadedLogo.png";
import techsierraSmallLogo from "../../Assets/Images/TechSierraLogo.png";

import {
  NavItems,
  aboutUsDrop,
  applyDrop,
  hireDrop,
  permanentPlacement,
  temporaryStaffingDrop,
} from "./HeaderItems";
import "./Header.css";

function AboutUsDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
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

function TemporaryStaffingDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
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

function PermenrntPlacementDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
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

function ApplyDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
      {applyDrop.map((item) => (
        <li key={item.id}>
          <a href="#fixme" className={item.cName}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HireDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
      {hireDrop.map((item) => (
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
  const [scrollHeigth, setScrollHeight] = useState(0);
  const [showAboutDropDown, setAboutShowDropDown] = useState(false);
  const [showTPDropDown, setTPShowDropDown] = useState(false);
  const [showPermanentPlacement, setShowPermentPlacement] = useState(false);
  const [showApplyDrop, setShowApplyDrop] = useState(false);
  const [showHireDrop, setShowHireDrop] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setScrollHeight(scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`wrapper headerCtn ${
        scrollHeigth > 100 ? "sticky-header-show" : "sticky-header-hide"
      }`}
      onMouseMoveCapture={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
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
              {scrollHeigth > 100 ? (
                <img src={techsierraSmallLogo} alt="Scion Technology" />
              ) : (
                <img src={techsierraLogo} alt="Scion Technology" />
              )}
            </a>
          </li>
          <li>
            <a href="tel:+8884878850">call us: (888) 487-8850</a>
          </li>
        </ul>
      </header>
      <nav
        className={`${
          scrollHeigth > 100
            ? `HideNav ${showNav ? "visibleNav" : ""}`
            : `ShowNav`
        }`}
      >
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
                  <a href="#FIXME">{item.title}</a>
                  {showAboutDropDown && (
                    <AboutUsDown
                      closeDropDown={setAboutShowDropDown}
                      title={item.title}
                    />
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
                  <a href="#FIXME">{item.title}</a>
                  {showTPDropDown && (
                    <TemporaryStaffingDown
                      closeDropDown={setTPShowDropDown}
                      title={item.title}
                    />
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
                  <a href="#FIXME">{item.title}</a>
                  {showPermanentPlacement && (
                    <PermenrntPlacementDown
                      closeDropDown={setShowPermentPlacement}
                      title={item.title}
                    />
                  )}
                </li>
              );
            } else if (item.title === "apply") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setShowApplyDrop(true)}
                  onMouseLeave={() => setShowApplyDrop(false)}
                >
                  <a href="#FIXME">{item.title}</a>
                  {showApplyDrop && (
                    <ApplyDown
                      closeDropDown={setShowApplyDrop}
                      title={item.title}
                    />
                  )}
                </li>
              );
            } else if (item.title === "hire") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setShowHireDrop(true)}
                  onMouseLeave={() => setShowHireDrop(false)}
                >
                  <a href="#FIXME">{item.title}</a>
                  {showHireDrop && (
                    <HireDown
                      closeDropDown={setShowHireDrop}
                      title={item.title}
                    />
                  )}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <a href="#FIXME">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
