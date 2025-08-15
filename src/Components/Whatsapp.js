import React from "react";
import "../Stylesheet/Whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "9762620462"; // Your number
  const message = "Hello! I am interested in your services";

  // Check if device is mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Choose link format based on device
  const whatsappLink = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src="./whatsapp-logo4.png" alt="WhatsApp Chat" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
