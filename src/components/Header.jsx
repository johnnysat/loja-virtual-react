import React from 'react';
import './Header.css';

function Header(){
  return(
    <div className="navbar">
    <a src="#">Home</a>
    <ul>
      <li>Sobre</li>
      <li>Contato</li>
      <li>Carrinho</li>
    </ul>
    </div>
  )
}

export default Header;