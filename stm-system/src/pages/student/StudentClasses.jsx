// import React from "react";
// import "./student.css";
// import mat1 from "../../assets/mat1.jpg";
// import mat2 from "../../assets/mat2.jpg";
// import cem from "../../assets/chem.jpg";
// import pys from "../../assets/phy.jpg";
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaUserPlus } from "react-icons/fa6";
// import { TiTick } from "react-icons/ti";
// import { FaRegEye } from "react-icons/fa";

// function Dboard() {
//   return (
//     <div className="board">
//       <div className="clz">
//         <div className="pro">
//           <FaRegUserCircle />
//         </div>
//         <div className="dis">Hello, Ranvidu Ariyarathne</div>
//         <div className="ade">2025 A/L</div>
//       </div>

//       <h5>Your Enrolled Classes</h5>
//       <div className="my">
//         <div className="cla" id="cla1">
//           <img
//             src={mat1}
//             alt="My Pic"
//             style={{ width: "200px", height: "150px" }}
//           />
//           <h4>Combined Maths</h4>
//           <p>Eren Yeager</p>
//           <button><FaRegEye />  View</button>
//         </div>
//         <div className="cla" id="cla2">
//           <img
//             src={mat2}
//             alt="My Pic"
//             style={{ width: "200px", height: "150px" }}
//           />
//           <h4>Applied Maths</h4>
//           <p>Zeke Yeager</p>
//           <button><FaRegEye />  View</button>
//         </div>
//         <div className="cla" id="cla3">
//           <img
//             src={cem}
//             alt="My Pic"
//             style={{ width: "200px", height: "150px" }}
//           />
//           <h4>Chemistry</h4>
//           <p>Mikasa Ackermann</p>
//           <button><FaRegEye />  View</button>
//         </div>
//         <div className="cla" id="cla4">
//           <img
//             src={pys}
//             alt="My Pic"
//             style={{ width: "200px", height: "150px" }}
//           />
//           <h4>Physics</h4>
//           <p>Uzumaki Naruto</p>
//           <button><FaRegEye />  View</button>
//         </div>
//       </div>

//       <h5>Upcoming Classes</h5>
//       <div className="clzz">
//         <div className="tim">
//           2025.01.15 14:30 PM
//         </div>
//         <div className="claname">Combined Maths</div>
//         <div className="clate">Eren Yeager</div>
//         <div className="join"><button><TiTick /> Join Now</button></div>
//       </div>
//       <div className="clzz">
//         <div className="tim">
//           2025.01.15 18:00 PM
//         </div>
//         <div className="claname">Chemistry</div>
//         <div className="clate">Mikasa Ackermann</div>
//         <div className="join"><button><TiTick /> Join Now</button></div>
//       </div>
//       <div className="clzz">
//         <div className="tim">
//           2025.01.15 21:00 PM
//         </div>
//         <div className="claname">Physics</div>
//         <div className="clate">Uzumaki Naruto</div>
//         <div className="join"><button><TiTick /> Join Now</button></div>
//       </div>


//     </div>
//   );
// }
// export default Dboard;


// Classes.jsx
import React from 'react';
import Card from '../../Card';
import './student.css'; // Optional: If you want to style the container for the cards
import mat1 from "../../../src/assets/mat1.jpg";
import mat2 from "../../../src/assets/mat2.jpg";
import chem from "../../../src/assets/chem.jpg";
import phy from "../../../src/assets/phy.jpg";
import Navbar2 from '../../Navbar2';
import Footer from '../../Footer';
// Define a static array with unique data for each card
const sampleData = [
  {
    id: 1,
    modulePicture: '../../../src/assets/mat1.jpg',
    moduleName: 'Mathematics Basics',
    teacherName: 'John Doe',
  },
  {
    id: 2,
    modulePicture: '../../../src/assets/chem.jpg',
    moduleName: 'Physics Principles',
    teacherName: 'Jane Smith',
  },
  {
    id: 3,
    modulePicture: '../../../src/assets/mat2.jpg',
    moduleName: 'Chemistry',
    teacherName: 'Dr. Brown',
  },
  {
    id: 4,
    modulePicture: '../../../src/assets/phy.jpg',
    moduleName: 'Maths',
    teacherName: 'Emily Clark',
  },
  // Dynamically generate additional cards with unique data
  ...Array.from({ length: 16 }, (_, index) => ({
    id: index + 5,
    modulePicture: `../../../src/assets/mat2.jpg`,
    moduleName: `Custom Module ${index + 5}`,
    teacherName: `Teacher ${index + 5}`,
  })),
];

const Classes = () => {
  const handleEnroll = (moduleName) => {
    alert(`Enrolled in ${moduleName}`);
  };

  return (
    <>
    <Navbar2 />
    <br /><br /><br /><br /><br /><br /><br />
    <div className="classes-container">
      {sampleData.map((module) => (
        <Card
          key={module.id}
          modulePicture={module.modulePicture}
          moduleName={module.moduleName}
          teacherName={module.teacherName}
          onEnroll={() => handleEnroll(module.moduleName)}
        />
      ))}
    </div>
    <br /><br /><br /><br />
    <Footer />
    </>
  );
};

export default Classes;
