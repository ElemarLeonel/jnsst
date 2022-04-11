import React from 'react';
import Rotas from './store/rotas';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Rotas />
    </ThemeProvider>
  );
}

export default App;