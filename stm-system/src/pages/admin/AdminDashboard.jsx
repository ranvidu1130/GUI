import React from 'react';
import './Admin.css';
// import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="navigation">
        <div className="nav-item" onClick={() => alert('Navigating to Classes')}>
          <h2>Classes</h2>
          <p>Manage and view all classes here.</p>
        </div>
        <div className="nav-item" onClick={() => alert('Navigating to Students')}>
          <h2>Students</h2>
          <p>Manage and view all students here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
