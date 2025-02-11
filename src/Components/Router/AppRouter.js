import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nosotros from '../Nosotros/Nosotros';
import Servicios from '../Servicios/Servicios';
import Clientes from '../Clientes/Clientes';
import Contacto from '../Contacto/Contacto';
import QuienesSomos from '../QuienesSomos/QuienesSomos';
import WhatsAppButton from '../Utilities/Whatsapp/WhatsappButton';

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
            <Header />
            <main>
            <Nosotros />
            <Servicios />
            <Clientes />
            <QuienesSomos />
            <Contacto />
            </main>
            <Footer />
            <WhatsAppButton phoneNumber='+5491143993437' />
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;