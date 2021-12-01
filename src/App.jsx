import React from "react";
import Header from "./Layout/Header";
import "./App.css";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
//import Home from "./Home/Home";
import Contactanos from "./Contactanos/Contactanos";

function App() {
  return (
    <>
      <Header />
      <Main>
        {/*<Home/>*/}
        <Contactanos />
      </Main>
      <Footer />
    </>
  );
}

export default App;
