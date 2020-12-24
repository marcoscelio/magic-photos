import React from "react";
import {
  Toggle,
  Portfolio,
  Slider,
  About,
  Footer,
  FormContact,
  Carousel,
} from "../../components";

import { BiUpArrow } from "react-icons/bi";

import "./styles.css";

function Main() {
  const handlePositonTop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="main-container">
        <Toggle />
        <Slider />
        <div className="base-fixed-top">
          <button className="fixed-top-button" onClick={handlePositonTop}>
            <BiUpArrow size={20} color="#fff" />
            <span>Ir para o topo</span>
          </button>
          <Portfolio />
          <Carousel />
          <About />
          <FormContact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
