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

import ImagemCleiso from '../../assets/team/cleiso.jpg';
import ImagemDener from '../../assets/team/dener.jpg';
import ImagemElemar from '../../assets/team/elemar.jpg';
import ImagemOdair from '../../assets/team/odair.jpg';
import ImagemFlavia from '../../assets/team/flavia.jpeg';
import ImagemMember1 from '../../assets/team/member-1.png';
import ImagemMember2 from '../../assets/team/member-2.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const equipe = [
    {
        name: "Flávia Medeiros",
        description: "###",
        image: ImagemFlavia,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Elemar Leonel",
        description: "###",
        image: ImagemElemar,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Odair Calisto",
        description: "###",
        image: ImagemOdair,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Dener de Assis",
        description: "###",
        image: ImagemDener,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Cleiso Rafael",
        description: "###",
        image: ImagemCleiso,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Sônia Lagácio",
        description: "###",
        image: ImagemMember1,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Maria Márcia",
        description: "###",
        image: ImagemMember2,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Edileusa Lagácio",
        description: "###",
        image: ImagemMember1,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Elaine Souza",
        description: "###",
        image: ImagemMember2,
        alt_image: "###",
        instagram: "#",
        facebook: "#"
    }
]

export default function Equipe() {
    return (
    <Box className="team" component="section">
        <Typography className="title-team" component="h1">Equipe</Typography>
        <Box className="box-row">
        {equipe.map((item) => (
        <Card variant="outlined" className="cards"
            sx={{ boxShadow: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.alt_image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="secondary">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions className="buttons-card">
                <Button size="medium" 
                href={item.instagram} 
                variant="outlined" 
                color="secondary" 
                startIcon={<InstagramIcon />}>
                    Instagram
                </Button>
                <Button size="medium" 
                href={item.facebook} 
                variant="outlined" 
                color="secondary" 
                startIcon={<FacebookIcon />}>
                    Facebook
                </Button>
            </CardActions>
        </Card>
        ))}
        </Box>
    </Box>
    );
}
