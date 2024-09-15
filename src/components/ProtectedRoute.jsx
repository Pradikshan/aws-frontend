// src/components/ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Assuming you have AuthContext setup

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Check user authentication status

  if (!user) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If user is logged in, render the protected component
  return children;
};

export default ProtectedRoute;
