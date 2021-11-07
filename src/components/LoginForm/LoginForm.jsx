import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css'

function LoginForm() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState(false)

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
                        setError(false)
                        window.localStorage.setItem("token", response.token);
                        window.location = `${window.location.origin}/`
                        history.push("/");
                    } else {

                        setError(true)
                    }
                })
        }
        else {
            setError(true)
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
                    {
                        error && <div style={{ color: `red`, textAlign: `center`, marginBottom: `1em` }}>Wrong username/password </div>
                    }
                    <button className="submit" align="center" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div >
        </div>
    )
}

export default LoginForm;