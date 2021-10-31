import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const navSlide = () => {

        setNavbarOpen(!navbarOpen)
    }
    return (
        <nav>
            <div className="logo">
                <Link className="logo" to="/">Plant a Carrot 🥕</Link>
            </div>
            <div className={`nav-links ${navbarOpen ? " nav-active" : ""}`}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/createProject">Create Project</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/login">Register</Link>

            </div>
            <div className={`burger`} onClick={navSlide}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>



        </nav>
    );
}

export default Nav;