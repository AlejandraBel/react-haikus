import react from "react";
import "./Contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contactanos = () => {
  return (
    <>
      <div className="Contactanos">
        <FontAwesomeIcon className="iconosDeContactanos" icon={faFacebook} />
        <FontAwesomeIcon className="iconosDeContactanos" icon={faInstagram} />
        <FontAwesomeIcon className="iconosDeContactanos" icon={faEnvelope} />
      </div>
      <p className="texto"> hola como estas</p>
    </>
  );
};

export default Contactanos;
