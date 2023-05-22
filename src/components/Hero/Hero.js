import React from "react";
import "./Hero.css";
import Map from "../images/mapa.png"

const Hero = () => {
  return (
    <div class="hero-container">
      <div className="hero">
        <span className="left-text">
          Cansado de procurar alguem para jogar uma partida de xadrez
          cara-a-cara e nunca encontrar? Com o ChessBro você nunca mais 
          vai ficar sem um adversário!
        </span>
        <img class="mapa" src={Map} alt="" />
      </div>
    </div>
  );
};

export default Hero;
