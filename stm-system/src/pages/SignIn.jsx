import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";
import { useState } from "react";



// function SignIn() {
//   return (
//     <>
//     <Navbar1/>
//     <br /><br /><br />
//     <div className="container">
//         {/* <div className="logo"><img src="logo.png" alt="logo"></div> */}
//         <div className="login-form">
//             <h1>Welcome to AVRO Education</h1>
//             <form>
//                 <div className="input-container">
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" placeholder="Username" required />
//                 </div>
//                 <div className="input-container">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" placeholder="Password" required />
//                 </div>
//                 <div className="captcha-container">
//                     <input type="checkbox" id="captcha" />
//                     <label htmlFor="captcha">Remember me</label>
//                 </div>
//                 <button type="submit">Login</button>
//                 <a href="#" className="forgot-password">Forgot password?</a>

                // <Link to ="#"><button type="submit">Login as Admin</button></Link>
//             </form>
//         </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default SignIn;



function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Login successful!");
      // Perform login action or API call here
    }
  };

  return (
    <>
      <Navbar1 />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="login-form">
          <h1>Welcome to AVRO Education</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="captcha-container">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/studentdashboard"><button type="submit">Login</button></Link>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
            {/* <Link to ="/admindashboard"><button type="submit">Login as Admin</button></Link> */}

          </form>
          <div className="switch-login">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="switch-link">
                Sign Up
              </Link>
            </p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
