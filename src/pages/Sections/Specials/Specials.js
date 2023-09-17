import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";
const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandmaâ€™s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$ 5.00",
  },
];

function Specials() {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    return navigate(pages.get("orders").path);
  };
  return (
    <div className="specials-container">
      <div className="specials-wrapper">
        <div className="specials-header">
          <h1 className="specials-title">Specials</h1>
          <Button
            class="specials-top-button"
            title={"Online Menu"}
            onClick={handleMenuClick}
          />
        </div>
      </div>
      <div className="specials-list">
        {specials.map((item) => {
          return (
            <Card
              title={item.title}
              id={item.id}
              description={item.description}
              image={item.image}
              price={item.price}
              order={"Order Delivery"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Specials;
