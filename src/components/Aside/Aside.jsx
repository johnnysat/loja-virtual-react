import React from 'react';
import './Aside.css';

function Aside() {
  return (
    <aside className="asideBar">
    <h3>Filtre por Visão</h3>
    <ul className="charList">
      <li>Pyro</li>
      <li>Hydro</li>
      <li>Electro</li>
      <li>Anemo</li>
      <li>Cryo</li>
      <li>Dendro</li>
    </ul>
    </aside>
  )
}

export default Aside;