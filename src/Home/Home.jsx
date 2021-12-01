import react from "react";
import "./Home.css";
import Tarjeta from "./Tarjeta";
const Home = () => {
  return (
    <div>
      <h4 className="H4">coleccion</h4>
      <div className="galeria">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </div>
  );
};
export default Home;
