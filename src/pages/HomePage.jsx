import React, { useState, useEffect } from 'react'
import ProjectCard from "../components/ProjectCard/ProjectCard";


const HomePage = () => {
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
        <div className="page-container">
            <h2 className="page-title">Find a project you want to back</h2>
            <ul id="project-list">
                {
                    projectList.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData} />;
                    })
                }
            </ul>
        </div>
    );
}

export default HomePage
