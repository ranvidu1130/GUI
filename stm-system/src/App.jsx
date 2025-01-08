import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/student/AboutUs';
import Footer from './Footer';



function App() {
  return ( 

    <Router>
      
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      
    </Router>
    

    
      
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

