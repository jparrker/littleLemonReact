import React from "react";
import "./Popup.css";
import Button from "../Button/Button";
import success from "../../assets/success.png";
const Popup = ({ title, description, onClose }) => {
  return (
    <>
      <div
        data-testid="popup-background"
        className="popup-background"
        onClick={onClose}
      ></div>
      <div className="popup">
        <img id="success" src={success} alt="success" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
