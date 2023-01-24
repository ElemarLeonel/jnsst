import React from "react";

import Navbar from '../../components/Navbar';
import Carrossel from '../../components/Carrossel';
import Recursos from '../../components/Recursos';
import Equipe from '../../components/Equipe';
import Contato from '../../components/Contato';
import Clientes from "../../components/Clientes";
import Rodape from '../../components/Rodape';

import { ThemeProvider } from '@mui/material';
import theme from '../../styles/theme';

const Home = () =>{
    return (

        <ThemeProvider theme={theme}>
            <Navbar />
            <Carrossel />
            <Recursos/>
            <Equipe />
            <Clientes />
            <Contato />
            <Rodape/>
        </ThemeProvider>
    )
}

export default Home;