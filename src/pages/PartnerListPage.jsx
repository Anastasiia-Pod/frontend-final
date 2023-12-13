import React, { useState, useEffect } from "react";
import axios from "axios";

import PartnerCard from "../components/PartnerCard";

const API_URL = "http://localhost:5005";

function PartnerListPage() {
  const [partners, setPartners] = useState([]);

  const getAllPartners = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/partners`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => setPartners(response.data))
      .catch((error) => console.log(error));
  };

  // This effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPartners();
  }, []);

  return (
    <div className="PartnerListPage">

      {partners.map((partner) => (
        <PartnerCard key={partner._id} {...partner} />
      ))}
    </div>
  );
}

export default PartnerListPage;
