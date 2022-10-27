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
import ImagemCleiso from '../../assets/team/cleiso.webp';

import InstagramIcon from '@mui/icons-material/Instagram';

const equipe = [
    {
        nome: "Flávia Medeiros",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemFlavia,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Flávia Medeiros",
        bio: "###",
        instagram: "https://www.instagram.com/flavia.medeiros.505/"
    },
    {
        nome: "Elemar Leonel",
        profissao: "Técnico em Informática",
        imagem: ImagemElemar,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Elemar Leonel",
        bio: "Graduado em Sistemas de Informação pela UNESC, atuando no Núcleo de Transmissão ao eSocial, realizando os envios dos eventos e prestando suporte técnico na área de informática.",
        instagram: "https://www.instagram.com/dev.elemarleonel/"
    },
    {
        nome: "Jonathan Alves",
        profissao: "Eng. de Segurança do Trabalho",
        imagem: ImagemJonathan,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Jonathan Alves",
        bio: "###",
        instagram: "https://www.instagram.com/jonathan_alvespb/"
    },
    {
        nome: "Odair Calisto",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemMember1,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Odair Calisto",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Dener de Assis",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemMember2,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Dener de Assis",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Cleiso Rafael",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemCleiso,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Cleiso Rafael",
        bio: "###",
        instagram: "https://www.instagram.com/engcleisorafael/"
    },
    {
        nome: "Sônia Lagácio",
        profissao: "Psicólogo(a)",
        imagem: ImagemMember1,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Sônia Lagácio",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Maria Márcia",
        profissao: "Secretária",
        imagem: ImagemMember2,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Maria Márcia",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Edileusa Lagácio",
        profissao: "Psicólogo(a)",
        imagem: ImagemMember1,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Edileusa Lagácio",
        bio: "###",
        instagram: "#",
    },
    {
        nome: "Elaine Souza",
        profissao: "Secretária",
        imagem: ImagemMember2,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Elaine Souza",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Dr. Antônio Gomes",
        profissao: "Fonoaudiólogo",
        imagem: ImagemMember2,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Antônio Gomes",
        bio: "###",
        instagram: "#"
    }
]

export default function Equipe() {
    return (
    <Box className="team" component="section" id="team">
        <Typography className="title-team" variant="h3_title" component="h3">EQUIPE</Typography>
        <Box className="box-row">
        {equipe.map((item) => (
        <Card variant="outlined" className="cards">
            <CardMedia
                className="card-media-image"
                component="img"
                width="400"
                height="400"
                image={item.imagem}
                alt={item.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h4_title" component="h4" color="secondary">
                    {item.nome}
                </Typography>
                <Typography variant="h5_title" component="h5" color="secondary">
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
