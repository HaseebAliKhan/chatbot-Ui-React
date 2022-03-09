import React from 'react'
import {Modal,Button ,Form,Row,Col,Container} from 'react-bootstrap'
import './Chatbot.css'



function Messages(props){
    
    
    
    return(
      <Container fluid>
{props.speaks === 'bot' &&
<Row>
    <Col sm={11} xs={11} md={10} className='count'>{props.text}</Col>
    <Col sm={1} xs={2} md={1}><Button variant="info">BOT</Button></Col>
  </Row>}
  {
    props.speaks === 'me' &&
  <Row >
    <Col sm={2} xs={2} md={2}><Button variant="info">ME</Button></Col>
    <Col sm={10} xs={10} md={10} className='cunt'>{props.text}</Col>
  </Row>}
    </Container>
    )
}

export default Messages