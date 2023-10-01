import React from "react";
import "./TestimonialCard.css";
import star from "../../assets/star.svg";

function TestimonialCard({ author, description, image, rating }) {
  return (
    <div className="testimonial-card" data-testid="testimonial-card">
      <div className="testimonial-rating">
        {rating &&
          [...Array(rating)].map((_, index) => (
            <img key={index} src={star} alt="star" height={15} width={15} />
          ))}
      </div>

      <div className="testimonial-card-container">
        <img
          className="testimonial-profile-picture"
          src={image}
          alt="author"
          height={50}
        ></img>
        <p className="testimonial-card-author">{author}</p>
      </div>
      <p className="testimonial-description">{description}</p>
    </div>
  );
}

export default TestimonialCard;
