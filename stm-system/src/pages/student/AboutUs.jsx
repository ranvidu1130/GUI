import React from "react";
import "./student.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import Footer from "../../Footer";
import Navbar2 from "../../Navbar2";
// import pic from "../../assets/pic.jpg";

function AboutUs() {
  return (
    <>
      <Navbar2 />
      <div className="abt">
        <br /><br /><br /><br /><br />
        <div className="topic">Avro Education</div>
        <br />
        <br />

        <div className="desc">
          At AVRO Education Center, we are dedicated to empowering learners with
          the knowledge, skills, and confidence needed to excel in today’s
          competitive world. As a premier educational institute, we offer a wide
          range of courses tailored to meet the diverse learning needs of our
          students. Our mission is to provide high-quality, innovative, and
          accessible education that fosters growth and success. With a team of
          experienced educators, modern teaching methods, and state-of-the-art
          facilities, we aim to create a learning environment that inspires
          curiosity, creativity, and excellence. At AVRO Education Center, we
          believe that education is the key to unlocking potential and
          transforming lives. Whether you're a student aiming to achieve
          academic success, a professional seeking to enhance your skills, or an
          individual pursuing lifelong learning, AVRO Education Center is here
          to guide you every step of the way. Join us at AVRO Education Center,
          where learning meets opportunity, and let’s build a brighter future
          together! 
        </div>

        <div className="card1">
          <div>
            <span className="number">+18000</span>
            <span className="label">Students</span>
          </div>
          <div>
            <span className="number">+100</span>
            <span className="label">Classes</span>
          </div>
          <div>
            <span className="number">+40</span>
            <span className="label">Teachers</span>
          </div>
        </div>
        <br />

        {/* <div className="but">
        <button id="but1"><IoBookOutline /> My Classes</button>
        <button id="but2"><SiGoogleclassroom /> Associated Classes</button>
        <button id="but3"><IoSearchSharp /> Explore</button>
      </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
