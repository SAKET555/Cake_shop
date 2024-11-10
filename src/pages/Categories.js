// src/pages/Categories.js
import React from 'react';
import CakeCard from '../components/CakeCard';

const Categories = () => (
  <div>
    <h1>Cake Categories</h1>
    <div className="categories">
      <CakeCard title="Chocolate Cake" price="10" />
      <CakeCard title="Fruit Cake" price="15" />
      <CakeCard title="Custom Cake" price="20" />
    </div>
  </div>
);

export default Categories;
