// src/components/IsAnon.jsx

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 

function IsAnon( { children } ) {
  
  const { isLoggedIn, isLoading , role} = useContext(AuthContext);

  // If the authentication is still loading 
  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {
    // If the user is logged in, navigate to the home page  
    
    if(role === 'Logistic Officer'){
      return <Navigate to="/logistics/logHome" />;
    }
    return <Navigate to="/" />;
  } else {
    // If the user is not logged in, allow to see the page 
    return children;
  }
}

IsAnon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsAnon;
