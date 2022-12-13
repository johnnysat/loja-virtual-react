import React from 'react';
import './Header.css';

function Header(){
  return(
    <div className="navbar">
    <div className="searchbar">
      <a src="#">Home</a>
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