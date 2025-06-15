// client/src/components/layout/Navbar/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            RealEstate
          </Link>
        </div>

        {/* Center Section: Main Navigation Links */}
        <ul className="nav-links-main"> {/* <--- NEW CLASS FOR MAIN LINKS */}
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/buy" className="nav-link">Buy</Link>
          </li>
          <li className="nav-item">
            <Link to="/rent" className="nav-link">Rent</Link>
          </li>
          <li className="nav-item">
            <Link to="/sell" className="nav-link">Sell</Link>
          </li>
          <li className="nav-item">
            <Link to="/agents" className="nav-link">Agents</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>

        {/* Right Section: Auth Links */}
        <ul className="nav-links-auth"> {/* <--- NEW CLASS FOR AUTH LINKS */}
          {user ? (
            // If logged in, show Logout link
            <li className="nav-item">
              {/* Using Link for logout to keep consistent styling, but it will execute JS onClick */}
              <Link to="#" onClick={handleLogout} className="nav-link">Logout</Link>
            </li>
          ) : (
            // If not logged in, show Login and Sign Up links
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;