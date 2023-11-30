import { Link } from "react-router-dom";
import { useContext } from "react";        
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, logOutUser ,user } = useContext(AuthContext); 
  return (
    <nav className="navBar">
      
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
          <span>{user.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/"> <button className="navButton">Home</button> </Link>
          <Link to="/login"> <button className="navButton">Login</button> </Link>
          <Link to="/logistics/login"> <button className="navButton">Logistics Login</button> </Link>
          <Link to="/logistics/signup"> <button className="navButton">Logistic Officer Sign Up</button> </Link>
          <Link to="/signup"> <button className="navButton">Sales Manager Sign Up</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;
