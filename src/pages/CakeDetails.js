// src/pages/CakeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CakeDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Cake Details for Cake ID: {id}</h1>
      <p>Details about the selected cake here...</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;