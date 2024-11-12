// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Follow Us on Social Media</h1>
    <br/>
    <br/>
    <br/>
    <p>Stay connected with us through our social media channels!</p>
    <br/>
    <br/>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b5998', color: '#fff' }}>Facebook</button>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#E1306C', color: '#fff' }}>Instagram</button>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#1DA1F2', color: '#fff' }}>Twitter</button>
      </a>
    </div>
  </div>
);

export default SocialMedia;
