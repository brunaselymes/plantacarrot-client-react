import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Register.css'

function LoginForm() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(credentials),
            }).then(i => i.json());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData()
                .then((response) => {
                    if (response.token) {
                        window.localStorage.setItem("token", response.token);
                        history.push("/");
                    } else {
                        alert(response.non_field_errors[0])
                    }
                })
        }
    };

    return (
        <div className="login-page">
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form onSubmit={handleSubmit} className="form1">
                    <div>

                        <input className="field" type="text" id="username" placeholder="Enter username" onChange={handleChange} />
                    </div>
                    <div>

                        <input className="field" type="password" id="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <button className="submit" align="center" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div >
        </div>
    )
}

export default LoginForm;