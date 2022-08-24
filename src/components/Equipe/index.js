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


import ImagemMember1 from '../../assets/team/member-1.png';
import ImagemMember2 from '../../assets/team/member-2.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const equipe = [
    {
        nome: "Flávia Medeiros",
        descricao: "###",
        imagem: ImagemMember1,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Elemar Leonel",
        descricao: "###",
        imagem: ImagemMember2,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Odair Calisto",
        descricao: "###",
        imagem: ImagemMember1,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Dener de Assis",
        descricao: "###",
        imagem: ImagemMember2,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Cleiso Rafael",
        descricao: "###",
        imagem: ImagemMember1,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Sônia Lagácio",
        descricao: "###",
        imagem: ImagemMember1,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Maria Márcia",
        descricao: "###",
        imagem: ImagemMember2,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Edileusa Lagácio",
        descricao: "###",
        imagem: ImagemMember1,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Elaine Souza",
        descricao: "###",
        imagem: ImagemMember2,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Dr. Antônio Gomes",
        descricao: "###",
        imagem: ImagemMember2,
        alt_imagem: "###",
        instagram: "#",
        facebook: "#"
    }
]

export default function Equipe() {
    return (
    <Box className="team" component="section" id="team">
        <Typography className="title-team" variant="h4_title" component="h4">EQUIPE</Typography>
        <Box className="box-row">
        {equipe.map((item) => (
        <Card variant="outlined" className="cards"
            sx={{ boxShadow: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={item.imagem}
                alt={item.alt_image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="secondary">
                    {item.nome}
                </Typography>
                <Typography variant="body2" color="secondary">
                    {item.descricao}
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
