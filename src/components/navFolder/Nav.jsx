import React, { useEffect, useState } from "react";
import "./navAssets/Nav.css";
import Logo from "./navAssets/Logo.png";
import { useNavigate } from "react-router-dom";
import Navsmall from "./Navsmall";
import pdfResume from "../../assets/Taylor Resume 1-17-2023.docx.pdf";

import {
  FilePresent,
  GitHub,
  LinkedIn,
  MenuRounded,
} from "@mui/icons-material";

const Nav = () => {
  const navigate = useNavigate();
  const [smallNav, setSmallNav] = useState(false);
  const [smallNavToggle, setSmallNavToggle] = useState({});

  function toggleSmallNav() {
    setSmallNav(!smallNav);
    if (!smallNav) {
      smallNavToggle.classList += " display-small__nav";
    } else {
      smallNavToggle.classList.remove("display-small__nav");
    }
  }

  function logoPress() {
    if (smallNav) {
      smallNavToggle.classList.remove("display-small__nav");
      setSmallNav(false);
    }
  }

  useEffect(() => {
    setSmallNavToggle(document.querySelector(".small__nav--menu"));
  }, [smallNav, smallNavToggle]);

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        {/* Nav Left */}
        <div className="nav__left">
          <div className="nav__logo-wrapper">
            <img
              onClick={() => {
                navigate("/");
                logoPress();
              }}
              src={Logo}
              alt=""
            />
          </div>
          <a
            href="https://www.linkedin.com/in/taylor-lirot-232123262/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <LinkedIn />
          </a>
          <a href={pdfResume} target={"_blank"} rel="noreferrer">
            {" "}
            <FilePresent />
          </a>
          <a
            href="https://github.com/Taylir"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <GitHub />
          </a>
        </div>

        {/* Nav Right */}
        <div className="nav__right">
          <div className="nav__right-small">
            <div onClick={toggleSmallNav} className="small-nav__burger">
              <MenuRounded className="nav__menu" />
            </div>
            <div className="small__nav--menu">
              <Navsmall closeMenu={toggleSmallNav} />
            </div>
          </div>
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
