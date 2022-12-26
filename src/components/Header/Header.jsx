import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


function Header() {
  return (
    <div className="navbar">
    <Navbar>
      <Container>
        <Navbar.Brand 
          href="#home"><spam className="navText">Genshin Impact</spam></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <spam className="navText">Feito por <a href="https://github.com/johnnysat">Johnny Sat</a></spam>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header;