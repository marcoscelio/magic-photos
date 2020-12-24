import React from "react";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/icons/facebook.svg";
import InstagramSVG from "../../assets/icons/instagram.svg";
import TwitterSVG from "../../assets/icons/twitter.svg";
import Header from "../Header";

import "./styles.css";

function Footer() {
  return (
    <footer className="page-footer">
      <Header />
      <div className="social-media-plus-contact">
        <div className="image-icons">
          <a
            href="https://www.facebook.com/amorecarinhofotografia/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookSVG} alt="facebook link" />
          </a>
          <a
            href="https://www.instagram.com/amorecarinhofhrefgrafia/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstagramSVG} alt="instagram link" />
          </a>
          <a
            href="https://www.instagram.com/amorecarinhofotografia/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterSVG} alt="twitter link" />
          </a>
        </div>
        <button className="contact-button">Contato</button>
      </div>
      <h6>
        &#169; Pangolin Technology: Desenvolvimento de aplicações Web | Magic
        Photos | 2020 - 2020
      </h6>
    </footer>
  );
}

export default Footer;
