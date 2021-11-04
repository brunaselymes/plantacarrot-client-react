import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import { api } from '../../api'

function ProjectCard({ projectData, isEditMode = false }) {

    const deleteProject = (id) => {
        // This is our API request, which we need to tell our function to wait for using the key word await
        api(`projects/${id}`, { method: "delete" })
    }


    return (
        <div className="card-wrapper">
            <div className="project-card">
                <Link to={`/project/${projectData.id}`}>
                    <img src={projectData.image ? projectData.image : "../content/carrot.jpg"} alt="project " />
                    <h3 className="project-title--card">{projectData.title}</h3>

                </Link>
            </div>
            {isEditMode
                && <div className="management-buttons">
                    <button onClick={() => deleteProject(projectData.id)} className="mgt-btn">Delete project 🗑️</button>
                    {/* <button onClick={() => updateProject(projectData.id)} className="mgt-btn">Update project ✏️</button> */}
                </div>}


        </div>);
}

export default ProjectCard;
