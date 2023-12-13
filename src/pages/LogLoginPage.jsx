/* eslint-disable no-unused-vars */
// src/pages/LoginPage.jsx

import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";


function LogLoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
  
  /*  UPDATE - get authenticateUser from the context */
  const { storeToken, authenticateUser , role,user } = useContext(AuthContext);

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  console.log('here we are')
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    try{
   const response =  await axios.post(`${API_URL}/logistics/login`, requestBody)
      
        console.log('JWT token', response.data.authToken );
      
        // Save the token in the localStorage.      
        storeToken(response.data.authToken);
        
        // Verify the token by sending a request 
        // to the server's JWT validation endpoint. 
         await authenticateUser() 

        //  console.log(role,'role',user)
        // if(role === 'Logistic Officer') {navigate('/logistics/logHome');}
                         // <== ADD
      }
      catch(error){
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }
  };

  
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button className= "submit" type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Do not have an account yet?</p>
      <Link to={"/logistics/signup"}> Sign Up</Link>
    </div>
  )
}

export default LogLoginPage;