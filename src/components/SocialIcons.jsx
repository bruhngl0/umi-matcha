import React from "react";
import { FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import "../styles/socialicons.scss";

const SocialIcons = () => {
  return (
    <div className="fixed-social-icons">
      <a
        href="https://www.instagram.com/umimatchaclub"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <PiInstagramLogoFill />
      </a>
      <a
        href="https://pin.it/cGMsvkn8B"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon pinterest"
      >
        <FaPinterest />
      </a>
    </div>
  );
};

export default SocialIcons;

