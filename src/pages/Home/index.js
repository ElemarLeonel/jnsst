import React from "react";
import Navbar from '../../components/Navbar';
import Carrossel from '../../components/Carrossel';
import Recursos from '../../components/Recursos';

import { ThemeProvider } from '@mui/material';
import theme from '../../styles/theme';

const Home = () =>{
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Carrossel/>
            <Recursos />
        </ThemeProvider>
    )
}

export default Home;