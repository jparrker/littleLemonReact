import { Link } from "react-router-dom";
import "./Card.css";
import Button from "../Button/Button";
const Card = ({ image, title, price, description, order }) => {
  return (
    <article className="card-container">
      <div className="card-img">
        <img src={image} alt="Special dessert" />
      </div>

      <div className="card-text">
        <div className="card-title">
          <h3>{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p id="card-description">{description}</p>

        <Link to="#">
          <div className="card-order-btn">
            <Button title={"Order Delivery"}></Button>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Card;
