import React, { useEffect, useState } from 'react'
import {Modal,Button ,Form,Row,Col,Container} from 'react-bootstrap'
import './Chatbot.css'
import imgurl from './send blue.png'
import axios from 'axios'
import Messages from './Messages' 
import ReactScroll from 'react-scrollable-feed'
import { v4 as uuid } from 'uuid';
import Cookies from "universal-cookie";


const cookies = new Cookies();


function Chatbot (props){
  const [messages,setMessages] = useState([])
  const [intmsgs,setIntmsgs] = useState('')


  async function df_text_query(textQuery) {
  
      let says = {
        speaks: "me",
        msg: {
          text: {
            text: textQuery
          }
        }
      };
      setMessages((pre)=>{return[...pre,says]})
      const res = await axios.post('http://localhost:5000/api/df_text_query',{text:textQuery, userID: cookies.get('userID')});
      for(let msg of res.data.fulfillmentMessages){
        console.log(JSON.stringify(msg));
         says={
          speaks : 'bot',
          msg:msg
              
            
          
        }
        setMessages((pre)=>{return[...pre,says]})


      }
  }
  async function df_event_query(eventQuery) {

      
      const res = await axios.post('http://localhost:5000/api/df_event_query',{event:eventQuery ,userID: cookies.get('userID')});
      console.log("Data===================>",res.data.fulfillmentMessages)
      for(let msg of res.data.fulfillmentMessages){
        let says={
          speaks : 'bot',
          msg:msg
              
           
          
        }
        setMessages((pre)=>{return[...pre,says]})
        console.log("State1============>",messages);
      }
  }
  useEffect(()=>{
    df_event_query('welcome')
    if(cookies.get('userID') === undefined) {
    cookies.set('userID', uuid(), {path: '/'})
  }
  console.log(cookies.get('userID'));
  }
    ,[])



    const renderOneMsgs = (messages,i)=>{
      if(messages.msg && messages.msg.text && messages.msg.text.text){

        return <Messages key={i} speaks={messages.speaks} text={messages.msg.text.text} />
      }else{
        return<h2>Cards</h2>
      }
    }

  const renderMessages=(stateMessages)=>{
    console.log("State=============>",messages);
    if(stateMessages){
      return stateMessages.map((messages, i)=>{
        return renderOneMsgs(messages,i)
      }

      )
      
    }
    else{
      return <h1>Hello</h1>
  }
  }

  const handleInput=(e)=>{
    setIntmsgs(e.target.value)
  }
  const handleBtn=(e)=>{
    console.log(e);
    if(e.type === 'click'){

      df_text_query(intmsgs)
      setIntmsgs('')
    }else if(e.key === 'Enter'){
      df_text_query(intmsgs)
      setIntmsgs('')
    }
  }
        
        return(
            <div>

            <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shopping Chatbot
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='chat_body'>
      {/* <Messages speaks={messages.speaks} text={messages.msg.text.text} /> */}
        <div className='chat_div'>
      <ReactScroll>


        {renderMessages(messages) }
      </ReactScroll>
        </div>
 
      </Modal.Body>
      <Modal.Footer>
      <Container>
  <Row>
    <Col>
    <Form.Control type="text" className='no_de in' value={intmsgs} autoFocus placeholder='Ask Anything...' onChange={(e)=>{handleInput(e)} } onKeyPress={(e)=>handleBtn(e)}/>
    
   
  
    </Col>
    <Col xs lg="2" className='no_de'>
        <Button type='submit' className='butn'><img src={imgurl} className='img' onClick={(e)=>handleBtn(e)}/></Button>
    
    </Col>
  </Row>
</Container>
   



 

      </Modal.Footer>
    </Modal>
        </div>
            // <div>ChatBOT</div>
        )
    
        }

export default Chatbot