import React, { useState, useEffect } from 'react';
import './CharCard.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CharCard({ char, name }) {
  const [charImage, setCharImage] = useState(null);

  useEffect(() => {
    import(`../../images/${char.name}.png`)
      .then((image) => {
      setCharImage(image.default);
    });
  
  }, [char.name]);
  
  
  return (
    <Card style={{ width: '13rem' }} className="text-center cardBody">
        <Card.Img variant="top"
        className="imgChar"
        src={charImage}
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
