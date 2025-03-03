

// Classes.jsx
import React from 'react';
import Card from '../../Card';
import './student.css'; 
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
    moduleName: 'Mathematics',
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

const EnrolledClasses = () => {
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

export default EnrolledClasses;
