import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nosotros from '../Nosotros/Nosotros';
import Servicios from '../Servicios/Servicios';
import Clientes from '../Clientes/Clientes';
import Contacto from '../Contacto/Contacto';
import QuienesSomos from '../QuienesSomos/QuienesSomos';

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
            <Header />
            <Nosotros />
            <Servicios />
            <Clientes />
            <QuienesSomos />
            <Contacto />
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;