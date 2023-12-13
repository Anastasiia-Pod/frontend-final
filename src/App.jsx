import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PartnerListPage from "./pages/PartnerListPage";
import PartnerDetailsPage from "./pages/PartnerDetailsPage";
import EditPartnerPage from "./pages/EditPartnerPage";
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
          path="/logistics/partners"
          element={ <IsPrivate> <PartnerListPage /> </IsPrivate> } 
        />
 
        <Route
          path="/logistics/partners/:partnerId"
          element={ <IsPrivate> <PartnerDetailsPage /> </IsPrivate> }
        />
 
        <Route
          path="/partners/edit/:projectId"
          element={ <IsPrivate> <EditPartnerPage /> </IsPrivate> } 
        />
        
        <Route path="/logistics/signup" element={<IsAnon> <LogisticsSignupPage /> </IsAnon>} />
        <Route path="/sales/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/sales/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/logistics/login" element={<IsAnon> <LogLoginPage /> </IsAnon>} />
        <Route path="/logistics/logHome" element={<IsAnon><LogHomePage/></IsAnon>} />
        <Route path="/salesHome" element={<IsAnon><HomePage/></IsAnon>} />
     
      </Routes>
    </div>
  );
}

export default App;
