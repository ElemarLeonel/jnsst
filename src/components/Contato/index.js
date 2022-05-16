import { Box, Container, TextField, Typography, Button } from '@mui/material';
import * as React from 'react';
import './index.css';

export default function Contato() {
    return (
        <Box className="box-main" component="section">
            <Container maxWidth="lg" className="main-container">
                <Box className="title-and-subtitle" component="section">
                    <Typography variant="h4" component="div"
                        className="title-text-contact" color="secondary">
                        Entre em contato
                    </Typography>
                    <Typography variant="h6" component="p"
                        className="subtitle-text-contact" color="secondary">
                        Para mais informações e tirar suas dúvidas, nos envie um email
                        sobre qual é o seu questionamento e em breve entraremos em contato
                        com você!
                    </Typography>
                </Box>
                <Box component="section" className="main-contact">
                    <Box component="section" className="name-and-email">
                        <TextField id="full-name" label="Nome completo" variant="outlined"
                            fullWidth color="secondary" />
                        <TextField id="email" label="Email" variant="outlined"
                            fullWidth color="secondary" />
                    </Box>
                    <TextField id="outlined-multiline-static" label="Mensagem"
                        multiline maxRows={5} fullWidth color="secondary" />
                    <Button variant="contained" color="secondary" maxWidth="md"
                        size="large">Enviar</Button>
                </Box>
            </Container>
        </Box>
    )
}