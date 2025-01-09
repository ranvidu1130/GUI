// import React from 'react';
// import './SignUp.css'; 

// function SignUp() {
  

//   return (
//     <div className="container">
//     <div className="login-form">
//         <h1>Create Your Account</h1>
//         <form>
//             <div className="input-container">
//                 <label htmlFor="username">Username</label>
//                 <input type="text" id="username" placeholder="Username" required />
//             </div>
//             <div className="input-container">
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" placeholder="Email" required />
//             </div>
//             <div className="input-container">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" id="password" placeholder="Password" required />
//             </div>
//             <div className="input-container">
//                 <label htmlFor="confirm-password">Confirm Password</label>
//                 <input type="password" id="confirm-password" placeholder="Confirm Password" required />
//             </div>
//             <div className="captcha-container">
//                 <input type="checkbox" id="captcha" />
//                 <label htmlFor="captcha">I'm not a robot</label>
//             </div>
//             <button type="submit">Sign Up</button>
//             <div className="switch-login">
//               <a href="login.html" className="switch-login">Already have an account? Log in</a>
//             </div>
            
//         </form>
//     </div>
// </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';
import Navbar1 from '../Navbar1';
import Footer from "../Footer";




function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    captchaChecked: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
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
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.captchaChecked) {
      newErrors.captcha = "Please confirm you are not a robot";
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
      alert("Sign-up successful!");
      // Perform further actions like sending data to a server
    }
  };
  return (
    <>
    <Navbar1/>
    <br /><br /><br />
    
    <div className="container">
      <div className="login-form">
        <h1>Create Your Account</h1>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
          <div className="input-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="captcha-container">
            <input
              type="checkbox"
              id="captcha"
              checked={formData.captchaChecked}
              onChange={handleChange}
            />
            <label htmlFor="captcha">I'm not a robot</label>
            {errors.captcha && <p className="error">{errors.captcha}</p>}
          </div>
          <button type="submit">Sign Up</button>
          <div className="switch-login">
            <a href="login.html" className="switch-login">
              Already have an account? Log in
            </a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SignUp;
