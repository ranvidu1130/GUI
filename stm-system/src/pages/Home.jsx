import React from "react";
import "../pages/home.css";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";

import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.jpeg";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />
      <div className="welcome-page">
        <br />
        <br />
        <header className="welcome-header">
          <h2>Welcome to</h2>
          <h1>AVRO Education</h1>
          <p>Your gateway to quality learning and development!</p>
        </header>
        <br />
        <br />
        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            At AVRO Education, we aim to empower individuals with knowledge,
            skills, and confidence to achieve their dreams. Our vision is to
            create a world where education is accessible, engaging, and
            transformative, enabling lifelong learning and innovation for a
            better tomorrow.
          </p>
        </section>
        {/* <br />
        <br /> */}
        {/* <section className="images-section">
          <div className="slideshow-container">
            <input type="radio" name="slide" id="slide1" defaultChecked />
            <input type="radio" name="slide" id="slide2" />
            <input type="radio" name="slide" id="slide3" />
            <div className="slides">
              <div className="slide s1">
                <img
                  src={home1}
                  alt="Learning Made Simple"
                  className="welcome-image"
                />
              </div>
              <div className="slide s2">
                <img
                  src={home2}
                  alt="Empowering Education"
                  className="welcome-image"
                />
              </div>
              <div className="slide s3">
                <img
                  src={home3}
                  alt="Future Starts Here"
                  className="welcome-image"
                />
              </div>
            </div>
            <div className="navigation-dots">
              <label htmlFor="slide1" className="dot"></label>
              <label htmlFor="slide2" className="dot"></label>
              <label htmlFor="slide3" className="dot"></label>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
