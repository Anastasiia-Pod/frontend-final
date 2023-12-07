import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PartnerCard = ({ name, street, home, postcode, country, city, _id }) => {
  return (
    <div className="PartnerCard card" style={{ backgroundColor: "rgba(211, 228, 248, 0.7)" }}>
      <Link to={`/partners/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p>Street: {street}</p>
      <p>Home: {home}</p>
      <p>Postcode: {postcode}</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
    </div>
  );
};

PartnerCard.propTypes = {
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  };
  
export default PartnerCard;