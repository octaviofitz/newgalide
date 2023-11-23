import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './clientes.css'

function Clientes() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <section className='clientes' id='clientes'>
           <h3 className='titulo'>CLIENTES<br></br><mark className='mark'>SATISFECHOS</mark></h3>

           <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="rounded-image" src="/img/Clientes/petba.png" alt="Imagen 1" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/rubicat.webp" alt="Imagen 2" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/vitalcan.webp" alt="Imagen 2" />
        </div>
      </Slider>
    </div>
  
        </section>
    );
}

export default Clientes;