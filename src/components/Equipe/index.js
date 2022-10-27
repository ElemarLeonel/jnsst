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

import ImagemFlavia from '../../assets/team/flavia.webp';
import ImagemElemar from '../../assets/team/elemar.webp';
import ImagemJonathan from '../../assets/team/jonathan.webp';
import ImagemCleiso from '../../assets/team/cleiso.webp';
import ImagemJardel from '../../assets/team/jardel.webp';
import ImagemSonia from '../../assets/team/sonia.webp';
import ImagemMarcia from '../../assets/team/marcia.webp';
import ImagemEdileusa from '../../assets/team/edileusa.webp';
import ImagemElaine from '../../assets/team/elaine.webp';
import ImagemDener from '../../assets/team/dener.webp';
import ImagemOdair from '../../assets/team/odair.webp';
import ImagemDrAna from '../../assets/team/ana_claudia.webp';
import ImagemDrFabricio from '../../assets/team/fabricio.webp';
import ImagemDrThaina from '../../assets/team/thaina.webp';

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
        imagem: ImagemOdair,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Odair Calisto",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Dener de Assis",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemDener,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Dener de Assis",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Cleiso Rafael",
        profissao: "Eng. de Segurança do Trabalho",
        imagem: ImagemCleiso,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Cleiso Rafael",
        bio: "###",
        instagram: "https://www.instagram.com/engcleisorafael/"
    },
    {
        nome: "Jardel Gomes Ferreira",
        profissao: "Técnico(a) em Segurança do Trabalho",
        imagem: ImagemJardel,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Jardel Gomes Ferreira",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Sônia Lagácio",
        profissao: "Psicólogo(a)",
        imagem: ImagemSonia,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Sônia Lagácio",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Maria Márcia",
        profissao: "Secretária",
        imagem: ImagemMarcia,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Maria Márcia",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Edileusa Lagácio",
        profissao: "Psicólogo(a)",
        imagem: ImagemEdileusa,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Edileusa Lagácio",
        bio: "###",
        instagram: "#",
    },
    {
        nome: "Elaine Souza",
        profissao: "Secretária",
        imagem: ImagemElaine,
        alt: "Membro da equipe da JN Saúde e Segurança do Trabalho - Elaine Souza",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Drª. Ana Cláudia",
        profissao: "Médico(a)",
        imagem: ImagemDrAna,
        alt: "Membro da equipe médica da JN Saúde e Segurança do Trabalho - Ana Cláudia Tribulato da Cunha Castro",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Dr. Fabrício Reis",
        profissao: "Médico(a)",
        imagem: ImagemDrFabricio,
        alt: "Membro da equipe médica da JN Saúde e Segurança do Trabalho - Fabrício Reis do Nascimento",
        bio: "###",
        instagram: "#"
    },
    {
        nome: "Drª. Thainá Fuzari",
        profissao: "Médico(a)",
        imagem: ImagemDrThaina,
        alt: "Membro da equipe médica da JN Saúde e Segurança do Trabalho - Thainá Fuzari Borges Castro",
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
