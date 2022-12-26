import React from 'react';
import './Aside.css';
import Pyro from '../../images/vision/Pyro.png'

function Aside() {
  return (
    <aside className="asideBar">
    <h3>Filtre por Visão</h3>
    <ul className="visionList">
      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>

      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>

      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>

      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>

      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>

      <li>
        <img 
        className="visionImg"
        src={Pyro}></img>
      </li>
      
    </ul>
    </aside>
  )
}

export default Aside;