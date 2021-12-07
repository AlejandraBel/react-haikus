import React from "react";
import Header from "./Layout/Header";
import "./App.css";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
//import Home from "./Home/Home";
import Contactanos from "./Contactanos/Contactanos";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Contactanos />
      </Main>
      <Footer />
    </>
  );
}

export default App;
