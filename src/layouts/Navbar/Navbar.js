import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleHomeClick = () => {
    nav("/");
  };
  const menu = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Reservations", link: "/reservations" },
    { label: "Order Online", link: "/orders" },
    { label: "Login", link: "/login" },
  ];
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src={Logo}
          height={50}
          alt="litle lemon logo"
          onClick={handleHomeClick}
        />
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {menu.map((item) => (
            <li key={item.label}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={MenuIcon} alt="nav toggle" />
      </div>
    </header>
  );
}

export default Navbar;
