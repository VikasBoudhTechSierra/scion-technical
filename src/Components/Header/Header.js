import React from "react";
import "./Header.css";
import ScionLogo from "../../Assets/Images/scion-logo.png";
const header = () => {
    return (
        <div className="wrapper headerCtn">
           <header>
            <ul>
                <li>
                    <div>
                        <a href="#FIXME" title="Search Jobs">search jobs</a> | <a href="#FIXME" title="Hire Staff" >hire staff</a>
                    </div>
                </li>
                <li className="scionLogo">
                    <a href="#FIXME" title="Scion Technology"><img src={ScionLogo} alt="Scion Technology" /></a>
                    
                </li>
                <li>
                    <a href="tel:+8884878850">call us: (888) 487-8850</a>
                </li>
            </ul>
           </header>
           <nav>
            <ul>
                <li>
                    <a href="#FIXME" title="About us">about us</a>
                </li>
                <li>
                    <a href="#FIXME" title="Temporary staffing">Temporary staffing</a>
                </li>
                <li>
                    <a href="#FIXME" title="Permanent Placement">Permanent Placement</a>
                </li>
                <li>
                    <a href="#FIXME" title="Executive Search">Executive Search</a>
                </li>
                <li>
                    <a href="#FIXME" title="Apply">Apply</a>
                </li>
                <li>
                    <a href="#FIXME" title="Hire">Hire</a>
                </li>
                <li>
                    <a href="#FIXME" title="Contact Us">Contact Us</a>
                </li>
            </ul>
           </nav>
        </div>
    );
};

export default header;