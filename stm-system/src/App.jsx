import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import Profile from "./pages/Profile";
import { AppProvider } from "./AppContext";

// Create UserContext
const UserContext = React.createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    course: "",
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser({
      name: "",
      username: "",
      course: "",
    });
  };

  return (
        <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
              <Route path="/classes" element={<Classes />}></Route>
              <Route path="/aboutus" element={<AboutUs />}></Route>
              <Route path="/enrolledclasses" element={<EnrolledClasses />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </AppProvider>
        </BrowserRouter>
  );
}

export default App;
