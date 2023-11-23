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
      <div className="logo">Galidé</div>
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
            duration={1500}
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
            duration={1800}
          >
            Clientes
            </Link>
        </li>  <li className="menu-item">
        <Link
            to="quienesSomos"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={2000}
          >
            Nosotros
            </Link>
        </li>  <li className="menu-item">
        <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={2500}
          >
            Contacto
            </Link>
        </li>
      </ul>
    </nav>
  
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