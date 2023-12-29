import React from 'react';

import QuienesSomosData from '../../Data/DataQuienesSomos';
import './quienesSomos.css';

function QuienesSomos() {
    return (
        <section className='quienes' id='quienesSomos'>
            <h5 className='titulo'>Nuestros <strong className='strong'>integrantes</strong></h5>

            <div className='container'>
            {QuienesSomosData.map((dato) => (
            <div className='card'  key={dato.id}>
                <img src={dato.img} className='img' alt='Nosotros' loading='lazy'/>
                <h4 className='nombre'>{dato.nombre}</h4>
                <p className='texto'>{dato.texto}</p>

                        </div>
        ))}
            </div>
        </section>
    );
}

export default QuienesSomos;