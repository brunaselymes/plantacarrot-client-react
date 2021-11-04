import React, { useState, useEffect } from 'react'
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { api } from "../api";

const MyProjectsPage = () => {

    //list user's profile details and projects, ability to delete and update projects to go here

    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        api("projects/?only_user=true")
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
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
    );
}

export default MyProjectsPage


