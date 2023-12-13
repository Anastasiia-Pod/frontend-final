import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = "http://localhost:5005";

const OrderComponent = ({ partnerId }) => {
  const [requestText, setRequestText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      partnerId,
      requestText,
      dateTime: new Date(), // Add the current date and time of the order
    };

    axios
      .post(`${API_URL}/api/orders`, orderData)
      .then((response) => {
        // Handle successful order submission (optional)
        console.log("Order submitted successfully");
      })
      .catch((error) => {
        // Handle error (optional)
        console.error("Error submitting order", error);
      });
  };

  return (
    <div className="OrderComponent" style={{ backgroundColor: "rgba(211, 228, 248, 0.7)" }}>
      <h3>Place an Order</h3>

      {/* Display Partner's Name and Address based on partnerId */}
      <div>
        <p>Partner's Name: {/* Retrieve and display partner's name from the database based on partnerId */}</p>
        <p>Partner's Address: {/* Retrieve and display partner's address from the database based on partnerId */}</p>
      </div>

      {/* Request Text Input */}
      <form onSubmit={handleSubmit}>
        <label>Request Text:</label>
        <textarea
          value={requestText}
          onChange={(e) => setRequestText(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button type="submit">Submit Order</button>
      </form>

    </div>
  );
};

OrderComponent.propTypes = {
  partnerId: PropTypes.string.isRequired,
};

export default OrderComponent;
