// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Import the CSS for this page

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="not-found-links">
          <Link to="/" className="button-primary">Go to Homepage</Link>
          <Link to="/buy" className="button-secondary">View Properties</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;