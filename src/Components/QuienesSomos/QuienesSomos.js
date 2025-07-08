import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import QuienesSomosData from '../../Data/DataQuienesSomos';
import './quienesSomos.css';

function QuienesSomos() {
    return (
        <section className='quienes' id='quienesSomos'>
            <h5 className='titulo'>
                Nuestros <strong className='strong'>integrantes</strong>
            </h5>

            {/* Carrusel (mobile y tablet) */}
            <div className='quienes-carrusel'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    className='swiper-container'
                >
                    {QuienesSomosData.map((dato) => (
                        <SwiperSlide key={dato.id}>
                            <div className='card'>
                                <img src={dato.img} className='img' alt='Nosotros' loading='lazy' />
                                <h4 className='nombre'>{dato.nombre}</h4>
                                <p className='texto'>{dato.texto}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grilla (a partir de desktop) */}
            <div className='quienes-grid'>
                {QuienesSomosData.map((dato) => (
                    <div className='card' key={dato.id}>
                        <img src={dato.img} className='img' alt='Nosotros' loading='lazy' />
                        <h4 className='nombre'>{dato.nombre}</h4>
                        <p className='texto'>{dato.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default QuienesSomos;
