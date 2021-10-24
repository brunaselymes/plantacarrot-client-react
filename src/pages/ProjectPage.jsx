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
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {new Date(projectData.created_date).toDateString()}</h3>
            <h3>{`Status: ${projectData.is_active ? "Open" : "Closed"}`}</h3>
            <p>{projectData.description}</p>
            <h4>Our goal is to raise ${projectData.goal}</h4>
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