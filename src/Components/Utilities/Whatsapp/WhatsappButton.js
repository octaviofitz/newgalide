import React from 'react';
/* import BotonWhatsapp from '/img/Whatsapp.webp';
 */
import './whatsappButton.css';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className='whatsapp'>
      <button onClick={handleClick}>
        <img src='/img/Whatsapp.webp' alt='Botón de WhatsApp' className='icono' />
      </button>
    </div>
  );
};

export default WhatsAppButton;