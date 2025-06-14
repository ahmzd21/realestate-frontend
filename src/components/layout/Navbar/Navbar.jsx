// src/components/Navbar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Keep NavLink
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container"> {/* Use navbar-container as per your CSS */}
        <NavLink to="/" className="navbar-logo"> {/* Logo usually doesn't have active state */}
          RealEstate
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              // If isActive, add 'active-nav-link', otherwise just use default 'a' styles
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buy"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rent"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agents"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              Contact
            </NavLink>
          </li>
          {/* List Property link is commented out as per previous discussion, if it's internal */}
          {/* <li>
            <NavLink
              to="/list-property"
              className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
            >
              List Property
            </NavLink>
          </li> */}
        </ul>
        {/* Assuming you have navbar-actions for Login/Signup buttons */}
        <div className="navbar-actions">
            {/* Your Login/Signup buttons typically go here */}
            {/* <a href="/login" className="nav-button login">Login</a>
            <a href="/signup" className="nav-button signup">Sign Up</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;