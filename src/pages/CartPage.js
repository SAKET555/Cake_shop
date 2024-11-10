// src/pages/CartPage.js
import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Chocolate Cake', quantity: 1, price: 10 },
    { id: 2, title: 'Fruit Cake', quantity: 2, price: 15 },
  ]);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity} - Price: ${item.price}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;