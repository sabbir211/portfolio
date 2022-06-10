import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import "./Header.css"
const Header = () => {
    return (
        <>
        
          <Navbar   expand="lg" className="mb-3 navbar" fixed='top' variant='dark'>
            <Container >
              <Navbar.Brand href="#" className="text-white" >Sabbir</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#action2" className="text-white">Link</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
  

   {/* <div className='nav d-flex flex-column p-2'>
     <div>
       <p>Ia ma</p>
     </div>
     <div>
       <p>Ia ma</p>
     </div>
     <div>
       <p>Ia ma</p>
     </div>
     <div>
       <p>Ia ma</p>
     </div>
     
   </div> */}
      </>
    );
};

export default Header;