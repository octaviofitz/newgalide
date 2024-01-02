import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import data from '../../Data/data';

import './servicios.css';

function Servicios() {
    return (
        <section className='servicios' id='servicios'>
            <h3 className='titulo'>Nuestros <strong className='strong'>Servicios</strong></h3>
           
            <div className='Container-card'>
            {data.map((dato) => (
            <div className='card' key={dato.id}>

                <img src={dato.img} className='img' alt='Servicios'/>
                <h4 className='titulo'>{dato.titulo}</h4>
                <p className='texto'>{dato.texto}</p>
                <div className='buttonContainer'>
                <a
                href={`https://api.whatsapp.com/send?phone=${dato.cel}&text=${encodeURIComponent(dato.msg)}`}
                target='_blank'
                rel="noreferrer noopener"
              >
                <button className='button'>
                  CONTACTANOS
                </button>
              </a>
                 </div> 

                        </div>
                               ))}
                                 </div>
                 
        </section>
    );
}

export default Servicios;