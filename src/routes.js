import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Requisicoes from '../pages/Requisicoes';
import Cat from '../pages/Cat';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/requisicoes' element={<Requisicoes />} />
                <Route path='/cat' element={<Cat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;