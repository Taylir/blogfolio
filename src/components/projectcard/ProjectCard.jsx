import { GitHub, InsertLink } from "@mui/icons-material";
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, title, langs, description, link1, link2 }) => {
  return (
    <div className="project-card">
      <div className="project__descriptors">
        <h1>{title}</h1>
        <h3>{langs}</h3>
        <h4>{description}</h4>
        <div className="project__links">
          <a href={link1} target="_blank" rel="noreferrer" className="project__link">
            <GitHub />
          </a>
          {link2 && (
            <a className="project__link" rel="noreferrer" target="_blank" href={link2}>
              <InsertLink />
            </a>
          )}
        </div>
        <img className="not" src={img} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
