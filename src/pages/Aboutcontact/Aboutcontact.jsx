import React from "react";
import CodingLang from "../../components/codingLang/CodingLang";
import "./aboutAssets/Aboutcontact.css";
import img from "./aboutAssets/Assets/Test Photo.avif";
import htmlB from "./aboutAssets/Assets/HTML5_Badge.png";
import CssBadge from "./aboutAssets/Assets/Css Badge.webp";
import JS from "./aboutAssets/Assets/JS.png";
import ReactJpg from "./aboutAssets/Assets/React.png";
import firebase from "./aboutAssets/Assets/Firebase.webp";
import git from "./aboutAssets/Assets/Git.png";
import tipe from "./aboutAssets/Assets/Type.webp";
import visual from "./aboutAssets/Assets/Visual.webp";

const Aboutcontact = () => {
  return (
    <div className="about">
      {/* Left Side of the Page starts here */}
      <div className="left__about">
        <div className="left__about-top">
          <img src={img} alt="" />
          <div className="left__grid-languages">
            <div className="grid-item--wrapper">
              <CodingLang img={htmlB} lang={"HTML"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={CssBadge} lang={"CSS"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={JS} lang={"JavaScript"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={ReactJpg} lang={"React"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={firebase} lang={"Firebase"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={git} lang={"GIT"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={tipe} lang={"TypeScript"} />
            </div>
            <div className="grid-item--wrapper">
              <CodingLang img={visual} lang={"VS Code"} />
            </div>
          </div>
        </div>
        <h3>
          Hi, my Name is <span className="call-to">Taylor</span>, I'm 25 year
          old <span className="call-to">Front End Developer</span> from America.
          After I began my coding journey I realized what a fun challange this
          would be and now I absolutley love how much their is to learn. While
          my coding history is short at the moment, I plan on quickly growing it
          and challenging myself on a daily basis to learn more and grow through
          out the process. Challenging my self often will be a task that I look
          forward too as I will be able to learn more from it each time. And
          being like a sponge each time I create a better and better application
          time will show just what I can do!{" "}
        </h3>
      </div>
      {/*Right side of the page starts here!  */}
      <div className="right__contact">
        {/* Form */}
        <div className="contact-page__form">
          <form onSubmit={null} className="contact__form">
            <h1>Feel free to reach out to me via Email to talk more!</h1>
            <div className="form__item">
              <input
                className="input"
                placeholder="First Name *"
                type="text"
                name="first_name"
                required
              />
            </div>
            <div className="form__item">
              <input
                placeholder={`Last Name *`}
                className="input"
                type="text"
                name="last_name"
                required
              />
            </div>
            <div className="form__item">
              <input
                placeholder="Email *"
                className="input"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="form__item">
              <input
                placeholder="Company"
                className="input"
                type="company"
                name="company"
              />
            </div>
            <div className="form__item">
              <textarea
                className="input"
                placeholder="Message, Phone Number, Contact Person, etc... *"
                type="text"
                name="message"
                required
              />
            </div>

            <button id="contact__submit" className="form__submit">
              Contact Me
            </button>
          </form>
        </div>
        {/* 1. Their Name {2}. Their last name */}
        {/* {2}. Email and phone number */}
        {/* {3}. Company Info *optional* */}
        {/* {4}. Message */}
      </div>
    </div>
  );
};

export default Aboutcontact;
