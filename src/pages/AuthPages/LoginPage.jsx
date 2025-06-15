// client/src/pages/AuthPages/LoginPage.jsx
import React, { useState } from 'react';
// No need to import axios here anymore for login/signup, as it's handled by AuthContext
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx'; // <--- IMPORT useAuth
import './AuthPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login, loading } = useAuth(); // <--- USE THE useAuth HOOK to get login and loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Remove the temporary console.log and alert
    // console.log('Login successful:', response.data);
    // alert('Login successful! Check console for token (temporary)');

    const success = await login(email, password); // <--- Use the login function from AuthContext

    if (success) {
      navigate('/'); // Redirect to home page on successful login
    } else {
      // Error message is already set by the login function in AuthContext,
      // but you can refine it here if needed or let the context handle it.
      setError('Login failed. Please check your credentials.'); // Generic error for UI
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'} {/* <--- Add loading state for button */}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up here</a>
      </p>
    </div>
  );
}

export default LoginPage;