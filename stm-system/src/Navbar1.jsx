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
                <img src={logo} alt="Avro Education Logo" />
                </a>
                <div class="name">AVRO EDUCATION CENTER</div>
            </div>
            
            {/* Right-aligned auth buttons */}
            <div className="auth-buttons">
                {/* <Link to="../signin">Sign In</Link>
                <Link to="../signup">Sign Up</Link> */}
                <a href="./pages/signin">Sign In</a>
                <a href="/signup">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar1;
