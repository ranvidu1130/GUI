import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom';
//profile icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
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



function Navbar2() {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Avro Education Logo" />
        </a>
        <div className="name">AVRO EDUCATION CENTER</div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links" style={{marginRight:40,fontSize: 18}}>
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#classes">Enrolled Classes</a>
        <a href="#about">About Us</a>
        
      </div>

      {/* Authentication Buttons */}
      <div className="auth-buttons" style={{fontSize: 18}}>
        
        <a href="#"><div style={{ fontSize: '20px', color: '#2196F3',alignContent: 'center',alignItems: 'center',display: 'flex',justifyContent: 'center'}}>
        <FontAwesomeIcon icon={faUserCircle} />
        </div>Profile</a>
        
      </div>
    </div>
  );
}

export default Navbar2;
