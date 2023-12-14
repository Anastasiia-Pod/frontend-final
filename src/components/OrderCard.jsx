import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PartnerCard from "./PartnerCard";

const OrderCard = ({ name, address, _id, good}) => {
  const { street, home, postcode, country, city } = address;
  const {goodname, weight} = good;

  return (
    <div className="PartnerCard card" style={{ backgroundColor: "rgba(76, 160, 236, 0.4)", color: "black"}}>
      <Link to={`/partners/${_id}`}>
        <h3 style={{ color: "black"}}>{name}</h3>
      </Link>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>Street: {street}</p>
      <p>Home: {home}</p>
      <p>Postcode: {postcode}</p>
      <p>Goods: {goodname}</p>
      <p>Weight: {weight}</p>
    </div>
  );
};

OrderCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    home: PropTypes.number.isRequired,
    postcode: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  _id: PropTypes.string.isRequired,
  good: PropTypes.shape({
    goodname: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
}).isRequired,
};

export default PartnerCard;
  
