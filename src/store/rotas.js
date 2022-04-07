import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Requisicoes from '../pages/Requisicoes';
import Cat from '../pages/Cat';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' component={Home} exact />
                <Route path='/requisicoes' component={Requisicoes} />
                <Route path='/cat' component={Cat} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;