import React from "react";
import "./NavBar.css";
import logo from "../images/logo.png"

function NavBar() {
  return (
    <div class="navbar-container">
      <nav class="navbar">
          <img src={logo} class= "logo">
          </img>
          <div className="itens">
            <a>Home</a>
            <a>Produto</a>
            <a>Teste</a>
          </div>
      </nav>
    </div>
  );
}

export default NavBar;
