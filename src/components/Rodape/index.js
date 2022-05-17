import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './index.css';

import InstagramIcon from '@mui/icons-material/Instagram';

export default function Rodape() {
    return (
        <Box component="footer" color="primary.main">

            <Box className="social-media">
                <Typography variant="h6" component="h6" color="secondary">
                    Acompanhe nossas redes sociais
                </Typography>
                <Box className="social-icons">
                    <Button size="medium" color="secondary" variant="contained"
                        startIcon={<InstagramIcon />}>INSTAGRAM</Button>
                </Box>
            </Box>

            <Box className="other-links main-box" component="section">
                <Typography variant="h5" component="h5" color="primary.main">
                    Outros Links
                </Typography>
            </Box>

        </Box>
    )
}