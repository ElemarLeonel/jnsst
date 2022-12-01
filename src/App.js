import React from 'react';
import Rotas from './routes';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
      <>
        <CssBaseline/>
        <Rotas />
        <ToastContainer />
      </>
  );
}