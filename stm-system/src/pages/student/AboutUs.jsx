import React from "react";
import "./student.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import Footer from "../../Footer";
import Navbar2 from "../../Navbar2";
import panel1 from "../../../src/assets/panel1.png";
import panel2 from "../../../src/assets/panel2.png";
import panel3 from "../../../src/assets/panel3.png";
import panel4 from "../../../src/assets/panel4.jpg";
import mat2 from "../../../src/assets/mat2.jpg";
import chem from "../../../src/assets/chem.jpg";
// import pic from "../../assets/pic.jpg";


// const AboutUsStyle = {
//   backgroundImage: `url(${pic})`
// };

function AboutUs() {
  return (
    <>
      <Navbar2 />
      <br /><br /><br /><br />
      <div className="meow">

        <div className="topic">Avro Education</div>
        <br />
        <br />

        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto culpa,
          est excepturi eum eveniet quod corporis fuga laborum perspiciatis
          facilis aliquam accusamus voluptate numquam consequatur voluptatibus
          dolorem, distinctio corrupti reprehenderit cupiditate ad, animi
          temporibus voluptates libero autem? Pariatur accusamus, consequuntur
          veniam id quae ullam in dicta voluptatibus assumenda ipsam incidunt
          quibusdam porro labore perferendis. Consequatur molestiae obcaecati
          commodi illum numquam harum ipsum ea consequuntur ipsam aliquam iste
          laborum dolorem minus sapiente hic fugit earum quos nihil ratione
          fugiat, blanditiis assumenda explicabo. Distinctio libero architecto,
          reiciendis esse accusamus perferendis modi ea eum, est, corrupti quis
          vel dolorem porro illo eaque pariatur.
        </div>

        <div className="card">
          <div>
            <span class="number">+18000</span>
            <span class="label">Students</span>
          </div>
          <div>
            <span class="number">+100</span>
            <span class="label">Classes</span>
          </div>
          <div>
            <span class="number">+40</span>
            <span class="label">Teachers</span>
          </div>
        </div>
        <br />

        {/* <div className="but">
        <button id="but1"><IoBookOutline /> My Classes</button>
        <button id="but2"><SiGoogleclassroom /> Associated Classes</button>
        <button id="but3"><IoSearchSharp /> Explore</button>
      </div> */}

        <div className="scroll-container">
          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={panel4} alt="panel2" width="350" height="350" />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(240, 246, 255, 0.71)",
                padding: "10px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              Fun Learning Experience
            </div>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={panel1} alt="panel1" width="600" height="350" />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(240, 246, 255, 0.71)",
                padding: "10px",
                paddingLeft: "104px",
                paddingRight: "102px",
              }}
            >
              Virtual Environment for Smart Learning
            </div>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={panel2} alt="panel2" width="540" height="350" />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(240, 246, 255, 0.71)",
                padding: "10px",
                paddingLeft: "104px",
                paddingRight: "102px",
              }}
            >
              Personalised Learning Experience
            </div>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={panel3} alt="panel2" width="400" height="350" />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(240, 246, 255, 0.71)",
                padding: "10px",
                paddingLeft: "30px",
                paddingRight: "25px",
              }}
            >
              Notifying  about Upcoming Classes
            </div>
          </div>


          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={chem} alt="panel2" width="250" height="350" />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(240, 246, 255, 0.71)",
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              Lab Based Practicals
            </div>
          </div>
          {/* <img src={chem} alt="Mountains" width="250" height="350" /> */}
        </div>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}

export default AboutUs;
