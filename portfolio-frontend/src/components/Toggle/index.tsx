import React from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Header from "../Header";

import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlinePhone,
  AiOutlineLogout,
} from "react-icons/ai";

import { CgAlbum } from "react-icons/cg";

import { IconContext } from "react-icons";

import "./styles.css";

function Toggle() {
  const history = useHistory();

  return (
    <nav className="menu" id="main-menu">
      <Header />
      <button
        className="menu-toggle"
        id="toggle-menu"
        onClick={(e) => {
          e.preventDefault();
          let menu = document.getElementById("main-menu");
          menu?.classList.toggle("is-open");
        }}
      >
        toggle menu
      </button>
      <div className="menu-dropdown">
        <ul className="nav-menu">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <li>
              <Link to="/">
                <AiOutlineHome />
                Início
              </Link>
            </li>
            <li>
              <Link to="/#portfolio">
                <CgAlbum />
                Portfólio
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <AiOutlineHeart />
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/#contact">
                <AiOutlinePhone />
                Contato
              </Link>
            </li>
            <li>
              <Link to="/#">
                <AiOutlineWhatsApp />
                (15) 9966-7491
              </Link>
            </li>
            <li>
              <a
                href="http://www.facebook.com/amorecarinhofotografia"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFacebook />
              </a>
              <a
                href="https://www.instagram.com/amorecarinhofotografia/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="mailto:contato@amorecarinhofotografia.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li>
              <Link to="/login">
                <AiOutlineSetting />
              </Link>
              {localStorage.getItem("currentUser") ? (
                <Link
                  to="#"
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    history.push("/");
                  }}
                >
                  <AiOutlineLogout />
                  Sair
                </Link>
              ) : null}
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </nav>
  );
}

export default Toggle;
