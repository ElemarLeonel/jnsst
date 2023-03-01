import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";

import Navbar from "../../components/Navbar";
import FormRequisicao from "../../components/FormRequisicoes";

const Requisicoes = () =>{
    return (
        <ThemeProvider theme={theme}>
            <Navbar isPrintable={false} />
            <FormRequisicao isPrintable={true} />
        </ThemeProvider>
    )
}

export default Requisicoes;