import React from "react";
import "./Produto.css";
import Play from "../images/play.png"



const Produto = () => {
  return (
    <div class="produto-container">
      <div className="produto">
        <img class="play" src={Play} alt="" />
        <span className="right-text">
          Informe onde quer jogar, quando está disponível e se você possui tabuleiro que o ChessBro encontrará seu oponente. Xeque-Mate!
        </span>
      </div>
    </div>
  );
};

export default Produto;
