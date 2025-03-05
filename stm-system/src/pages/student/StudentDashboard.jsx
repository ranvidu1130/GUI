import React, {useContext} from "react";
import "./student.css";
import mat1 from "../../../src/assets/mat1.jpg";
import mat2 from "../../../src/assets/mat2.jpg";
import chem from "../../../src/assets/chem.jpg";
import phy from "../../../src/assets/phy.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";

import { AppContext } from "../../AppContext";

function StudentDashboard() {
  const { user } = useContext(AppContext);
  return (
    <>
    <Navbar2 />
    
    <br /><br /><br /><br /><br /><br /><br />
    <div className="board">
      <div className="clz">
        <div className="pro">
          <FaRegUserCircle />
        </div>
        <div className="dis">Hello, {user.name}</div>
        <div className="ade">2025 A/L</div>
      </div>

      <h5>| Your Enrolled Classes</h5>
      <br />
      <div className="my">
        <div className="cla" id="cla1">
          <img
            src={mat1}
            alt="My Pic"
            style={{ width: "180px", height: "150px" }}
          />
          <h4>Combined Maths</h4>
          <p>Dileep kasthuriarachchi</p>
          <br />
          <button><FaRegEye />  View</button>
        </div>
        <div className="cla" id="cla2">
          <img
            src={mat2}
            alt="My Pic"
            style={{ width: "180px", height: "150px" }}
          />
          <h4>Applied Maths</h4>
          <p>Udula Ranvidu Ariyarathna</p>

          <br />
          <button><FaRegEye />  View</button>
        </div>
        <div className="cla" id="cla3">
          <img
            src={chem}
            alt="My Pic"
            style={{ width: "180px", height: "150px" }}
          />
          <h4>Chemistry</h4>
          <p>stephanie Wijayawardana</p>
          <br />
          <button><FaRegEye />  View</button>
        </div>
        <div className="cla" id="cla4">
          <img
            src={phy}
            alt="My Pic"
            style={{ width: "180px", height: "150px" }}
          />
          <h4>Physics</h4>
          <p>P.Yoganadhan Murugesan</p>
          <br />
          <button><FaRegEye />  View</button>
        </div>
      </div>

      <br />
      <h5>| Upcoming Classes</h5>
      <br />
      <div className="clzz">
        <div className="tim">
          2025.03.15 14:30 PM
        </div>
        <div className="claname">Combined Maths</div>
        <div className="clate">Dileep kasthuriarachchi</div>
        <div className="join"><button><TiTick /> Join Now</button></div>
      </div>
      <div className="clzz">
        <div className="tim">
          2025.03.18 18:00 PM
        </div>
        <div className="claname">Chemistry</div>
        <div className="clate">stephanie Wijayawardana</div>
        <div className="join"><button><TiTick /> Join Now</button></div>
      </div>
      <div className="clzz">
        <div className="tim">
          2025.03.18 14:00 PM
        </div>
        <div className="claname">Physics</div>
        <div className="clate">P.Yoganadhan Murugesan</div>
        <div className="join"><button><TiTick /> Join Now</button></div>
      </div>
    </div>
    <Footer />
    </>
  );
  

}
export default StudentDashboard;
