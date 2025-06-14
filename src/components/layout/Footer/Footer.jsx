// src/components/layout/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.css'; // Import the CSS for this component

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>RealEstate</h3>
          <p>Your dream home is just a click away. Connecting you with the best properties and agents.</p>
          <p>&copy; {currentYear} RealEstate. All rights reserved.</p>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/buy">Buy Property</Link></li>
            <li><Link to="/rent">Rent Property</Link></li>
            <li><Link to="/sell">Sell Property</Link></li>
            <li><Link to="/agents">Our Agents</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Info</h3>
          <p>123 Main Street, Rawalpindi, Pakistan</p>
          <p>Email: <a href="mailto:info@realestate.com">info@realestate.com</a></p>
          <p>Phone: <a href="tel:+921234567890">+92 (123) 456-7890</a></p>
        </div>

        {/* Optional: Social Media Links */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Replace with actual social media icons and links */}
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;