// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from "react";  
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";
import logHome from '/images/logHome.jpeg';

function LogHomePage() {
  const {user} = useContext(AuthContext); 
  console.log(user,'user')

  const linkStyle = {
    textDecoration: 'none', 
  }; 

  const logHomePageStyle = {
    height: '100vh',
    backgroundImage: `url(${logHome})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  }

  return (
    <div className="logHomePage" style={logHomePageStyle}>
      <h1 className="congrats" >Hello, {user.username}! This is your profile page!</h1>
      <Link to="/orders" style={linkStyle}> <button className="logLinkButton">View all Orders</button> </Link>
      <Link to="/logistics/partners/new" style={linkStyle}> <button className="logLinkButton">Create a new Order</button> </Link>
      <Link to="/logistics/partners" style={linkStyle}> <button className="logLinkButton">View all Partners</button> </Link>
      <Link to="/logistics/partners/new" style={linkStyle}> <button className="logLinkButton">Create a new Partner</button> </Link>
      <Link to="/logistics/routes" style={linkStyle}> <button className="logLinkButton">Generate a route</button> </Link>
    </div>
  );
}

export default LogHomePage;

