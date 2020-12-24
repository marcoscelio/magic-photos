import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Header() {
  return (
    <header id="header" className="page-header">
      <Link to="/">
        <div className="title">
          <h1>Magic photos</h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;
