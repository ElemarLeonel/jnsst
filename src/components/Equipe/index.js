import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ImagemCleiso from '../../assets/team/cleiso.jpg';
import ImagemDener from '../../assets/team/dener.jpg';
import ImagemElemar from '../../assets/team/elemar.jpg';
// import ImagemJonathan from '../../assets/team/jonathan.jpg';
import ImagemMarcelia from '../../assets/team/marcelia.jpg';
import ImagemOdair from '../../assets/team/odair.jpg';
import ImagemMember1 from '../../assets/team/member-1.png'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Equipe() {
    return (
        <Box sx={{ backgroundColor: '#2E7D32' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="div" textAlign="center"
                    sx={{ paddingTop: '50px', color: "#F5F5F5" }}>
                    Equipe
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
                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
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
                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMember1}
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={ImagemMarcelia}
                            alt="Foto do Marcélia"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="secondary">
                                Marcélia Kalke
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{ boxShadow: 2 }}>
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
                        <CardActions>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<InstagramIcon />}>Instagram</Button>
                            <Button size="medium" variant="outlined" color="secondary" startIcon={<FacebookIcon />}>Facebook</Button>
                        </CardActions>
                    </Card>

                </Box>


            </Container>
        </Box>
    );
}
