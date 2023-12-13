/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddPartner from "../components/AddPartner";
import PartnerCard from "../components/PartnerCard";

const API_URL = "http://localhost:5005";

function PartnerDetailsPage(props) {
  const [partner, setPartner] = useState(null);
  const { partnerId } = useParams();

  const getPartner = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/partners/${partnerId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const onePartner = response.data;
        setPartner(onePartner);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPartner();
  }, []);

  return (
    <div className="partnerDetails">
      {partner && (
        <>
          <PartnerCard {...partner} />
        </>
      )}

      {/*  */}
      <AddPartner refreshPartner={getPartner} partnerId={partnerId} />
{/* 
      <Link to="/partners">
        <button>Back to partners</button>
      </Link>

      <Link to={`/partners/edit/${partnerId}`}>
        <button >Edit Partner</button>
      </Link> */}
    </div>
  );
}

export default PartnerDetailsPage;