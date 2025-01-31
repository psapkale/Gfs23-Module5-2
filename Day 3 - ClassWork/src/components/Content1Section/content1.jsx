import React from "react";
import "./content1.css"; 

const ResponsiveCard = () => {
  return (
    <div className="container">
      {/* Image Section */}
      <div className="image-section">
        <img
          src="./geekfood.avif" 
          alt="House"
          className="responsive-image"
        />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="button">Get in Touch</button>
      </div>
    </div>
  );
};

export default ResponsiveCard;
