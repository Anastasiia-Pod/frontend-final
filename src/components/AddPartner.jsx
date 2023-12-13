import React, { useState } from "react";
import axios from "axios";
import logHome from '/images/logHome.jpeg';

const API_URL = "http://localhost:5005";

function AddPartner() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const [postcode, setPostcode] = useState("");
  // The country and city are set to Germany and Berlin by default
  const country = "Germany";
  const city = "Berlin";
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, address: { country, city, street, home, postcode } };

    axios
      .post(`${API_URL}/api/partners`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setName("");
        setStreet("");
        setHome("");
        setPostcode("");
      })
      .catch((error) => console.log(error));
  };

  const partnerAddPageStyle = {
    height: '100vh',
    backgroundImage: `url(${logHome})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  }
  return (
    <div className="addPartner" style={partnerAddPageStyle}>
      <h3 className="congratsPartner">Add a new Partner</h3>

      <form onSubmit={handleSubmit} className="partnerContainer">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <label>Home:</label>
        <input
          type="text"
          name="home"
          value={home}
          onChange={(e) => setHome(e.target.value)}
          required
        />

        <label>Postcode:</label>
        <input
          type="text"
          name="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          required
        />

        <button type="submit" className="partnerButton">Add Partner</button>
      </form>
    </div>
  );
}

export default AddPartner;