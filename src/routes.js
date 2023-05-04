import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Requisicoes from './pages/Requisicoes';
import Cat from './pages/Cat';
import Login from './pages/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/requisicoes' element={<Requisicoes />} />
                <Route path='/cat' element={<Cat />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;