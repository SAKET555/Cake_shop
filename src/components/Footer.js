// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{
    backgroundColor: '#333', 
    color: '#fff', 
    padding: '2rem 0', 
    textAlign: 'center',
    marginTop: '2rem'
  }}>
    <div style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Quick Links</div>
    <ul style={{
      listStyleType: 'none', 
      padding: 0, 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '2rem',
      marginBottom: '1rem'
    }}>
      <li>
        <Link to="/contact" style={{ color: '#FF69B4', textDecoration: 'none', fontSize: '1.1rem' }}>Contact Us</Link>
      </li>
      <li>
        <Link to="/about" style={{ color: '#FF69B4', textDecoration: 'none', fontSize: '1.1rem' }}>About Us</Link>
      </li>
      <li>
        <Link to="/social" style={{ color: '#FF69B4', textDecoration: 'none', fontSize: '1.1rem' }}>Social Media Links</Link>
      </li>
    </ul>
    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>© 2024 Cake Shop. All rights reserved.</p>
  </footer>
);

export default Footer;
