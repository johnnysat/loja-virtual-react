import React from 'react';
import './Header.css';

function Header(){
  return(
  <div className="navbar">
    <div className="searchBar">
      <a className="mainLink" src="#">Home</a>
      <input placeholder="Pesquise aqui"/>
      <button>Ok</button>
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