// Footer.jsx
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './footer.css';

function Footer() {
  const [launch, setLaunch] = useState(false);

  const handleRocketClick = () => {
    setLaunch(true);
    scroll.scrollToTop({ duration: 600, smooth: true });
    setTimeout(() => setLaunch(false), 1000);
  };

  return (
    <section className="footer">
      <button
        className={`rocket-btn ${launch ? 'launch' : ''}`}
        aria-label="Volver arriba"
        onClick={handleRocketClick}
      >
        <span className="emoji-container">
          <span role="img" aria-label="cohete" className="emoji-rocket">🚀</span>
          {/* {!launch && <span role="img" aria-label="flecha arriba" className="emoji-arrow">↑</span>} */}
        </span>
      </button>

      <h6 className="titulo">
        <strong className="brand">GALIDÉ</strong> - MKT DIGITAL
      </h6>
      <p className="texto">
        <strong>GALIDÉ</strong> - Todos los derechos reservados.
      </p>
    </section>
  );
}

export default Footer;
