import React from "react";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";

import Navbar1 from "./Navbar1";
import Navbar2 from './Navbar2';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from './pages/student/AboutUs';
import Footer from './Footer';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentClasses from './pages/student/StudentClasses';
import Classes from './pages/student/Classes';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/studentclasses" element={<StudentClasses />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        
      </Routes>
    </BrowserRouter>

    // <Router>
    // {/* <Navbar1 /> */}
    //   <Routes>
    //   <Route path="./pages/signin" element={<SignIn />} />
    //   <Route path="./pages/signup" element={<SignUp />} />
    //   {/* <Route path="./pages/signI" element={<Navbar1 />} /> */}
    //   </Routes>

    // //   </Router>
    // </div>
  );
}


export default App;
