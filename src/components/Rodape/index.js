import * as React from 'react';
import { Box, 
        Typography, 
        Button, 
        ListItemButton, 
        ListItemText } from '@mui/material';
import './index.css';

import FichaEPIComentada from '../../assets/downloads/ficha_epi_comentada.xlsx';

import InstagramIcon from '@mui/icons-material/Instagram';

export default function Rodape() {
    return (
        <Box component="footer">

            <Box className="social-media">
                <Typography variant="h6" component="h6" color="secondary">
                    Acompanhe nossas redes sociais
                </Typography>
                <Box className="social-icons">
                    <Button href="https://www.instagram.com/jn_sst_/"
                        size="medium" color="secondary" variant="contained"
                        startIcon={<InstagramIcon />}>
                        Instagram
                    </Button>
                </Box>
            </Box>

            <Box className="other-links main-box" component="section">
                <Typography variant="h5" component="h5" color="primary.main">
                    Outros Links
                </Typography>
            </Box>

            <Box className="address-and-links main-box">
                <Box component="aside" className="address">
                    <Typography variant="h5" component="h5" 
                    color="primary.main">
                        Nosso Endereço
                    </Typography>
                    <Typography variant="p" component="p" paragraph={true}
                    color="primary.main" noWrap={false}>
                        Somos uma empresa séria, dedicada e comprometida com os
                        nossos clientes e buscamos sempre dar o nosso melhor em 
                        todos os nossos trabalhos.
                    </Typography>
                    <Typography variant="h6" component="h6" paragraph={true}
                    color="primary.main" fontWeight="bold">
                        Endereço
                    </Typography>
                    <Typography variant="p" component="p" paragraph={true}
                    color="primary.main" noWrap={true}>
                        Av. Presidente Dutra, nº 463, Sala 05, Bairro dos 
                        Pioneiros, Pimenta Bueno - RO.
                    </Typography>
                </Box>

                <Box component="section" className="links">
                    <Typography variant="h5" component="h5" color="primary">
                        Downloads
                    </Typography>
                    <ListItemButton component="a" href={FichaEPIComentada}
                    download={true}>
                        <ListItemText primary="Ficha de EPI Comentada"/>
                    </ListItemButton>
                </Box>
            </Box>

            <Box className="credits main-box">
                <Typography component="p" variant="p" paragraph={true}
                color="primary.main" fontWeight="bold">
                    Desenvolvido por Elemar Leonel © 2022.
                    Todos os direitos reservados.
                </Typography>
            </Box>
        </Box>
    )
}