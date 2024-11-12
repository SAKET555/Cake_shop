import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleProceedToCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity || 1} - Price: ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
