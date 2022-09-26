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
import ImagemFlavia from '../../assets/team/flavia.webp';
import ImagemElemar from '../../assets/team/elemar.webp';
import ImagemJonathan from '../../assets/team/jonathan.webp';

import InstagramIcon from '@mui/icons-material/Instagram';

const equipe = [
    {
        nome: "Flávia Medeiros",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemFlavia,
        descricao: "Membro da equipe da JN Saúde e Segurança do Trabalho - Flávia Medeiros",
        instagram: "https://www.instagram.com/flavia.medeiros.505/"
    },
    {
        nome: "Elemar Leonel",
        profissao: "Técnico em Informática",
        imagem: ImagemElemar,
        descricao: "Membro da equipe da JN Saúde e Segurança do Trabalho - Elemar Leonel",
        instagram: "https://www.instagram.com/dev.elemarleonel/"
    },
    {
        nome: "Jonathan Alves",
        profissao: "Eng. de Segurança do Trabalho",
        imagem: ImagemJonathan,
        descricao: "Membro da equipe da JN Saúde e Segurança do Trabalho - Jonathan Alves",
        instagram: "https://www.instagram.com/jonathan_alvespb/"
    },
    {
        nome: "Odair Calisto",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Dener de Assis",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Cleiso Rafael",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Sônia Lagácio",
        profissao: "Técnico em Enfermagem",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Maria Márcia",
        profissao: "Secretária",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Edileusa Lagácio",
        profissao: "Psicólogo(a)",
        imagem: ImagemMember1,
        descricao: "###",
        instagram: "#",
    },
    {
        nome: "Elaine Souza",
        profissao: "Secretária",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#"
    },
    {
        nome: "Dr. Antônio Gomes",
        profissao: "Fonoaudiólogo",
        imagem: ImagemMember2,
        descricao: "###",
        instagram: "#"
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
                width="400"
                height="400"
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
            </CardActions>
        </Card>
        ))}
        </Box>
    </Box>
    );
}
