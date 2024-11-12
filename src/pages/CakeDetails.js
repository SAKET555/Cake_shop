import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const CakeDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock item details
  const item = {
    id: id,
    title: 'Selected Cake',
    price: 20, // Example price, can be dynamic
  };

  return (
    <div>
      <h1>Cake Details for Cake ID: {id}</h1>
      <p>Details about the selected cake here...</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
