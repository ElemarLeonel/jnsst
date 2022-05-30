import * as React from 'react';

import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Input, 
    IconButton
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';

import './index.css';


export default function FormCAT() {
    return (
        <Box className="box-form-cat">
            <Box className="title-cat">
                <Typography variant="h5" component="h5" color="secondary"
                    fontWeight="bold">
                    Formulário da CAT
                </Typography>
            </Box>
            <Box className="subtitle-cat">
                <Typography variant="h6" component="h6" color="secondary">
                    Dados da Empresa
                </Typography>
            </Box>
            <Box className="form-cat" component="form">

                <TextField id="emailEmpresa" label="Email"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="telefoneEmpresa" label="Telefone"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CallIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="CNPJouCAEPF" label="CNPJ / CAEPF"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <NumbersIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="razaoSocial" label="Razão Social ou Nome Fazenda"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BusinessIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="nomeCompletoColaborador"
                    label="Nome Completo"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                    }} />

                <label htmlFor="icon-button-file" className="dados-empresa">
                    <Input accept="image/*" id="icon-button-file" type="file" 
                    color="secondary"/> 
                    <IconButton color="secondary" 
                    aria-label="upload picture" 
                    component="span">
                        <ArticleIcon />
                    </IconButton>
                </label>
            </Box>
        </Box>
    )
}