import React from 'react';
import './servicios.css';

import Button from '../Utilities/Button/Button';
import data from '../../Data/data';

function Servicios() {
    return (
        <section className='servicios'>
            <h3 className='titulo'>Nuestros <mark className='mark'>Servicios</mark></h3>
            <div className='Container-card'>
            {data.map((dato) => (
            <div className='card'  key={dato.id}>
                <img src={dato.img} className='img' alt='servicios'/>
                <h4 className='titulo'>{dato.titulo}</h4>
                <p className='texto'>{dato.texto}</p>
                <Button />

                        </div>
        ))}
        </div>

                 
        </section>
    );
}

export default Servicios;