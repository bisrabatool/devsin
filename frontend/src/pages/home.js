import React from 'react';
import Navbar from '../components/navbar.js';
import './home.css';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="home-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;


