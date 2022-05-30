import * as React from 'react';

import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Input,
    IconButton,
    FormControlLabel,
    Switch
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BadgeIcon from '@mui/icons-material/Badge';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

import './index.css';


export default function FormCAT() {
    return (
        <Box className="box-form-cat" component="form">

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

            <Box className="form-cat">
                <TextField id="emailEmpresa" label="Email"
                    variant="outlined" color="secondary" required={true}
                    className="dados-empresa"
                    name="emailEmpresa"
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
                    name="telefoneEmpresa"
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
                    name="CNPJouCAEPF"
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
                    name="razaoSocial"
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
                    name="nomeCompletoColaborador"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                    }} />

                <label htmlFor="icon-button-file" className="dados-empresa">
                    <Input accept="image/*" id="icon-button-file" type="file"
                        color="secondary" name="uploadFichaRegistro" />
                    <IconButton color="secondary"
                        aria-label="upload picture"
                        component="span">
                        <ArticleIcon />
                    </IconButton>
                </label>
            </Box>

            <Box className="subtitle-cat">
                <Typography variant="h6" component="h6" color="secondary">
                    Dados do Atestado Médico
                </Typography>
            </Box>

            <Box className="form-cat">
                <TextField id="dataAtestadoMedico"
                    label="Data do Atestado"
                    variant="outlined" color="secondary" required={true}
                    className="dados-atestado-medico"
                    name="dataAtestadoMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="cidAtestadoMedico"
                    label="CID"
                    variant="outlined" color="secondary" required={true}
                    className="dados-atestado-medico"
                    name="cidAtestadoMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DescriptionIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="horaAtendimentoAtestadoMedico"
                    label="Hora do Atendimento"
                    variant="outlined" color="secondary" required={true}
                    className="dados-atestado-medico"
                    name="horaAtendimentoAtestadoMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <QueryBuilderIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField id="qteDiasAtestadoMedico"
                    label="Quant. de Dias de Afastamento"
                    variant="outlined" color="secondary" required={true}
                    className="dados-atestado-medico"
                    name="qteDiasAtestadoMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DateRangeIcon />
                            </InputAdornment>
                        ),
                    }} />

                <FormControlLabel control={
                    <Switch color="secondary" name="houveInternacao"
                    id="houveInternacao" />
                }
                    label="Houve internação?" color="secondary"
                    className="dados-atestado-medico">
                </FormControlLabel>

                <label htmlFor="icon-button-file" className="dados-empresa">
                    <Input accept="image/*" id="uploadAtestadoMedico" type="file"
                        color="secondary" name="uploadAtestadoMedico" />
                    <IconButton color="secondary"
                        aria-label="upload picture"
                        component="span">
                        <ArticleIcon />
                    </IconButton>
                </label>
            </Box>

            <Box className="subtitle-cat">
                <Typography variant="h6" component="h6" color="secondary">
                    Dados do Médico
                </Typography>
            </Box>

            <Box className="form-cat">
                <TextField id="nomeMedico"
                    label="Nome do Médico"
                    variant="outlined" color="secondary" required={true}
                    className="dados-atestado-medico"
                    name="nomeMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BadgeIcon />
                            </InputAdornment>
                        ),
                    }} />
                <TextField id="crmMedico"
                    label="CRM do Médico"
                    variant="outlined" color="secondary" required={true}
                    className="dados-medico"
                    name="crmMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MedicalInformationIcon />
                            </InputAdornment>
                        ),
                    }} />
                <TextField id="cpfMedico"
                    label="CPF do Médico"
                    variant="outlined" color="secondary" required={true}
                    className="dados-medico"
                    name="cpfMedico"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <NumbersIcon />
                            </InputAdornment>
                        ),
                    }} />
            </Box>

            <Box className="subtitle-cat">
                <Typography variant="h6" component="h6" color="secondary">
                    Dados da CAT
                </Typography>
            </Box>

            <Box className="form-cat">
                <TextField id="dataAcidente"
                    label="Data do Acidente"
                    variant="outlined" color="secondary" required={true}
                    className="dados-acidente"
                    name="dataAcidente"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        ),
                    }} />
                <TextField id="horaAcidente"
                    label="Hora do Acidente"
                    variant="outlined" color="secondary" required={true}
                    className="dados-acidente"
                    name="horaAcidente"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <QueryBuilderIcon />
                            </InputAdornment>
                        ),
                    }} />
                <TextField id="quantidadeHorasTrabalhadasAcidente"
                    label="Quant. de Horas Trab. Antes do Acidente"
                    variant="outlined" color="secondary" required={true}
                    className="dados-acidente"
                    name="quantidadeHorasTrabalhadasAcidente"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <QueryBuilderIcon />
                            </InputAdornment>
                        ),
                    }} />
                <FormControlLabel control={
                    <Switch color="secondary" id="policiaComunicada" 
                    name="policiaComunicada"/>
                }
                    label="A polícia foi comunicada?" color="secondary"
                    className="dados-acidente">
                </FormControlLabel>
                <FormControlLabel control={
                    <Switch color="secondary" id="houveObito" 
                    name="houveObito"/>
                }
                    label="Houve óbito?" color="secondary"
                    className="dados-acidente">
                </FormControlLabel>
            </Box>
        </Box>
    )
}