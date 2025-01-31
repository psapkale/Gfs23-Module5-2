import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="heroSec">
      <div className="heroOverlay">
        <h1>
          Let us find your <br />
          <span className="highlight">Forever Food.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="hero-buttons">
          <button className="btn search-btn">Search Now</button>
          <button className="btn know-more-btn">Know more</button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
