import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//profile icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/studentdashboard">
          <img src={logo} alt="Avro Education Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links" style={{marginRight:40,fontSize: 18}}>
        <Link to="/studentdashboard">Dashboard</Link>
        <Link to="/classes"> Classes</Link>
        <Link to="/enrolledclasses">Enrolled Classes</Link>

        <Link to="/aboutus">About Us</Link>
        
      </div>

      {/* <div className="auth-buttons" id='icon-color'>
        
        <Link><div  style={{ fontSize: '34px',alignItems: 'center',display: 'flex',justifyContent: 'center'}}>
        <FontAwesomeIcon icon={faUserCircle} />
        </div></Link>
        
      </div> */}

      <div className="relative">
            <div
              className="auth-buttons"
              id="icon-color"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                style={{
                  fontSize: "34px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </div>

            {isOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigate("/profile")} className="dropdown-item">
                  Profile
                </button>
                <button
                  onClick={() => console.log("Logout function here")}
                  className="dropdown-item logout-btn"
                >
                  Logout
                </button>
              </div>
            )}
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


