import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PartnerListPage from "./pages/PartnerListPage";
import PartnerDetailsPage from "./pages/PartnerDetailsPage";
import EditPartnerPage from "./pages/EditPartnerPage";
import AddPartner from "./components/AddPartner";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon"; 
import LogisticsSignupPage from "./pages/LogisticsSignupPage";
import LogHomePage from "./pages/LogHomePage";
import LogLoginPage from "./pages/LogLoginPage";
import OrderPage from "./pages/OrderCreatePage";



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
          path="/partners/:partnerId"
          element={ <IsPrivate> <EditPartnerPage /> </IsPrivate> } 
        />

        <Route
          path="/partners/new"
          element={ <IsPrivate> <AddPartner /> </IsPrivate> } 
        />

<Route
          path="/logistics/orders/new"
          element={ <IsPrivate> <OrderPage /> </IsPrivate> } 
        />
        

        <Route path="/logistics/signup" element={<IsAnon> <LogisticsSignupPage /> </IsAnon>} />
        <Route path="/sales/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/sales/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/logistics/login" element={<IsAnon> <LogLoginPage /> </IsAnon>} />
        <Route path="/logistics/logHome" element={<IsPrivate><LogHomePage/></IsPrivate>} />
        <Route path="/salesHome" element={<IsAnon><HomePage/></IsAnon>} />
     
      </Routes>
    </div>
  );
}

export default App;
