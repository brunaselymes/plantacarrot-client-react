import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Register.css'

function RegisterForm() {
    const history = useHistory();
    const [userInfo, setUser] = useState({});
    const handleChange = (event) => {
        let { id, value } = event.target;
        setUser((prevProject) => {
            return {
                ...prevProject,
                [id]: value,
            };
        });
    };
    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}users/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
            .then((response) => {
                history.push("/");
            })
    };
    return (
        <div className="login-page">
            <div className="main--register">
                <p className="pagetitle--register" align="center">Create your account</p>
                <form onSubmit={handleSubmit} className="form3">
                    <div>
                        <label>First Name</label>
                        <input className="field--register" type="text" id="first_name" placeholder="Enter your first name" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input className="field--register" type="text" id="last_name" placeholder="Enter your last name" onChange={handleChange} />
                    </div>
                    <div>
                        <label >Email</label>
                        <input className="field--register" type="text" id="email" placeholder="Enter your email" onChange={handleChange} />
                    </div>
                    <div>
                        <label >Bio</label>
                        <input className="field--register" type="text" id="bio" placeholder="Tell us about you" onChange={handleChange} />
                    </div>
                    <div>
                        <label >Photo</label>
                        <input className="field--register" type="text" id="image" placeholder="Share a photo of yourself" onChange={handleChange} />
                    </div>
                    <div>
                        <label >Username</label>
                        <input className="field--register" type="text" id="username" placeholder="Enter a username" onChange={handleChange} />
                    </div>
                    <div>
                        <label >Password</label>
                        <input className="field--register" type="password" id="password" placeholder="Enter your password" onChange={handleChange} />
                    </div>
                    <button className="submit--register" align="center" type="submit" onClick={handleSubmit}>Register</button>
                </form>
            </div >
        </div>
    )
}

export default RegisterForm;