import React from 'react';
import './Aside.css';

function Aside() {
  return (
    <aside className="asideBar">
    <h3>Lista de Personagens</h3>
    <ul className="charList">
      <li>Albedo</li>
      <li>Mona</li>
      <li>Diluc</li>
      <li>Venti</li>
      <li>Jean</li>
      <li>Amber</li>
      <li>Razor</li>
    </ul>
    </aside>
  )
}

export default Aside;