import React from "react";
import Header from "./Layout/Header";
import "./App.css";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home/>
      </Main>
      <Footer />

    </>
  );
}

export default App;
