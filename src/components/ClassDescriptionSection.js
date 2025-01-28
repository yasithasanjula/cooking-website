import React from "react";
import "./../styles/ClassDescriptionSection.css";

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import middleImage from "../images/middle_image.jpg";

function ClassDescriptionSection() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="class-description">
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <div className="marquee">
            <div className="marquee-content">
              {images.slice(0, 3).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))}
              {images.slice(0, 3).map((image, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="center-column">
          <h2>
            Explore Sri Lanka's Rich <br /> Flavors, Hands-On
          </h2>

          <div className="middle-image-container">
            <img src={middleImage} alt="Middle Image" />
          </div>
          <p>
            Join Chef Iran in exploring the rich flavors of Sri Lankan cuisine.
            Whether you're in the mood for a spicy curry, a delightful coconut
            dessert, or a taste of Sri Lanka's vibrant street food, each cooking
            class offers a unique, hands-on experience tailored to your tastes.
          </p>

          <div className="buttons">
            <button>BOOKING CLASS →</button>
            <button>EXPLORE CLASS →</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="marquee">
            <div className="marquee-content reverse">
              {images.slice(3).map((image, index) => (
                <img key={index + 3} src={image} alt={`Image ${index + 4}`} />
              ))}
              {images.slice(3).map((image, index) => (
                <img
                  key={`duplicate-${index + 3}`}
                  src={image}
                  alt={`Image ${index + 4}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassDescriptionSection;
