// src/pages/Home.js
import React from 'react';
import CakeCard from '../components/CakeCard';

const Home = () => (
  <div className="homepage">
    <h1>Welcome to the Cake Shop</h1>
    <p style={{ textAlign: 'center', color: '#eee' }}>
      Discover the finest cakes for every occasion
    </p>
    <div className="featured-cakes">
      <CakeCard title="Chocolate Cake" price="10" />
      <CakeCard title="Fruit Cake" price="15" />
      <CakeCard title="Red Velvet Cake" price="12" />
    </div>
  </div>
);

export default Home;
