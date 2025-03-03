import React from "react";
import "../pages/home.css";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";

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
        <br />
        <br />
        <section className="vision-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality, innovative, and accessible
            education that fosters growth and success. We are committed to
            creating a learning environment that inspires curiosity, creativity,
            and excellence, and to guiding individuals on their journey of
            lifelong learning and personal development.
          </p>
        </section>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Home;
