import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from './pages/student/AboutUs';
import StudentDashboard from './pages/student/StudentDashboard';
import EnrolledClasses from './pages/student/EnrolledClasses';
import Classes from './pages/student/Classes';


// import Slideshow from './Slideshow';




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/enrolledclasses" element={<EnrolledClasses/>}></Route>
        
        
        
      </Routes>
    </BrowserRouter>

    

  );
}


export default App;
