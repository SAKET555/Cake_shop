// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please reach out with any questions or comments.</p>
    <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#ff69b4', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;
