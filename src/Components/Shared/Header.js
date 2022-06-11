import React,{useState} from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import "./Header.css"
import {Link} from "react-router-dom"
const Header = () => {
  const [show,setShow]=useState(false)
    return (
        <>
        
          <Navbar   expand="lg" className="mb-3 navbar" fixed='top' variant='dark'>
            <Container >
              <Navbar.Toggle 
              data-bs-toggle="offcanvas" 
              aria-controls={`offcanvasNavbar-expand-lg`} 
              onClick={()=>setShow(true)}/>
              <Navbar.Offcanvas
                show={show}
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
                style={{backgroundColor:"rgba(0,0,0,0.1)",color:"white"}}
              >
                <Offcanvas.Header>
                <p className='text-end fs-2' onClick={()=>setShow(false)}>X</p>
                 
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#about" className="text-white">About Me</Nav.Link>
                    <Nav.Link href="#contact" className="text-white">Contact Me</Nav.Link>
                    <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/blogs" className="text-white">Blogs</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    );
};

export default Header;