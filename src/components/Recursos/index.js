import React from 'react';
import {Box,
        Container, 
        Card, 
        CardContent,
        Typography} from '@mui/material';
import './index.css';

import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SendIcon from '@mui/icons-material/Send';
import FilePresentIcon from '@mui/icons-material/FilePresent';


export default function Recursos() {
    return (
        <Box className="box-main" component="section">
            <Container maxWidth="lg">
                <Typography variant="h4" component="div" textAlign="center"
                    sx={{ paddingTop: '50px' }} color="secondary">
                    Recursos
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    marginTop: '50px'
                }}>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <MedicalServicesIcon sx={{ fontSize: 50 }} color="secondary" />
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                Segurança e Medicina do Trabalho
                            </Typography>
                            <Typography variant="body1" color="secondary">
                                A JN oferece <b>assessoria completa</b> em segurança e medicina do trabalho, com programas
                                específicos e abrangentes para a aplicação das 
                                <b><abbr title="Normas Regulamentadoras"> NRs </abbr></b> exigidas pelo
                                Ministério do Trabalho e Emprego.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <SettingsApplicationsIcon sx={{ fontSize: 50 }} color="secondary"/>
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                Avaliações dos Riscos Ambientais
                            </Typography>
                            <Typography variant="body1" color="secondary">
                                A JN oferece <b>serviços especializados</b> para medições, visando avaliar as condições do ambiente de
                                trabalho em relação às características fisiológicas dos trabalhadores. O objetivo é 
                                <b> garantir</b> que as empresas atuem em conformidade com os níveis permitidos nas 
                                <b><abbr title="Normas Regulamentadoras"> NRs</abbr></b>.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <CastForEducationIcon sx={{ fontSize: 50 }} color="secondary"/>
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                Treinamentos
                            </Typography>
                            <Typography variant="body1" color="secondary">
                                Uma das principais ferramentas em prevenção de acidentes e doenças relacionadas ao trabalho é o
                                <b> treinamento</b>. A JN ciente disso, <b>prepara e ministra</b> treinamentos
                                personalizados para cada empresa, considerando o seu <b>ambiente ocupacional</b> e os 
                                <b> riscos específicos</b> de sua planta.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    marginTop: '50px'
                }}>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <MonitorHeartIcon sx={{ fontSize: 50 }} color="secondary"/>
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                Exames Ocupacionais
                            </Typography>
                            <Typography variant="body1" color="secondary">
                                A JN possui <b>consultórios equipados</b> e uma <b>infraestrutura totalmente apropriada</b> para realização de
                                exames médicos e ocupacionais, oferecendo aos seus clientes uma completa avaliação biológica,
                                visando <b>promover</b> a saúde dos trabalhadores no ambiente de trabalho.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <SendIcon sx={{ fontSize: 50 }} color="secondary" />
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                ESocial
                            </Typography>
                            <Typography variant="body1" color="secondary">
                                Possuímos sistema informatizado 100% em nuvem, que já está preparado para envio dos eventos
                                referentes à <b>Comunicado de Acidente de Trabalho (S-2210)</b>, <b>Monitoramento da Saúde do
                                Trabalhador (S-2220)</b> e <b>Condições Ambientais (S-2240)</b>.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{ width: '100rem' }}>
                        <CardContent>
                            <Typography gutterBottom textAlign="center">
                                <FilePresentIcon sx={{ fontSize: 50 }} color="secondary"/>
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}
                                textAlign="center" color="secondary">
                                PGR/GRO
                            </Typography>
                            <Typography variant="body1" color="secondary"> 
                                O <b><abbr title="Programa de Gerenciamento de Riscos"> PGR </abbr></b> 
                                e o <b><abbr title="Gerenciamento de Riscos Ocupacionais"> GRO </abbr></b>
                                representa uma evolução do <b><abbr title="Programa de Prevenção de Riscos Ambientais"> PPRA </abbr></b> 
                                que deverá ser elaborado a partir de <b><em>janeiro de 2022</em></b>. A ideia é
                                ter um <b>material de SST</b> que realmente possa ser usado no dia a dia das empresas, 
                                com <b><em>planos de ação</em></b> a serem cumpridas e adaptado aos mais <b>modernos conceitos</b> de gestão praticados no
                                mundo.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </Container>
        </Box>
    );
}
