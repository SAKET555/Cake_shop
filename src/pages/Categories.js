// src/pages/Categories.js
import React from 'react';
import CakeCard from '../components/CakeCard';

// Importing images from local assets folder
import chocolateCakeImg from '../assets/chocolate-cake.jpg';
import fruitCakeImg from '../assets/fruit-cake.jpg';
import customCakeImg from '../assets/custom-cake.jpg';
import pastryImg from '../assets/pastry.jpg';
import kingCakeImg from '../assets/king-cake.jpg';
import queenCakeImg from '../assets/queen-cake.jpg';
import butterscotchCakeImg from '../assets/butterscotch-cake.jpg';
import brownieImg from '../assets/brownie.jpg';
import iceCreamCakeImg from '../assets/ice-cream-cake.jpg';
import vanillaCakeImg from '../assets/vanilla-cake.jpg';
import specialCakeImg from '../assets/special-cake.jpg';
import giantDinoCakeImg from '../assets/giant-dino-cake.jpg';

const Categories = () => (
  <div>
    <h1>Cake Categories</h1>
    <div className="categories" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "3em", flexWrap: 'wrap' }}>
      <CakeCard id="1" title="Chocolate Cake" price="10" imgSrc={chocolateCakeImg} />
      <CakeCard id="2" title="Fruit Cake" price="15" imgSrc={fruitCakeImg} />
      <CakeCard id="3" title="Custom Cake" price="20" imgSrc={customCakeImg} />
      <CakeCard id="4" title="Pastry" price="5" imgSrc={pastryImg} />
      <CakeCard id="5" title="King Cake" price="30" imgSrc={kingCakeImg} />
      <CakeCard id="6" title="Queen Cake" price="30" imgSrc={queenCakeImg} />
      <CakeCard id="7" title="Butterscotch Cake" price="10" imgSrc={butterscotchCakeImg} />
      <CakeCard id="8" title="Brownie" price="15" imgSrc={brownieImg} />
      <CakeCard id="9" title="Ice Cream Cake" price="40" imgSrc={iceCreamCakeImg} />
      <CakeCard id="10" title="Vanilla Cake" price="5" imgSrc={vanillaCakeImg} />
      <CakeCard id="11" title="Special Cake" price="30" imgSrc={specialCakeImg} />
      <CakeCard id="12" title="Giant Dino Cake" price="30" imgSrc={giantDinoCakeImg} />
    </div>
  </div>
);

export default Categories;
