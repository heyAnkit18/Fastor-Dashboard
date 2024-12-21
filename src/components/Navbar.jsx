import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => (
  <nav className="navbar">
    <div className="navTitle">Fastor Task</div>
    <div className="navLinks">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;

