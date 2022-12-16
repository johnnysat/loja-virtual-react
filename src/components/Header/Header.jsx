import React from 'react';
import './Header.css';

function Header(){
  return(
  <div className="navbar">
    <div>
      <a className="mainLink" src="#">Home</a>
      <input className="searchBar" placeholder="Pesquise aqui"/>
      <button className="searchButton">Ok</button>
    </div>
    <ul>
      <li>Sobre</li>
      <li>Contato</li>
      <li>Carrinho</li>
    </ul>
  </div>
  )
}

export default Header;