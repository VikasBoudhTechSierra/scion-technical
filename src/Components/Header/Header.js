import React, { useState } from "react";
import techsierraSmallLogo from "../../Assets/Images/TechSierraLogo.png";
import { NavItems, applyDrop } from "./HeaderItems";
import { Link } from "react-router-dom";
import "./Header.css";

function ApplyDown({ closeDropDown, title }) {
  return (
    <ul
      className={`services-subMenu ${title}`}
      onMouseLeave={() => closeDropDown(false)}
    >
      {applyDrop.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className={item.cName}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const [showApplyDrop, setShowApplyDrop] = useState(false);

  return (
    <div className={`wrapper headerCtn ${"sticky-header-hide"}`}>
      <header>
        <ul className="headerLogoUl">
          <li className="scionLogo">
            <Link to={"/"} title="Tech Sierra">
              <img
                src={techsierraSmallLogo}
                className="techSierraSmallLogo"
                alt="Tech Sierra"
              />
            </Link>
          </li>
        </ul>
      </header>
      <nav className={`${"visibleNav"}`}>
        <ul className="nav-items">
          {NavItems.map((item) => {
            if (item.title === "apply") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseMoveCapture={() => setShowApplyDrop(true)}
                  onMouseLeave={() => setShowApplyDrop(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {showApplyDrop && (
                    <ApplyDown
                      closeDropDown={setShowApplyDrop}
                      title={item.title}
                    />
                  )}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
