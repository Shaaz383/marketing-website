import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLoggedInUser } from '../services/authService';

const ProtectedRoute = ({ children }) => {
  const user = getLoggedInUser(); // Get the logged-in user

  if (!user) {
    // If user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children; // Render the child components if user is logged in
};

export default ProtectedRoute;
