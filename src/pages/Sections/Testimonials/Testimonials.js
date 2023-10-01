import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "Mark Z.",
    description: "Little Lemon catered my Wedding. They did an excellent job!",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=0.663xw:0.475xh;0.162xw,0.101xh&resize=1200:*",
    rating: 5,
  },
  {
    id: 2,
    author: "Jack D.",
    description:
      "Little Lemon has the best Greek food in Chiago. I stop by everytime I get the chance.",
    image:
      "https://e3.365dm.com/21/11/1600x900/skynews-ceo-twitter-jack-dorsey_5599752.jpg?20230704155622",
    rating: 5,
  },
  {
    id: 3,
    author: "Elon M.",
    description:
      "Little Lemon is so good, there will be Little Lemon on Mars. ",
    image:
      "https://people.com/thmb/FzF9X9Zy-Fn-axCgdo3N25c-bBM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x29:691x31)/elon-musk-grimes22-50391e9afa074715a57e23450841abac.jpg",
    rating: 4,
  },
  {
    id: 1,
    author: "Chief K.",
    description:
      "Chicago has a lot of Greek restaurants but Little Lemon is the best",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-7539-20121017-keef-624-1350503449.jpg?w=624",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              author={item.author}
              description={item.description}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
