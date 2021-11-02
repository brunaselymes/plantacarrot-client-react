import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function projectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image ? projectData.image : "../content/carrot.jpg"} alt="project " />
                <h3 className="project-title--card">{projectData.title}</h3>
            </Link>
        </div>);
}

export default projectCard;
