import { Link } from "react-router-dom";
import { useContext } from "react";        
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, logOutUser ,user, role } = useContext(AuthContext); 
  return (
    <nav className="navBar">
      
      {/*    UPDATE     */}
      {isLoggedIn && role === "Logistic Officer"(
        <> 
        <Link to="/logistics/home"><button className="navButton">Home</button></Link>
          <button className="navButton" onClick={logOutUser}>Logout</button>
          <span>{user.name}</span>
        </>
      )}

      {isLoggedIn && role === "Sales Manager"(
        <>       
        <Link to="/sales/home"><button className="navButton">Home</button></Link>
          <button className="navButton" onClick={logOutUser}>Logout</button>
          <span>{user.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/"> <button className="navButton">Home</button> </Link>
          <Link to="/logistics/login"> <button className="navButton">Logistics Officer Login</button> </Link>
          <Link to="/logistics/signup"> <button className="navButton">Logistic Officer Sign Up</button> </Link>
          <Link to="/sales/login"> <button className="navButton">Sales Manager Login</button> </Link>
          <Link to="/sales/signup"> <button className="navButton">Sales Manager Sign Up</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;
