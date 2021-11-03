import React, { useState, useEffect } from 'react'
import { oneProject } from "../data";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
                console.log(data)
            })
    })

    return (
        <div className="page-container">
            <h2 className="page-title">{projectData.title}</h2>
            <h3 className="project-title--card">Created: {new Date(projectData.created_date).toDateString()}</h3>
            <h3 className="project-title--card">{`Status: ${projectData.is_active ? "Open" : "Closed"}`}</h3>
            <p>{projectData.description}</p>
            <h4>Our goal is to raise ${projectData.goal} 🥕</h4>
            <img src={projectData.image} alt="project ilustration" />
            <h3>Pledges:</h3>
            <ul>{oneProject.pledges.map((pledgeData, key) => {
                return (
                    <li>{pledgeData.amount} from {pledgeData.supporter}</li>);
            })}</ul>
        </div>
    );
}

export default ProjectPage