import React from "react";
import "./pages/student/student.css";
import { FaFacebook  } from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <h3>Avro Education</h3>
          <img src={logo} alt="My Pic" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
          <p>
            avro@gmail.com <br />
            Contact us: +947163827363 <br />
            &copy;AVROEDUCATION
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" className="icon" target="_blank">
          <FaFacebook  />
          </a>
          <a href="https://www.instagram.com" className="icon" target="_blank">
          <FaInstagram  />
          </a>
          <a href="https://www.youtube.com" className="icon" target="_blank">
          <TiSocialYoutube />
          </a>
          <a href="https://www.linkedin.com" className="icon" target="_blank">
          <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
