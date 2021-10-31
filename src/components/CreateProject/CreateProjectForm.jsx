import React, { useState, useEffect } from 'react';
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

    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}categories/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setCategoriesList(data);
            });
    }, []);

    let categoryOption = categoriesList.map((category) =>
        <option key={category.name}>{category.name}</option>
    );

    return (
        <div className="create-page">
            <div className="create-form-main">
                <p className="pagetitle--project" align="center">Create a project</p>
                <form onSubmit={handleSubmit} className="form2">
                    <div className="input-wrapper--createproject">


                        <input className="field--createproject" type="text" id="title" placeholder="What is the title of your project?" onChange={handleChange} />

                        <div>

                            <input className="field--createproject" type="text" id="image" placeholder="Enter your project image URL" onChange={handleChange} />
                        </div>
                        <div>

                            <input className="field--createproject" type="text" id="goal" placeholder="What is your project goal $ ?" onChange={handleChange} />
                        </div>
                        <div>

                            <input className="field--createproject" type="date" id="close_date" placeholder="When does the project close?" onChange={handleChange} />
                        </div>
                        <div>

                            <textarea className="field--createproject" rows="5" id="description" placeholder="Enter a description for your project" onChange={handleChange} ></textarea>
                        </div>
                        <div>

                            <input className="field--createproject" type="date" id="created_date" placeholder="" onChange={handleChange} />
                        </div>
                        <div>
                            <select className="field--createproject" id="category" placeholder="category">
                                {categoryOption}
                            </select>
                            {/* <input className="field--createproject" type="text" id="category" placeholder="category" onChange={handleChange} /> */}
                        </div>
                        <button className="submit--createproject" align="center" type="submit" >Create your project</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default ProjectForm;