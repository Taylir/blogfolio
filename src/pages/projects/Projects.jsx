import React from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";
import "./proAssets/Projects.css";
import blogfolio from "../../assets/blogfolio.png";
import treko from "../../assets/treko.png";
import library from "../../assets/e-commerce.png";
import ogPortFolio from "../../assets/ogport.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1>
          These are some of the projects I have done and like this website they
          are all being worked on a daily slowly improving them each time.
        </h1>
        <div className="project__grid">
          <ProjectCard
            img={blogfolio}
            title={"E-Portfolio"}
            langs={"HTML5, CSS3, JS, GIT, Moch API, React"}
            description={
              "This portfolio you are currently on is one of my own made with out a template what so ever! Kind of just went with it and play around with it often. And will be using it as a blog space to practice!"
            }
            link1={"https://github.com/Taylir/blogfolio"}
          />
          <ProjectCard
            img={treko}
            title={"Treko"}
            langs={"HTML5, CSS3, JS, GIT, React"}
            description={
              "Currently working on a website for a family friend of mine and will be keeping this here as it will be a project I am working on and updating."
            }
            link1={"https://github.com/Taylir/treko"}
            link2={"https://treko.vercel.app/"}
          />
          <ProjectCard
            img={library}
            title={"Book Store"}
            langs={"HTML5, CSS3, JS, GIT, Moch Api, React, .Map, Axios"}
            description={
              "A project I did to both practice and offer as a template to others including working cart and dynamically displaying book store depending on stock of the store"
            }
            link1={"https://github.com/Taylir/e-commerce"}
            link2={"https://e-commerce-omega-snowy.vercel.app/"}
          />
          <ProjectCard
            img={ogPortFolio}
            title={"Original Portfolio"}
            langs={"HTML5, CSS3, JS, GIT, React"}
            description={
              "This was my original portfolio, on here is some of the clones I did such as google search, twitter, discord, hulu and more. These are incomplete as I was using them for practice but plan on making true clones in the future!"
            }
            link1={"https://github.com/Taylir/betterportfolio"}
            link2={"https://taylir.github.io/betterportfolio/"}
          />
          <div className="projects__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
