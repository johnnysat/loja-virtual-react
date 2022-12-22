import React from 'react';
import './CharCard.css'
import imageChar from '../../images/Diluc.png'

function CharCard({name}){
  return(
    <section className="gridChar">
      <div className="cardChar">
        <img className="imgChar" src={imageChar}></img>
        <h2>{name}</h2>
        <ul className="dateChar">
          <li>Pyro</li>
          <li>Espadão</li>
          <li>Mondstad</li>
        </ul>
      </div>
    </section>
  )
}

export default CharCard;