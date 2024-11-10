// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CakeDetails from './pages/CakeDetails';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext'; // Import the CartProvider
import './App.css';

function App() {
  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cake/:id" element={<CakeDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
