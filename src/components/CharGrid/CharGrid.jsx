import React from 'react';
import './CharGrid.css'

function CharGrid(){
  return(
    <section className="gridChar">
      <div className="cardChar">
        <img></img>
        <h2>Nome do Personagem</h2>
        <ul className="dateChar">
          <li>Visão</li>
          <li>Arma</li>
          <li>Nação</li>
        </ul>
      </div>
    </section>
  )
}

export default CharGrid;