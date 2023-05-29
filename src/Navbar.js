import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="#" className="active">Home</a>
      </li>
      <li className="nav-item dropdown">
        <a href="#" className="dropbtn">Industries</a>
        <div className="dropdown-content">
          <div className="grid-container">
            <div className="grid-row">
              <a href="#">Banking and Finance</a>
              <a href="#">Defense</a>
              <a href="#">EduTech</a>
              <a href="#">Pharmaceuticals</a>
              <a href="#">Industrial Automation</a>
            </div>
            <div className="grid-row">
              <a href="#">FMCG</a>
              <a href="#">Project Management</a>
              <a href="#">Cloud Computing</a>
              <a href="#">Blockchain</a>
              <a href="#">Data Science</a>
            </div>
            <div className="grid-row">
              <a href="#">AI/ML projects</a>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a href="#" className="dropbtn">Services</a>
        <div className="dropdown-content">
          <a href="#">Management Consulting</a>
          <a href="#">Technology Consulting</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a href="#" className="dropbtn">Carrier</a>
        <div className="dropdown-content">
          <a href="#">Home</a>
          <a href="#">Students</a>
          <a href="#">Jobs</a>
        </div>
      </li>
      <li className="nav-item">
        <a href="#">About</a>
      </li>
      <li className="nav-item">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}

export default Navbar;


