import {
    Box,
    Container,
    TextField,
    Typography,
    Button
} from '@mui/material';
import * as React from 'react';
import './index.css';
import axios from 'axios';

export default function Contato() {
    const [campos, setCampos] = React.useState({
        fullname: '',
        email: '',
        title: '',
        message: ''
    });
    
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
        send();
    }

    function send(){
        const formData = new FormData();
        Object.keys(campos).forEach(key => formData.append(key, campos[key]));
        axios.post("http://localhost:5000/email", formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => alert(response.data));
    }

    return (
        <Box className="contact" component="section" id="contact">
            <Container maxWidth="lg" className="main-container">
                <Box className="title-and-subtitle" component="section">
                    <Typography variant="h3_title" component="h3"
                        className="title-text-contact" color="secondary">
                        ENTRE EM CONTATO
                    </Typography>
                    <Typography variant="p_subtitles" component="p"
                        className="subtitle-text-contact" color="secondary">
                        Para mais informações e tirar suas dúvidas, nos envie um email
                        sobre o seu questionamento e em breve entraremos em contato
                        com você.
                    </Typography>
                </Box>
                <Box component="form" className="main-contact" onSubmit={handleFormSubmit}>
                    <Box component="section" className="name-and-email">
                        <TextField id="fullname" label="Nome completo" variant="outlined"
                            fullWidth color="secondary" required onChange={handleInputChange}
                            name="fullname"/>
                        <TextField id="email" label="Email" variant="outlined"
                            fullWidth color="secondary" required onChange={handleInputChange}
                            name="email"/>
                    </Box>
                    <TextField id="title" label="Título" variant="outlined"
                            fullWidth color="secondary" required onChange={handleInputChange}
                            name="title"/>
                    <TextField id="message" label="Mensagem"
                        multiline maxRows={5} fullWidth color="secondary" required
                        onChange={handleInputChange} name="message"/>
                    <Button variant="contained" color="secondary" maxWidth="md"
                        size="large" type="submit">Enviar</Button>
                </Box>
            </Container>
        </Box>
    )
}