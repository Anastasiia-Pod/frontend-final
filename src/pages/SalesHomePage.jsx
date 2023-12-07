import React from 'react';
import { useContext } from "react";  
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";

function SalesHomePage() {
  const {user} = useContext(AuthContext); 
  return (
    <div className="homePage">
      <h1 className="navButton">Hello, {user.name}! This is your profile page!</h1>
      <Link to="/orders"> <button className="navButton">View all Orders</button> </Link>
      <Link to="/sales/orders/new"> <button className="navButton">Create new Order</button> </Link>
    </div>
  );
}

export default SalesHomePage;