// client/src/pages/AuthPages/SignupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // --- CLIENT-SIDE VALIDATION ---
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) { // <--- ADD THIS PASSWORD LENGTH CHECK
      return setError('Password must be at least 6 characters long');
    }
    // You could add more here, like email format validation, username length, etc.
    // --- END CLIENT-SIDE VALIDATION ---

    try {
      const successRegister = await register(username, email, password);

      if (successRegister) {
        setSuccess('Registration successful! You are now logged in. Redirecting...');
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      // This catch block is mostly for network errors if axios doesn't get a response
      // For API errors (like 400s, 500s from backend), AuthContext's register function
      // already handles setting the error state based on backend response.
      console.error('Unexpected signup error:', err);
      setError('An unexpected error occurred during registration.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {/* Display error if any */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        {/* ... rest of your form ... */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Registering...' : 'Sign Up'}
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default SignupPage;