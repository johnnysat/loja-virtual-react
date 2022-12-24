import React from 'react';
import './CharCard.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ImgTest from '../../images/Diluc.png'

function CharCard({ char, name }) {
  const charImage = import(`../../images/${char.name}.png`);
  
  return (
    <Card style={{ width: '13rem' }} className="text-center cardBody">
        <Card.Img variant="top"
        src={ImgTest}
        alt={char.name} />
        <Card.Body>
        <ListGroup.Item className="dateChar">{char.name}</ListGroup.Item>
        <ListGroup.Item>{char.vision}</ListGroup.Item>
        <ListGroup.Item>{char.weapon}</ListGroup.Item>
        <ListGroup.Item>{char.nation}</ListGroup.Item>
        </Card.Body>
    </Card>
  );
}

export default CharCard;
