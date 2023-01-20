import React from "react";
import "./navAssets/Nav.css";
import Logo from "./navAssets/Logo.png";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        {/* Nav Left */}
        <div className="nav__left">
          <div className="nav__logo-wrapper">
            <img src={Logo} alt="" />
          </div>
        </div>

        {/* Nav Right */}
        <div className="nav__right">
          <ul>
            <li>Practice Blog</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
