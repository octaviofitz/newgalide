import React, { useState } from 'react';
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

    return (
        <section className='header'>
<nav className="navbar">
      <div className="logo">Galidé</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li className="menu-item">Nosotros</li>
        <li className="menu-item">Servicios</li>
        <li className="menu-item">Clientes</li>
        <li className="menu-item">Contacto</li>
      </ul>
    </nav>
  



            {/* Navbar */}
          {/*   <Navbar expand="lg" className="navBar" variant='dark'>
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
 */}

        <div className='container'>
            <div>
            <img src='/img/banner/bars.svg' className='bars' />
              <h1 className='titulo'>DESBLOQUEÁ EL POTENCIAL DEL <b className='strong'>HIPERESPACIO DIGITAL</b></h1>
              </div>
            <div>
              <img src='/img/banner/a-circle.svg'  className='circle'/>
            <img src='/img/banner/try.png' className='galaxy' />
            </div>
            </div>
        </section>
    );
}

export default Header;