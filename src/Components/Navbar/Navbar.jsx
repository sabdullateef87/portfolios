import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav_container">
      <div className="navbar">
        <div className="logo">ABDULLATEEF</div>
        <ul className="navlinks">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
