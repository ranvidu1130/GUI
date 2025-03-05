import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import Footer from "../Footer";
import axios from 'axios';  // Make sure to install axios if not already installed
import { ToastContainer, toast } from 'react-toastify';

import { AppContext } from "../AppContext";
import { DiAppcelerator } from "react-icons/di";

function Profile() {
    const { user, setUser } = useContext(AppContext);
    console.log(user)
  const [formData, setFormData] = useState({
    ...user,
    confirmPassword: user.password,
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
        const response = await axios.put('http://localhost:3000/update-profile', formData);
        toast.success('Update Profile Successful successful!');
        setUser(response.data);
        setTimeout(() => {
          navigate("/studentdashboard");
        }, 2000);
        
      } catch (error) {
        console.error(error);
        toast.error("Updating failed: " + error.response?.data?.message || "An error occurred");
      }
    }
  };

  const handdleDelete = async () => {
    const req = await axios.delete(`http://localhost:3000/delete-user/${user.username}`)
    if (req.status === 200) {
      toast.success("User deleted successfully");
      setUser({});
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("An error occurred while deleting user");
    }
  }

  return (
    <>
      <Navbar2 />
      <br /><br /><br />

      <div className="container">
      <ToastContainer autoClose={1000}/>
        <div className="login-form">
          <h1>Update Your Account Details</h1>
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
                readOnly
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
            <button type="submit">Update Profile</button>
          </form>
            <button id="delete btn" style={{position: "absolute", right:"20px",width:"200px"}} onClick={() => handdleDelete()}>Delete your accont</button>
        </div>
       
      </div>
      <Footer />
    </>
  );
}

export default Profile;
