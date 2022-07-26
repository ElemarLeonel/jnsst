import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from '../../styles/theme';

import FormCAT from "../../components/FormCAT";
import Navbar from "../../components/Navbar";

export default function Cat(){
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <FormCAT />
        </ThemeProvider>
    )
}