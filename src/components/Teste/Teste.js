import React from "react";
import "./Teste.css";
import logo from "../images/horse-logo.png";
const Teste = () => {
  return (
    <div class="teste-conteiner">
      <form class="testar-form">
        <h1>Teste o ChessBro</h1>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label for="local">Onde quer jogar:</label>
        <input type="text" id="local" name="local" required />

        <label for="nivel">Nível:</label>

        <div class="checkbox">
          <input
            type="checkbox"
            id="iniciante"
            name="nivel"
            value="iniciante"
          />
          <label for="iniciante">Iniciante</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="intermediario"
            name="nivel"
            value="intermediario"
          />
          <label for="intermediario">Intermediário</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="avancado" name="nivel" value="avancado" />
          <label for="avancado">Avançado</label>
        </div>

        <label for="tabuleiro">Possui um tabuleiro:</label>
        <div className="checkbox">
          <input type="checkbox" id="sim" name="tabuleiro" value="sim" />
          <label for="sim">Sim</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="nao" name="tabuleiro" value="nao" />
          <label for="nao">Não</label>
        </div>
      </form>
      <button type="submit">Buscar jogo</button>
      <div className="img"><img class="horse-logo" src={logo} alt="" /></div>
      
    </div>
  );
};

export default Teste;
