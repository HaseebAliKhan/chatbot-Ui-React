import React from 'react'
import {Link } from 'react-router-dom'
import { Button,Nav,Navbar,Container } from 'react-bootstrap'
import  './Header.css'

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><Link className="routes"to={'/'} >Shopping Chat Bot</Link></Navbar.Brand>
    <Nav >
      <Nav.Link ><Link className="routes"to={'/shop'} >Shop</Link></Nav.Link>
      <Nav.Link ><Link className="routes" to={'/about'} >About</Link></Nav.Link>
   
    </Nav>
    </Container>
  </Navbar>
        
            // <nav>
            //     <ul>
                   
                       
            //     Header
              

            //     <li>
                    
            //         <Link to={'/shop'} >Shop</Link>
            //         </li>
            //         <li>

            //     <Link to={'/about'} >About</Link>
            //         </li>
              
            
                    
            //     </ul>
            // </nav>
    )
}

export default Header