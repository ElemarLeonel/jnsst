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


import ImagemMember1 from '../../assets/team/member-1.webp';
import ImagemMember2 from '../../assets/team/member-2.webp';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const equipe = [
    {
        nome: "Flávia Medeiros",
        profissao: "###",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Elemar Leonel",
        profissao: "###",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Odair Calisto",
        profissao: "###",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Dener de Assis",
        profissao: "###",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Cleiso Rafael",
        profissao: "###",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Sônia Lagácio",
        profissao: "###",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Maria Márcia",
        profissao: "###",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Edileusa Lagácio",
        profissao: "###",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Elaine Souza",
        profissao: "###",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    },
    {
        nome: "Dr. Antônio Gomes",
        profissao: "###",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#",
        facebook: "#"
    }
]

export default function Equipe() {
    return (
    <Box className="team" component="section" id="team">
        <Typography className="title-team" variant="h3_title" component="h3">EQUIPE</Typography>
        <Box className="box-row">
        {equipe.map((item) => (
        <Card variant="outlined" className="cards"
            sx={{ boxShadow: 2 }}>
            <CardMedia
                component="img"
                width="300"
                height="300"
                image={item.imagem}
                alt={item.descricao}
            />
            <CardContent>
                <Typography gutterBottom variant="h4_title" component="h4" color="secondary">
                    {item.nome}
                </Typography>
                <Typography variant="p_description" component="p" color="secondary">
                    {item.profissao}
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
