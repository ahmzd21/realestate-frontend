// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios'; // We'll configure this for authenticated requests

// 1. Create the Auth Context
const AuthContext = createContext(null);

// 2. Create the Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user data (id, username, email)
  const [loading, setLoading] = useState(true); // To check if initial authentication state is loaded
  const [error, setError] = useState(null);

  // Function to set up Axios interceptors for authenticated requests
  const setupAxiosInterceptors = (token) => {
    // Remove old interceptor if exists to prevent duplicates
    axios.interceptors.request.eject(axios.interceptors.request.handlers[0]); // Be careful with index if you have many

    axios.interceptors.request.use(
      config => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  };

  // Effect to load user from localStorage on initial app load
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Optionally verify token with backend or just trust localStorage for initial load
          // For a more robust solution, you could hit a /api/auth/me endpoint
          // to re-verify the token and fetch fresh user data from the backend.
          // For now, we'll just assume token's presence means user is logged in.

          // You'd ideally decode the token to get user info if you don't have a /me endpoint
          // const decodedToken = JSON.parse(atob(token.split('.')[1]));
          // setUser({ id: decodedToken.id, username: 'User', email: 'user@example.com' }); // Placeholder

          // A simple way for initial load: just set the token for axios
          setupAxiosInterceptors(token);
          // You might want to fetch user details here if needed.
          // For demonstration, let's assume we get user details during login.

          // We'll update this after login function provides user data
          // For now, let's set a placeholder user if token exists
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
              setUser(JSON.parse(storedUser));
          } else {
              // Fallback: if token exists but user data is not stored
              setUser({ id: 'unknown', username: 'Guest', email: 'guest@example.com' }); // Basic user
          }

        } catch (err) {
          console.error('Failed to load user or verify token:', err);
          localStorage.removeItem('token'); // Clear invalid token
          localStorage.removeItem('user');
          setUser(null);
        }
      }
      setLoading(false); // Authentication check is complete
    };

    loadUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, { email, password });
      const { token, user: userData } = res.data; // Destructure token and user data

      localStorage.setItem('token', token); // Store token
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data
      setUser(userData); // Update state
      setupAxiosInterceptors(token); // Set up axios for future requests
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed.');
      setLoading(false);
      return false; // Indicate failure
    }
  };

  // Register function
  const register = async (username, email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, { username, email, password });
      const { token, user: userData } = res.data; // Destructure token and user data

      // For registration, we typically log them in immediately or redirect to login
      // If you want to auto-login:
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setupAxiosInterceptors(token);
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      console.error('Registration failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Registration failed.');
      setLoading(false);
      return false; // Indicate failure
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    // Remove Authorization header from future axios requests
    axios.interceptors.request.eject(axios.interceptors.request.handlers[0]); // Reset interceptor
  };

  // Provide the user, loading state, and auth functions to children
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook to use the Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};