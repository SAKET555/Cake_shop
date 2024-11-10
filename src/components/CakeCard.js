// src/components/CakeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CakeCard = ({ title, price }) => (
  <div className="cake-card">
    <h3>{title}</h3>
    <p>Price: ${price}</p>
    <Link to="/cake/1">View Details</Link>
  </div>
);

export default CakeCard;
