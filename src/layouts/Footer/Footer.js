import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <img className="footer-logo" src={Logo} alt="little lemon logo"></img>
        <div className="footer-links">
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/reservations">
            Reservation
          </Link>
          <Link className="footer-item" to="/order-online">
            Order Online
          </Link>
          <Link className="footer-item" to="/login">
            Login
          </Link>
        </div>

        <div className="footer-socials">
          <a
            className="footer-item"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer-item"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-item"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="footer-contact">
          <p className="footer-item">Contact us</p>
          <p className="footer-item">123 Citrus Lane</p>
          <p className="footer-item">555-555-555</p>
          <p className="footer-item">little.lemon@lemon.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
