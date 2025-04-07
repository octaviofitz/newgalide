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
           <h4 className='titulo'>CLIENTES<strong className='strong'>SATISFECHOS</strong></h4>

           <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="rounded-image" src="/img/Clientes/vitalcan.webp" alt="Vitalcan" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/rubicat.webp" alt="Rubicat" />
        </div>
        <div>
          <img className="rounded-image" src="/img/Clientes/petba.webp" alt="Petba" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Marynor.webp" alt="Marynor" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Suzuki.webp" alt="Suzuki" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Stonecat.webp" alt="Stonecat" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Elepants.webp" alt="Elepants" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/FeriaDelLibro.webp" alt="FeriaDelLibro" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Taverniti.webp" alt="Taverniti" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/FletPack.webp" alt="FletPack" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Nutrip.webp" alt="Nutrip" />
          </div>
         {/*  <div>
          <img className="rounded-image" src="/img/Clientes/Instituto.webp" alt="Instituto" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/CHR.webp" alt="Center for Human Reproduction" />
          </div>
          <div>
          <img className="rounded-image" src="/img/Clientes/Soles.webp" alt="Soles" />
          </div> */}
        
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
                   <img src='img/Clientes/petba.webp' alt='Petba' className='imagenes' />
                      </div>

                     <div>
                       <img src='img/Clientes/rubicat.webp' alt='Rubicat' className='imagenes' />
                         </div>

                         <div>
                        <img src="/img/Clientes/Marynor.webp" alt="Marynor" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Suzuki.webp" alt="Suzuki" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Stonecat.webp" alt="Stonecat" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Elepants.webp" alt="Elepants" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/FeriaDelLibro.webp" alt="Feria del Libro" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Taverniti.webp" alt="Taverniti" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Fletpack.webp" alt="Fletpack" className='imagenes'/>
                         </div>
                         
                         <div>
                        <img src="/img/Clientes/Nutrip.webp" alt="Nutrip" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Instituto.webp" alt="Instituto" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/CHR.webp" alt="Center for Human Reproduction" className='imagenes'/>
                         </div>

                         <div>
                        <img src="/img/Clientes/Soles.webp" alt="Soles" className='imagenes'/>
                         </div>
                  
                  </div>

        </article>
        </section>
        
    );
}

export default Clientes;