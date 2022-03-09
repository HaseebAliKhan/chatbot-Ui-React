import React from 'react';
import {Card, Button} from 'react-bootstrap'
import img from './send blue.png'


function Cards(props){
  console.log(props.url);
  return(

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.url}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">{props.btn}</Button>
  </Card.Body>
</Card>

)


}



export default Cards