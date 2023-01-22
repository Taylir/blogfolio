import React from "react";
import "./landingAssets/Landing.css";
import { Link } from "react-router-dom";

import {
  ArrowDownwardRounded,
  ArrowForwardRounded,
  EmailRounded,
  PlaylistAddCheckRounded,
  ViewModuleRounded,
} from "@mui/icons-material";

const Landing = () => {
  const scaleFactor = 1 / 20;

  function moveClouds(event) {
    const clouds = document.querySelector(".cloud");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    clouds.style.transform = `translate(${x}px, ${y}px)`;
  }

  return (
    <div className="landing" onMouseMove={moveClouds}>
      <div className="landing__header">
        <h1>
          Hey, I'm <span className="call-to">Taylor</span> 👋, <br /> a{" "}
          <span className="call-to">Frontend Software Engineer</span>.
        </h1>
      </div>
      <div className="about-me">
        <h4>
          I'm a 25 year-old American{" "}
          <span className="call-to">Frontend Software Engineer</span> with a
          strong passion for developing websites with great user interface and
          user experience. I currently work on extremely difficult engineering
          problems as well as working and learning with a team consisiting of
          some of the most <span className="call-to"> talented</span> and
          <span className="call-to"> experienced</span> software engineers every
          day.
        </h4>
      </div>
      <div className="contact-me">
        <h5>
          Feel free to contact me by clicking this. <pre> </pre>{" "}
          <span className="pointTo">
            <ArrowForwardRounded />
          </span>{" "}
        </h5>
      </div>
      <div className="landing__projects">
        <h5>
          And check out some of my projects with this link here. <pre> </pre>{" "}
          <span className="pointTo">
            <ArrowForwardRounded />
          </span>{" "}
        </h5>
      </div>
      <div className="blog-info">
        <h3 className="landing__blog-h3">
          Here you can see some of the Frontend Engineering Problems I am
          testing myself on a daily basis to stay up to date and making sure I
          keep a strong foundation! <br />{" "}
          <div className="arrow-down">
            <ArrowDownwardRounded />
          </div>
        </h3>
      </div>
      <Link to={"/about-contact"} className="mail-me">
        {" "}
        <EmailRounded />
      </Link>
      <Link to={"/projects"} className="project-me">
        {" "}
        <ViewModuleRounded />
      </Link>
      <div className="landing__blog-projects">
        <PlaylistAddCheckRounded />
      </div>
      <div className="sky">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="cloud"></div>
      <div className="road"></div>
    </div>
  );
};

export default Landing;
