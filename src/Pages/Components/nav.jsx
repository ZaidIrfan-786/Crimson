import React from "react";
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Crimson</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/Admin">Admin</a></li>
      </ul>

      <button className="nav-btn" onClick={() => window.location.href = "/login"}>
        Log In
      </button>
    </nav>
  );
};

export default Navbar;