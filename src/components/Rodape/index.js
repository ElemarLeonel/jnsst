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

            <Box className="social-media" color="secondary">
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
                <Typography variant="h4_title" component="h4" color="primary.main"
                fontWeight="bold">
                    OUTROS LINKS
                </Typography>
            </Box>

            <Box className="address-and-links main-box">
                <Box component="aside" className="address">
                    <Typography variant="h5_title" component="h5" 
                    color="primary.main">
                        Quem Somos
                    </Typography>
                    <Typography variant="p_description" component="p" 
                    paragraph={true}
                    color="primary.main" noWrap={false}>
                        A JN foi criada no ano de 2013 para solucionar questões relacionadas
                        a Segurança do Trabalho e Saúde Ocupacional com propósito de
                        assessorar as empresas com dificuldade de atendimento aos requisitos
                        de órgãos fiscalizadores, legislação trabalhista e previdenciária e que
                        tenham interesse em melhorar seu gerenciamento neste segmento,
                        consequentemente promovendo o bem estar de todas as partes envolvidas.
                    </Typography>
                    <Typography variant="h5_title" component="h5" paragraph={true}
                    color="primary.main">
                        Endereço
                    </Typography>
                    <Typography variant="p_description" component="p" 
                    paragraph={true}
                    color="primary.main" noWrap={false}>
                        Av. Presidente Dutra, nº 463, Sala 05, Bairro dos 
                        Pioneiros, Pimenta Bueno - RO.
                    </Typography>
                </Box>

                <Box component="section" className="links main-box">
                    <Typography variant="h5_title" component="h5" 
                    color="primary">
                        Downloads & Acessos
                    </Typography>
                    <ListItemButton component="a" href={FichaEPIComentada}
                    download={true}>
                        <ListItemText primary="Ficha de EPI Comentada"/>
                    </ListItemButton>
                    <ListItemButton component="a" 
                    href="https://bit.ly/cat-s-2210">
                        <ListItemText primary="Formulário de Preenchimento da CAT (Cliente)"/>
                    </ListItemButton>
                    <ListItemButton component="a" 
                    href="#">
                        <ListItemText primary="Formulário de Preenchimento das Requisições (Cliente)"/>
                    </ListItemButton>
                </Box>
            </Box>

            <Box className="credits main-box">
                <Typography component="p_description" variant="p" 
                paragraph={true}
                color="primary.main" fontWeight="bold">
                    Desenvolvido por Elemar Leonel © 2022.
                </Typography>
            </Box>
        </Box>
    )
}