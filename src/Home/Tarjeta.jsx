import react from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Tarjeta = ({ haiku, autor }) => {
  const [invisible, setInvisible] = useState(true);
  const cambiarVisibilidad = () => {
    /* tu codigo usando la funcion setInvisible() 
    La idea es pasar por parametro el valor true a seteInvisible()
    cuando invisibole sea false, y false cuando invisible valga true*/
  };
  const urlImagen = "https://picsum.photos";
  return (
    <div className="Tarjeta">
      <div className="ImagenTarjeta" onClick={cambiarVisibilidad}>
        <p className="Haiku" style={{ display: invisible ? "none" : "block" }}>
          {haiku}
        </p>
        <img className="ImagenPrincipal" src="https://picsum.photos/500/300" alt="ImagenHaiku" />
      </div>
      <div className="CuerpoTarjeta">
        <div className="InfoTarjeta">
          <img
            className="fotodeperfil"
            src="https://picsum.photos/32/32"
            alt=""
          />
          <h4>Titulo del Haiku</h4>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
      </div>
    </div>
  );
};
export default Tarjeta;
