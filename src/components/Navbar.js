import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">Grand 39 Cook with Iran</a> 
        </div>
        <div className="nav-links">
          <a href="/reserve">Reserve</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
