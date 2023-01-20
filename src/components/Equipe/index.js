import * as React from 'react';

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
}
    from '@mui/material';
import './index.css';
import { team as Team } from './team';

import InstagramIcon from '@mui/icons-material/Instagram';

export default function Equipe() {
    return (
    <Box className="team" component="section" id="team">
        <Typography className="title-team" variant="h3_title" component="h3">EQUIPE</Typography>
        <Box className="box-row">
        {Team.map((item) => (
        <Card variant="outlined" className="cards">
            <CardMedia
                className="card-media-image img-responsive"
                component="img"
                width="300"
                height="300"
                image={item.imagem}
                alt={item.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h4_title" component="h4" color="secondary">
                    {item.nome}
                </Typography>
                <Typography variant="p_subtitles" component="h5" color="secondary">
                    {item.profissao}
                </Typography>
                {/* <Typography variant="p_description" component="p" color="secondary"
                    className="bio-description">
                    {item.bio}
                </Typography> */}
            </CardContent>
            <CardActions className="buttons-card">
                <Button size="medium" 
                href={item.instagram}
                fullWidth={true}
                variant="outlined" 
                color="secondary" 
                startIcon={<InstagramIcon />}>
                    Instagram
                </Button>
            </CardActions>
        </Card>
        ))}
        </Box>
    </Box>
    );
}
