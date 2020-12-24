import React from "react";
import { Monkey, Eagle, Bird, Bear, Swan, Elephants, Owl } from "./img/index";

import { Link } from "react-router-dom";

import "./styles.css";

function Portfolio() {
  return (
    <main id="portfolio" className="main-portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio">
        <figure>
          <Link to="/portfolio/externo">
            <img src={Monkey} alt="monkey" />
            <figcaption>Externo</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/pascoa">
            <img src={Eagle} alt="eagle" />
            <figcaption>Pascoa</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/lifestyle">
            <img src={Bird} alt="bird" />
            <figcaption>Lifestyle</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/junina">
            <img src={Bear} alt="bear" />
            <figcaption>Junina</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/batizado">
            <img src={Swan} alt="swan" />
            <figcaption>Batizado</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/gestante-estudio">
            <img src={Elephants} alt="elephants" />
            <figcaption>Gestante Estúdio</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/ano-novo">
            <img src={Swan} alt="swan" />
            <figcaption>Ano Novo</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/portfolio/natal">
            <img src={Owl} alt="owl" />
            <figcaption>Natal</figcaption>
          </Link>
        </figure>
      </div>
    </main>
  );
}

export default Portfolio;
