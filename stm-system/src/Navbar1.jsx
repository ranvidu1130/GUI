import React from 'react';
import "./Navbar.css";
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom';


function Navbar1() {
    return (
        <div className="navbar">
            {/* Left-aligned logo */}
            <div className="logo">
                <a href="#home">
                <Link to="/"><img src={logo} alt="Avro Education Logo" /></Link>
                </a>
                {/* <div className="name">AVRO EDUCATION CENTER</div> */}
            </div>
            
            {/* Right-aligned auth buttons */}
            <div className="auth-buttons" id='auth-buttons'>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar1;
