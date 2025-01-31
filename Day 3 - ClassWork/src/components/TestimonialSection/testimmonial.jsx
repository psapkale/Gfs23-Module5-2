import React from "react";
import './testimonial.css';
const testimonialData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. et consectetur adipisicing elit Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione dolore.",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt soluta facilis voluptas dicta repudiandae.",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. quidem nulla quisquam natus velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatem quidem nulla quisquam natus velit",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatem quidem nulla quisquam natus velit",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
    name: "Gladis Lennon",
    designation: "Head of SEO",
  },
];

const testimonial = () => {
  return (
    <section className="testimonialSec">
      <div className="testimonial-grid">
        {testimonialData.map((testimonials) => (
          <div key={testimonials.id} className="testimonialCard">
            <p className="testimonial-text">{testimonials.text}</p>
            <div className="testimonialAuthor">
              <img
                src="./authorImg.avif"
                alt="author"
                className="author-image"
              />
              <div>
                <p className="author-name">{testimonials.name}</p>
                <p className="author-position">{testimonials.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default testimonial;
