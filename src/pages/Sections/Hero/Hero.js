import { useNavigate } from "react-router-dom";
import "./Hero.css";
import pages from "../../../utils/pages";
import Image from "../../../assets/restaurantchef.jpg";
import Button from "../../../components/Button/Button";

function Hero() {
  const navigate = useNavigate();
  const onClickReservation = () => {
    navigate(pages.get("reservations").path);
  };
  return (
    <div className="hero-background">
      <div className="hero">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-info">
            Founded by Greek immigratns in 1902, Little Lemon is Chicago's
            best-known, award winning, family owned, mediterranean resturant.
            From greek classics to modern mediterranean dishes, whether you are
            dining in or you need catering, Little Lemon has you covered.
          </p>
          <Button title={"Reserve a table"}>
            {" "}
            onClick={onClickReservation}{" "}
          </Button>
        </div>
        <img
          className="hero-image"
          src={Image}
          alt="Little Lemon check preparing food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}

export default Hero;
