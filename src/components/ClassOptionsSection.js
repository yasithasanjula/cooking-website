import React, { useState, useEffect } from 'react';
import './ClassDescriptionSection.css';

function ClassDescriptionSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 6); // Cycle through 6 slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="class-description">
      <div className="container">
        <div className="slider">
          <div className="left-slider" style={{ transform: `translateY(-${slideIndex * 100}%)` }}>
            <img src="image1.jpg" alt="Image 1" />
            <img src="image2.jpg" alt="Image 2" />
            <img src="image3.jpg" alt="Image 3" />
          </div>
          <div className="right-slider" style={{ transform: `translateY(${slideIndex * 100}%)` }}>
            <img src="image4.jpg" alt="Image 4" />
            <img src="image5.jpg" alt="Image 5" />
            <img src="image6.jpg" alt="Image 6" />
          </div>
        </div>
        <h2>Explore Sri Lanka's Rich Flavors, Hands-On</h2>
        <p>Join Chef Iran in exploring the rich flavors of Sri Lankan cuisine. Whether you're in the mood for a spicy curry, a delightful coconut dessert, or a taste of Sri Lanka's vibrant street food, each cooking class offers a unique, hands-on experience tailored to your tastes.</p>
        <div className="buttons">
          <button>BOOKING CLASS →</button>
          <button>EXPLORE CLASS →</button>
        </div>
      </div>
    </section>
  );
}

export default ClassDescriptionSection;
