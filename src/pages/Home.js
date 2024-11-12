// src/pages/Home.js
import React from 'react';
import CakeCard from '../components/CakeCard';

// Importing images from local assets folder
import weekendSpecialCakeImg from '../assets/weekend-special-cake.jpg';
import holidayCakeImg from '../assets/holiday-cake.jpg';
import chocolateCakeImg from '../assets/chocolate-cake.jpg';
import fruitCakeImg from '../assets/fruit-cake.jpg';
import redVelvetCakeImg from '../assets/red-velvet-cake.jpg';

const Home = () => (
  <div className="homepage">
    <h1>Welcome to the Cake Shop</h1>
    <p style={{ textAlign: 'center', color: '#6E6E6E' }}>
      Discover the finest cakes for every occasion
    </p>
    <div className="featured-cakes" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "2em", flexWrap: 'wrap' }}>
      <CakeCard title="Weekend Special Cake" price="10" imgSrc={weekendSpecialCakeImg} />
      <CakeCard title="Holiday Cake" price="15" imgSrc={holidayCakeImg} />
      <CakeCard title="Chocolate Cake" price="10" imgSrc={chocolateCakeImg} />
      <CakeCard title="Fruit Cake" price="15" imgSrc={fruitCakeImg} />
      <CakeCard title="Red Velvet Cake" price="12" imgSrc={redVelvetCakeImg} />
    </div>
  </div>
);

export default Home;
