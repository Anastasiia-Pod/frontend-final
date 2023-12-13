// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from "react";  
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";

function LogHomePage() {
  const {user} = useContext(AuthContext); 
  console.log(user,'user')


  return (
    <div className="homePage">
      <h1 className="navButton">Hello, {user.username}! This is your profile page!</h1>
      <Link to="/orders"> <button className="navButton">View all Orders</button> </Link>
      <Link to="/logistics/partners"> <button className="navButton">View all Partners</button> </Link>
      <Link to="/logistics/partners/new"> <button className="navButton">Create new Partner</button> </Link>
      <Link to="/logistics/routes"> <button className="navButton">Generate a route</button> </Link>
    </div>
  );
}

export default LogHomePage;