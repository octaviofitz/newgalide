import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nosotros from '../Nosotros/Nosotros';
import Servicios from '../Servicios/Servicios';
import Clientes from '../Clientes/Clientes';
import Contacto from '../Contacto/Contacto';

function AppRouter() {
    return (
        <div>
            <Header />
            <Nosotros />
            <Servicios />
            <Clientes />
            <Contacto />
            <Footer />
        </div>
    );
}

export default AppRouter;