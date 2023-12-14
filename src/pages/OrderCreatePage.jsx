import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderComponent from "../components/OrderCard";
import logHome from '/images/logHome.jpeg';

const API_URL = "http://localhost:5005";

const OrderPage = () => {
  const { partnerId } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    // Fetch partner details based on partnerId
    axios
      .get(`${API_URL}/api/partners/${partnerId}`)
      .then((response) => {
        setPartner(response.data);
      })
      .catch((error) => {
        // Handle error (optional)
        console.error("Error fetching partner details", error);
      });
  }, [partnerId]);

  const logHomePageStyle = {
    height: '100vh',
    backgroundImage: `url(${logHome})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  };

  return (
    <div className="OrderPage" style={logHomePageStyle}>
      <h2 className="congrats">Place an Order</h2>

      {/* Render OrderComponent and pass partnerId as a prop */}
      {partner && <OrderComponent partner={partner} />}

      {/* Optionally display partner details */}
      {partner && (
        <div>
          <p>Name: {partner.name}</p>
          <p>Address: {partner.address}</p>
        </div>
      )}
    </div>
  );
};

export default OrderPage;

  