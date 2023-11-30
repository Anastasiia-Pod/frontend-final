import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon"; 
import LogisticsSignupPage from "./pages/LogisticsSignupPage";
import LogHomePage from "./pages/LogHomePage";
import LogLoginPage from "./pages/LogLoginPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={ <IsPrivate> <ProjectListPage /> </IsPrivate> } 
        />
 
        <Route
          path="/projects/:projectId"
          element={ <IsPrivate> <ProjectDetailsPage /> </IsPrivate> }
        />
 
        <Route
          path="/projects/edit/:projectId"
          element={ <IsPrivate> <EditProjectPage /> </IsPrivate> } 
        />
        
        <Route path="/logistics/signup" element={<IsAnon> <LogisticsSignupPage /> </IsAnon>} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/logistics/login" element={<IsAnon> <LogLoginPage /> </IsAnon>} />
        <Route path="/logHome" element={<IsAnon><LogHomePage/></IsAnon>} />
     
      </Routes>
    </div>
  );
}

export default App;
