import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom';
//profile icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar2() {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/Home">
          <img src={logo} alt="Avro Education Logo" />
        </Link>
        {/* <div className="name">AVRO EDUCATION CENTER</div> */}
      </div>

      {/* Navigation Links */}
      <div className="nav-links" style={{marginRight:40,fontSize: 18}}>
        <Link to="/studentdashboard">Dashboard</Link>
        <Link to="/studentclasses">Classes</Link>
        <Link to="/classes">Enrolled Classes</Link>
        <Link to="/aboutus">About Us</Link>
        
      </div>

      {/* Authentication Buttons */}
      <div className="auth-buttons" id='icon-color'>
        
        <Link><div  style={{ fontSize: '34px',alignItems: 'center',display: 'flex',justifyContent: 'center'}}>
        <FontAwesomeIcon icon={faUserCircle} />
        </div></Link>
        
      </div>
    </div>
  );
}

export default Navbar2;


// function Navbar2() {
//   return (
//     <div className="navbar">
//       {/* Left-aligned logo */}
//       <div className="logo">
//             <a href="#home">
//             <img src={logo} alt="Avro Education Logo" />
//             </a>
//             <div className="name">AVRO EDUCATION CENTER</div>
//         </div>
//       {/* Right-aligned buttons */}
//       <div className="nav-buttons">
//         <a href="#home">Home</a>
//         <a href="#classes">Classes</a>
//         <a href="#about">About Us</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


