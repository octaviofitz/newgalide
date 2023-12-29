import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './header.css'

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

    return (
        <section className='header'>
<nav className="navbar">
      <img src='/img/banner/logo.png' className="logo" alt='Logo Galidé'></img>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li className="menu-item">
        <Link
            to="servicios"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Servicios
            </Link>
        </li>
        <li className="menu-item">
        <Link
            to="clientes"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Clientes
            </Link>
        </li>  <li className="menu-item">
        <Link
            to="quienesSomos"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Nosotros
            </Link>
        </li>  <li className="menu-item">
        <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Contacto
            </Link>
        </li>
      </ul>
    </nav>
  
        <div className='container'>
            <div>
            <img src='/img/banner/bars.svg' className='bars'  alt='Barras decorativas'/>
              <h1 className='titulo'>DESBLOQUEÁ EL POTENCIAL DEL <b className='strong'>HIPERESPACIO DIGITAL</b></h1>
              <img src='img/banner/line.svg' className='line' alt='Líneas decorativas' />
              </div>
            <div>
              <img src='/img/banner/a-circle.svg'  className='circle' alt='Circulo giratorio'/>
            <img src='/img/banner/astronaut.webp' className='galaxy' alt='Astronauta Galidé' />
            </div>
            </div>
        </section>
    );
}

export default Header;