/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types"; 
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading 
  if (isLoading) return null; // Return null instead of rendering anything

  if (!isLoggedIn) {
    // If the user is not logged in 
    return <Navigate to="/" />;
  } else {
    // If the user is logged in, allow to see the page 
    return children;
  }
}

// Add prop-types validation
IsPrivate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsPrivate;