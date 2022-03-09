import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom"
import About from './pages/About'
import Landing from './pages/Landing'
import Chatbot from '../components/chatbot/Chatbot'
import Header from './Header'
import Shop from './shop/Shop'
import {Button,Row,Col,Container,Image} from 'react-bootstrap'
import './App.css'

import chat from './Chat-PNG.png'

function App(){
    const [modalShow, setModalShow] = useState(true);
    
    return(
        <div>
            <Router>
               <Chatbot show={modalShow} onHide={() => setModalShow(false) }/>

             
      
                    <Header/>
                 

                <Routes>
                    
                    <Route  path='/' element={<Landing/>}/>
                    </Routes>
                    <Routes>

                <Route  path='/about' element={<About/>}/>
                    </Routes>
                    <Routes>

                <Route  path='/shop'element={<Shop/>}/>
                    </Routes>
                   
                
                <button className='foot' onClick={() => setModalShow(true)}>
                    <img src={chat} className='chat '/>
                </button>
            </Router>
        </div>
    )
}

export default App