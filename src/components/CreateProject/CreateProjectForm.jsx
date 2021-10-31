import React, { useState } from 'react';
import './CreateProjectForm.css'

function ProjectForm() {

    const [projectInfo, setProjectInfo] = useState({});
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectInfo((prevProject) => {
            return {
                ...prevProject,
                [id]: value,
            };
        });
    };
    const postData = () => {
        console.log("I'm posting a project to your API")
        const token = window.localStorage.getItem("token")
        console.log(token)
        return fetch(`${process.env.REACT_APP_API_URL}projects/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json", "Authorization": `Token ${token}` },
                body: JSON.stringify(projectInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.localStorage.getItem('token')) {
            postData()
                .then((response) => {
                    console.log('------response from my API --------')
                })
        }
    };
    return (
        <div className="create-page">
            <div className="create-form-main">
                <p className="" align="center">Create a project</p>
                <form onSubmit={handleSubmit} className="form1">
                    <div>

                        <input className="" type="text" id="title" placeholder="Enter your project title" onChange={handleChange} />
                    </div>
                    <div>

                        <input className="" type="text" id="image" placeholder="Enter your project image URL" onChange={handleChange} />
                    </div>
                    <div>

                        <input className="" type="text" id="goal" placeholder="What is your goal? $ " onChange={handleChange} />
                    </div>
                    <div>

                        <input className="" type="date" id="close_date" placeholder="When does the project close?" onChange={handleChange} />
                    </div>
                    <div>

                        <textarea className="" id="description" placeholder="Entera description for your project" onChange={handleChange} ></textarea>
                    </div>
                    <div>

                        <input className="" type="date" id="created_date" placeholder="" onChange={handleChange} />
                    </div>
                    <div>

                        <input className="" type="text" id="user" placeholder="Owner of this project" onChange={handleChange} />
                    </div>
                    <div>

                        <input className="" type="text" id="category" placeholder="category" onChange={handleChange} />
                    </div>
                    <button className="" align="center" type="submit" >Create your project</button>
                </form>
            </div >
        </div>
    )
}

export default ProjectForm;