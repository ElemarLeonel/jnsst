import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from '../../styles/theme';

import FormLogin from "../../components/FormLogin";
import Navbar from "../../components/Navbar";

export default function Login() {
  return(
    <ThemeProvider theme={theme}>
      <Navbar />
      <FormLogin />
    </ThemeProvider>
  )
}