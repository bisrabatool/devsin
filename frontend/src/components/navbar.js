import React, { useState } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="job-navbar">
        <div className="logo">JobShop</div>
        <button className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
          &#9776;
        </button>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/post-job">Post a Job</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/">Login/Signup</Link></li>
        </ul>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li><Link to="/home" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/jobs" onClick={() => setIsSidebarOpen(false)}>Jobs</Link></li>
          <li><Link to="/post-job" onClick={() => setIsSidebarOpen(false)}>Post a Job</Link></li>
          <li><Link to="/myprofile" onClick={() => setIsSidebarOpen(false)}>Profile</Link></li>
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Login/Signup</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


