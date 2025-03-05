// import React, { useState } from "react";
// import "./SignUp.css";
// import { Link } from 'react-router-dom';
// import Navbar1 from '../Navbar1';
// import Footer from "../Footer";


// function SignUp() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
    
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { id, value, checked, type } = e.target;
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
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is not valid";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
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
//       alert("Sign-up successful!");
//       // Perform further actions like sending data to a server
//     }
//   };
//   return (
//     <>
//     <Navbar1/>
//     <br /><br /><br />
    
//     <div className="container">
//       <div className="login-form">
//         <h1>Create Your Account</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="name">Name</label>
//             <input
//               type="name"
//               id="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             {errors.username && <p className="error">{errors.username}</p>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="confirm-password">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             {errors.confirmPassword && (
//               <p className="error">{errors.confirmPassword}</p>
//             )}
//           </div>
          
//           <br />
//           <button type="submit">Sign Up</button>
//           <div className="switch-login">
//               Already have an account?<Link to="/signin" >Log in</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default SignUp;

import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import Navbar1 from '../Navbar1';
import Footer from "../Footer";
import axios from 'axios';  // Make sure to install axios if not already installed
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from "../AppContext";


function SignUp() {
  const { setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
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
        // Send data to backend for registration
        const response = await axios.post('http://localhost:3000/register', formData);
        setUser(response.data);
        toast.success('Sign-up successful!', {});
        console.log(response.data);
        setTimeout(() => {
          navigate("/studentdashboard");
        }, 2000);
        // You could redirect to the login page upon successful registration
        // history.push('/signin');
      } catch (error) {
        console.error(error);
        toast.error("Registration failed: " + error.response?.data?.message || "An error occurred");
      }
    }
  };

  return (
    <>
      <Navbar1 />
      <br /><br /><br />

      <div className="container">
      <ToastContainer autoClose={1000}/>
        <div className="login-form">
          <h1>Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
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
              <label htmlFor="confirmPassword">Confirm Password</label>
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

            <br />
            <button type="submit">Sign Up</button>
            <div className="switch-login">
              Already have an account? <Link to="/signin">Log in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
