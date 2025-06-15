// client/src/components/Auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth(); // Get user and loading state from AuthContext

  if (loading) {
    // You can render a loading spinner or null here while checking auth status
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '2em', color: '#555'}}>Loading authentication...</div>;
  }

  if (!user) {
    // If not loading and no user, redirect to the login page
    // The replace prop ensures the login page doesn't get added to the history stack
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (the protected component)
  return children;
}

export default ProtectedRoute;