import React from 'react';
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (
        <section className='header'>

            {/* Navbar */}
            <Navbar expand="lg" className="navBar" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#" className='brand'>GALIDÉ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='lines'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



            <h1 className='titulo'>DESBLOQUEÁ EL POTENCIAL DEL <b className='strong'>HIPERESPACIO DIGITAL</b></h1>
            <img src='/img/banner/try.png' className='galaxy' />
        </section>
    );
}

export default Header;