import React from 'react';
import './ClassOptionsSection.css';

function ClassOptionsSection() {
  return (
    <section className="class-options">
      <div className="container">
        <h2>Choose Your Culinary Adventure</h2>
        <div className="class-cards">
          <div className="class-card">
            <img src="class1.jpg" alt="Traditional Sri Lankan Curry Class" />
            <h3>Traditional Sri Lankan Curry</h3>
          </div>
          <div className="class-card">
            <img src="class2.jpg" alt="Cooking with Coconut: Sweet and Savory" />
            <h3>Cooking with Coconut: Sweet and Savory</h3>
          </div>
          <div className="class-card">
            <img src="class3.jpg" alt="Sri Lankan Street Food Adventure" />
            <h3>Sri Lankan Street Food Adventure</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassOptionsSection;
