import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="job-navbar">
        <div className="logo">JobShop</div>
        <button className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
          &#9776;
        </button>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#post-job">Post a Job</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#login">Login/Signup</a></li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li><a href="#home" onClick={() => setIsSidebarOpen(false)}>Home</a></li>
          <li><a href="#jobs" onClick={() => setIsSidebarOpen(false)}>Jobs</a></li>
          <li><a href="#post-job" onClick={() => setIsSidebarOpen(false)}>Post a Job</a></li>
          <li><a href="#profile" onClick={() => setIsSidebarOpen(false)}>Profile</a></li>
          <li><a href="#login" onClick={() => setIsSidebarOpen(false)}>Login/Signup</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

