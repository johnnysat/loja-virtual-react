import React from 'react';
import './Header.css';

function Header(){
  return(
    <div className="navbar">
    <a src="#">Home</a>
    <div className="searchbar">
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