import * as React from 'react';

import {Box, 
        Container, 
        Card, 
        CardActions,
        CardContent, 
        CardMedia, 
        Button, 
        Typography} 
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

export default function Equipe() {
    return (
        <Box className="main-box" component="section">
            <Container maxWidth="lg">
                <Typography variant="h4" component="div" className="title-team">
                    Equipe
                </Typography>
                <Box className="box-row" sx={{
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    gap: 5
                }}>
                    <Card variant="outlined" className="cards"
                        sx={{boxShadow: 2}}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemDener}
                            alt="Foto do Dener"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Dener de Assis
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemCleiso}
                            alt="Foto do Cleiso"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Cleiso Rafael
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemElemar}
                            alt="Foto do Elemar"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Elemar Leonel
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box className="box-row" sx={{
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    gap: 5
                }}>
                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia className="teste"
                            component="img"
                            height="300"
                            image={ImagemFlavia}
                            alt="Foto da Flávia Medeiros"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Flávia Medeiros
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
                            alt="Foto da Sônia Lagácio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Sônia Lagácio
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemOdair}
                            alt="Foto do Odair"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Odair Calisto
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box className="box-row" sx={{
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    gap: 5
                }}>
                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
                            alt="Foto da Maria Márcia"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Maria Márcia
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
                            alt="Foto da Edileusa Lagácio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Edileusa Lagácio
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember2}
                            alt="Foto do Jardel Gomes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Jardel Gomes
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box className="box-row" sx={{
                    flexWrap: {
                        xs: 'wrap',
                        sm: 'nowrap',
                        md: 'nowrap',
                        lg: 'nowrap',
                        xl: 'nowrap'
                    },
                    gap: 5
                }}>
                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
                            alt="Foto da Ana Paula"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Ana Paula
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" className="cards" 
                    sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
                            alt="Foto da Antônio Gomes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Dr. Antônio Gomes
                            </Typography>
                            <Typography variant="body2" color="secondary">
                               Amet eiusmod consequat nulla est est duis est cupidatat. 
                               Minim aliqua commodo proident aute ut elit aliquip esse aliqua 
                               aliqua quis adipisicing qui occaecat. Officia ad nulla sit sunt
                               nisi elit magna ex minim cupidatat. Labore tempor aute labore 
                               cillum reprehenderit. Laboris deserunt aute do minim non sit 
                               laboris aliquip do.
                            </Typography>
                        </CardContent>
                        <CardActions className="buttons-card">
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
