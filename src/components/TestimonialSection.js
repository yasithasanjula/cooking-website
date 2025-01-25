import React from 'react';
import './../styles/TestimonialSection.css';

function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="container">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>"Absolutely loved it. Amazing food and charismatic chef."</p>
          </div>
          <div className="testimonial-author">
            <img src="emma-brown.jpg" alt="Emma Brown" /> 
            <p>Emma Brown, NYC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
