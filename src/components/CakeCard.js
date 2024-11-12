// src/components/CakeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CakeCard = ({ id, title, price, imgSrc }) => (
  <div className="cake-card" style={{ border: "1px solid #ddd", padding: "1em", borderRadius: "8px", width: "200px", textAlign: "center" }}>
    <img src={imgSrc} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
    <h3>{title}</h3>
    <p>Price: ${price}</p>
    <Link to={`/cake/${id}`} style={{ color: "#007bff", textDecoration: "none", marginTop: "8px", display: "inline-block" }}>View Details</Link>
  </div>
);

export default CakeCard;
