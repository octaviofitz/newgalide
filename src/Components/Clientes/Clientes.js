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

      <section id='clientes'>

        <article className='clientesMobile'>
           <h3 className='titulo'>CLIENTES<br></br><strong className='strong'>SATISFECHOS</strong></h3>

           <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="rounded-image" src="/img/Clientes/vitalcan.webp" alt="Vitalcan" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/rubicat.webp" alt="Rubicat" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/petba.png" alt="Petba" />
          </div>
        
      </Slider>
    </div>
  
        </article>
      
        <article className='clientesDesktop'>
        <h3 className='titulo'>CLIENTES<strong className='strong'>SATISFECHOS</strong></h3>
        
        <div className='container'>
           
            <div>
              <img src='img/Clientes/vitalcan.webp' alt='Vitalcan' className='imagenes'/>
               </div>

                  <div>
                   <img src='img/Clientes/petba.png' alt='Petba' className='imagenes' />
                      </div>

                     <div>
                       <img src='img/Clientes/rubicat.webp' alt='Rubicat' className='imagenes' />
                       </div>
                  
                  </div>

        </article>
        </section>
        
    );
}

export default Clientes;