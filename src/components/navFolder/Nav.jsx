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
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/practice-blog")}>Practice Blog</li>
            <li onClick={() => navigate("/projects")}>Projects</li>
            <li onClick={() => navigate("/about-contact")}>About-Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
