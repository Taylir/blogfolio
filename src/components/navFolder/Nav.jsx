import React from "react";
import "./navAssets/Nav.css";
import Logo from "./navAssets/Logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        {/* Nav Left */}
        <div className="nav__left">
          <div className="nav__logo-wrapper">
            <img onClick={() => navigate("/")} src={Logo} alt="" />
          </div>
        </div>

        {/* Nav Right */}
        <div className="nav__right">
          <ul>
            <li onClick={() => navigate("/")}>Practice Blog</li>
            <li onClick={() => navigate("/projects")}>Projects</li>
            <li onClick={() => navigate("/about-contact")}>About Me</li>
            <li onClick={() => navigate("/about-contact")}>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
