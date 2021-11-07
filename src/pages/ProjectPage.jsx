import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { api } from '../api'

const ProjectPage = () => {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const pledges = await Promise.all((await api(`pledges/?project_id=${id}`))
                .map(async pledge => {
                    pledge._user = null;
                    if (pledge.user) {
                        pledge._user = await api(`users/${pledge.user}`)
                    }
                    return pledge
                }))
            const project = await api(`projects/${id}`)
            setProjectData({ ...project, pledges: pledges })
        }
        return fetchData()
    }, [])

    return (
        <div className="page-container">
            <h2 className="page-title">{projectData.title}</h2>
            <h3 className="project-title--card">Created: {new Date(projectData.created_date).toDateString()}</h3>
            <h3 className="project-title--card">{`Status: ${projectData.is_active ? "Open" : "Closed"}`}</h3>
            <p>{projectData.description}</p>
            <h4>Our goal is to raise ${projectData.goal} 🥕</h4>
            <img className="img--project-page" src={projectData.image} alt="project ilustration" />
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (<li key={pledgeData.id}>${pledgeData.amount}🥕 from {pledgeData.user ? pledgeData._user.username : "Anonymous"}</li>);
                })}
            </ul>

        </div>
    );
}

export default ProjectPage