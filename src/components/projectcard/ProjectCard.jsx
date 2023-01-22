import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, title, langs, description }) => {
  return (
    <div className="project-card">
        <div className="project__descriptors">
          <h1>{title}</h1>
          <h3>{langs}</h3>
          <h4>{description}</h4>
          <img className="not" src={img} alt="" />
        </div>
    </div>
  );
};

export default ProjectCard;
