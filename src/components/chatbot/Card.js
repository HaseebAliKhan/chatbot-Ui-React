import React from 'react';

function Card(props){
<div style={{float:'left', paddingRight:30, width: 270}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.payload.fields.image.stringValue} />
  <Card.Body>
    <Card.Title>{props.payload.fields.header.stringValue}</Card.Title>
    <Card.Text>
      {}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</div>


}



export default Card