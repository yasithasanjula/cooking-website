import React, { useState } from 'react';
import './FooterSection.css';

function FooterSection() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the email subscription, 
    // such as sending the email to your backend for processing.
    console.log('Email:', email); 
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <a href="/">Grand 39 Cook with Iran</a>
          </div>
          <div className="contact-info">
            <p>
              <span>📞</span> +94 123456789
            </p>
            <p>
              <span>📍</span> 39 Passara Rd, Ella 90000,<br /> Sri Lanka
            </p>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="/concept">Concept</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/join-us">Join Us</a></li>
            </ul>
          </div>
          <div className="newsletter">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">→</button>
            </form>
            <p>Subscribe to our newsletter to stay in the loop with our latest news, promotions, and events.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="#">@Lorem Ipsum</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
