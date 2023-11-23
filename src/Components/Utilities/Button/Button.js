import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './button.css';

function Button() {
    return (
        <div className='buttonContainer'>
            <button className='button'><Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={1500}
          >
            CONTACTANOS
            </Link></button>
        </div>
    );
}

export default Button;