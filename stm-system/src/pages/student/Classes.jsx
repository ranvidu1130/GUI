import React from "react";
import "./student.css";
import { IoSearch } from "react-icons/io5";
import Footer from "../../Footer";
import Navbar2 from "../../Navbar2";
import matbb from "../../../src/assets/matbb.jpg";
import scibb from "../../../src/assets/scibb.jpg";
import enbb from "../../../src/assets/enbb.jpg";
import sinbb from "../../../src/assets/sinbb.jpg";
import tambb from "../../../src/assets/tambb.jpg";
import ictbb from "../../../src/assets/ictbb.jpg";


function Classes() {
  return (
    <>
      <Navbar2 />
      <br /><br /><br /><br />
      <div className="classes">
        <h3 style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px', color: '#fff' }}><IoSearch />  Explore More Classes</h3>
        <div className="class_buttons">
          <button id="mat">Applied Maths</button>
          <button id="sci">Combined Maths</button>
          <button id="sin">Chemistry</button>
          <button id="en">Physics</button>
          <button id="tam">General English</button>
          <button id="ict">ICT</button>
        </div>

        <div className="class_desc">
          <div className="class_container">
            <img src={matbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00fafe9d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Applied Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Udula Ranvidu Ariyarathna</p>
            </div>
            <div className="overlay" id="ov_mat">
              <div className="text">
                <p><b>Applied Maths</b></p><br />
                <p>Udula Ranvidu Ariyarathna</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>SAT 1.00 - 3.00</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={scibb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00ff448f", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Combined Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Dileep Kasthuriarachchi</p>
            </div>
            <div className="overlay" id="ov_sci">
              <div className="text">
                <p><b>Combined Maths</b></p><br />
                <p>Dileep Kasthuriarachchi</p><br />
                <p>WED 2.30 - 4.30</p>
                <p>FRI 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container"> 
            <img src={enbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#fff2009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Chemistry</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Stephanie Wijayawardhana</p>
            </div>
            <div className="overlay" id="ov_en">
              <div className="text">
                <p><b>Chemistry</b></p><br />
                <p>Stephanie Wijayawardhana</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={sinbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#ffa5009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>General English</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Wasuki Jinendra Wijesinghe</p>
            </div>
            <div className="overlay" id="ov_sin">
              <div className="text">
                <p><b>General English</b></p><br />
                <p>Wasuki Jinendra Wijesinghe</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>
        </div>

        <div className="class_desc">
          <div className="class_container">
            <img src={ictbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#0ca79a9d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>ICT</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Manawa Sudath Jayasinghe</p>
            </div>
            <div className="overlay" id="ov_ict">
              <div className="text">
                <p><b>ICT</b></p><br />
                <p>Manawa Sudath Jayasinghe</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={tambb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#ff00009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Physics</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>P. Yoganadhan Murugesan</p>
            </div>
            <div className="overlay" id="ov_tam">
              <div className="text">
                <p><b>Physics</b></p><br />
                <p>P. Yoganadhan Murugesan</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container" >
            <img src={sinbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#ffa5009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>General English</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>S. Janaka Patabandige</p>
            </div>
            <div className="overlay" id="ov_sin">
              <div className="text">
                <p><b>General English</b></p><br />
                <p>S. Janaka Patabandige</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={matbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00fafe9d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Applied Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>A. Kavya Vidyalankara</p>
            </div>
            <div className="overlay" id="ov_mat">
              <div className="text">
                <p><b>Applied Maths</b></p><br />
                <p>A. Kavya Vidyalankara</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

        </div>

        <div className="class_desc">
          <div className="class_container" >
            <img src={scibb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00ff449d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Combined Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Sudarman Jayakodi</p>
            </div>
            <div className="overlay" id="ov_sci">
              <div className="text">
                <p><b>Combined Maths</b></p><br />
                <p>Sudarman Jayakodi</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={tambb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#ff00009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Physics</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>A. Mohommad Ruslan</p>
            </div>
            <div className="overlay" id="ov_tam">
              <div className="text">
                <p><b>Physics</b></p><br />
                <p>A. Mohommad Ruslan</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={ictbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#0ca79a9d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>ICT</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Visal Kuslaarachchi</p>
            </div>
            <div className="overlay" id="ov_ict">
              <div className="text">
                <p><b>ICT</b></p><br />
                <p>Visal Kuslaarachchi</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={enbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#fff2009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Chemistry</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Manoj Illamperuma</p>
            </div>
            <div className="overlay" id="ov_en">
              <div className="text">
                <p><b>Chemistry</b></p><br />
                <p>Manoj Illamperuma</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

        </div>

        <div className="class_desc">
          <div className="class_container">
            <img src={matbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00fafe9d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Applied Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Jayaruwani Aranya</p>
            </div>
            <div className="overlay" id="ov_mat">
              <div className="text">
                <p><b>Applied Maths</b></p><br />
                <p>Jayaruwani Aranya</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={sinbb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#ffa5009d", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>General English</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Mewan Randika Wijesinghe</p>
            </div>
            <div className="overlay" id="ov_sin">
              <div className="text">
                <p><b>General English</b></p><br />
                <p>Mewan Randika Wijesinghe</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
            <img src={scibb} alt="Avatar" className="image" />
            <div
              style={{
                position: "absolute", top: "20px", left: "0px", color: "#fff", fontSize: "20px", fontWeight: "bold", backgroundColor: "#00ff448f", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>Combined Maths</p>
            </div>
            <div
              style={{
                position: "absolute", top: "150px", left: "0px", textAlign: "center", color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(240, 246, 255, 0.71)", padding: "10px", paddingLeft: "50px", paddingRight: "50px",
              }}
            >
              <p>K. Sandeepa Perera</p>
            </div>
            <div className="overlay" id="ov_sci">
              <div className="text">
                <p><b>Combined Maths</b></p><br />
                <p>K. Sandeepa Perera</p><br />
                <p>MON 2.30 - 4.30</p>
                <p>TUE 4.30 - 6.30</p>                
                <button id="re_but">Register</button>
              </div>
            </div>
          </div>

          <div className="class_container">
          </div>
        </div>

      </div>
      <br /><br />
      <Footer />
    </>
  );
}

export default Classes;
