import React from react;
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer>
        <LinkFooter icono={faEnvelope} texto="Contactanos"/>
        <LinkFooter icono={faShare} texto="Compartir"/>
      </footer>
      </div>
  );
  
};

export default Footer;
