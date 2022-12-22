import React from 'react';
import './CharCard.css'
import imageChar from '../../images/Diluc.png'

function CharCard({ char }) {
  return (
    <section className="gridChar">
      <div className="cardChar">
        <img className="imgChar" src={imageChar}></img>
        <h2>{char.name}</h2>
        <ul className="dateChar">
          <li>{char.vision}</li>
          <li>{char.weapon}</li>
          <li>{char.nation}</li>
        </ul>
      </div>
    </section>
  );
}

export default CharCard;