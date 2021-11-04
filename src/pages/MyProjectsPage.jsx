import React, { useState, useEffect } from 'react'
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { api } from "../api";
import { Link } from 'react-router-dom';

const MyProjectsPage = () => {

    //list user's profile details and projects, ability to delete and update projects to go here

    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        api("projects/?only_user=true")
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (projectList.length ?
        <div className="page-container">
            <h2 className="page-title">Manage your projects: </h2>
            <div id="project-list">
                {
                    projectList.map((projectData, key) => {
                        return (
                            <ProjectCard key={key} projectData={projectData} isEditMode={true} />
                        );
                    })
                }
            </div>
        </div>
        : <div className="page-container">
            <h3 className="page-title">You Don't have projects to display yet 😞</h3>
            <Link className="page-title--btn" to="/createProject">Create a Project</Link>
        </div>);
}

export default MyProjectsPage


