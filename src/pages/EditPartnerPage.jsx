import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import logHome from '/images/logHome.jpeg';

const API_URL = "http://localhost:5005";

function EditPartnerPage() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const [postcode, setPostcode] = useState("");

  const { partnerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/partners/${partnerId}`)
      .then((response) => {
        const onePartner = response.data;
        setName(onePartner.name);
        setStreet(onePartner.address.street);
        setHome(onePartner.address.home);
        setPostcode(onePartner.address.postcode);
      })
      .catch((error) => console.log(error));
  }, [partnerId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      address: {
        street,
        home,
        postcode,
        country: "Germany",
        city: "Berlin",    
      },
    };

    axios
      .put(`${API_URL}/api/partners/${partnerId}`, requestBody)
      .then(() => {
        navigate(`/partners/${partnerId}`);
      })
      .catch((error) => console.log(error));
  };

  const deletePartner = () => {
    axios
      .delete(`${API_URL}/api/partners/${partnerId}`)
      .then(() => {
        navigate("/partners");
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
    <div className="editPartnerPage" style={partnerAddPageStyle}>
      <h3 className="congratsPartner">Edit a Partner</h3>

      <form onSubmit={handleFormSubmit} className="partnerContainer">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <label>Home:</label>
        <input
          type="text"
          name="home"
          value={home}
          onChange={(e) => setHome(e.target.value)}
        />

        <label>Postcode:</label>
        <input
          type="text"
          name="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />

        <button type="submit" className="deletePartnerButton">Update Partner</button>
  

      <button onClick={deletePartner} className="deletePartnerButton">Delete Partner</button>
      </form>
    </div>
  );
}

export default EditPartnerPage;
