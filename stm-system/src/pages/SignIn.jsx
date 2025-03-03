// import React from "react";
// import "./SignUp.css";
// import { Link } from "react-router-dom";
// import Navbar1 from "../Navbar1";
// import Footer from "../Footer";
// import { useState } from "react";



// function SignIn() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { id, value, type} = e.target;
//     setFormData({
//       ...formData,
//       [id]: type === "checkbox" ? checked : value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required";
//     }
//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       alert("Login successful!");
//       // Perform login action or API call here
//     }
//   };

//   return (
//     <>
//       <Navbar1 />
//       <br />
//       <br />
//       <br />
//       <div className="container">
//         <div className="login-form">
//           <h1>Welcome to AVRO Education</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.username && <p className="error">{errors.username}</p>}
//             </div>
//             <div className="input-container">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <br />
            
//             <Link to="/studentdashboard"><button type="submit">Login</button></Link>
//             <Link to="/forgot-password" className="forgot-password">
//               Forgot password?
//             </Link>
            

//           </form>
//           <div className="switch-login">
//             <p>
//               Don't have an account?{" "}
//               <Link to="/signup" className="switch-link">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
          
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default SignIn;

import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";  // Using useHistory for programmatic navigation
import Navbar1 from "../Navbar1";
import Footer from "../Footer";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // This hook is used for navigation

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      try {
        // Send login request to backend
        const response = await axios.post("http://localhost:3000/login", {
          username: formData.username,
          password: formData.password,
        });

        // If login is successful
        if (response.status === 200) {
          toast.success("Login successful!");
          // Redirect to the student dashboard or another page after login
          setTimeout(() => {
            navigate("/studentdashboard");
          }, 2000);  // Navigates to the student dashboard page
        }
      } catch (error) {
        console.error(error);
        // Handle login error (e.g., invalid username/password)
        toast.error("Login failed: " + (error.response?.data?.message || "An error occurred"));
      }
    }
  };

  return (
    <>
      <Navbar1 />
      <br />
      <br />
      <br />
      <div className="container">
      <ToastContainer autoClose={1000}/>
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
            <br />
            <button type="submit">Login</button>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
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
