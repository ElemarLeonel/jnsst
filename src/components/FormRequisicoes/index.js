import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Input,
  IconButton,
  Button,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputMask from "react-input-mask"

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';import DateRangeIcon from '@mui/icons-material/DateRange';
import BadgeIcon from '@mui/icons-material/Badge';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HomeIcon from '@mui/icons-material/Home';
import WcIcon from '@mui/icons-material/Wc';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

import Rodape from "../Rodape";

import { useState } from 'react';
import "./index.css";

export default function FormRequisicao() {

  const [selectedCNPJ, setSelectedCNPJ] = React.useState();
  const [selectedTypeCNPJ, setSelectedTypeCNPJ] = React.useState();
  const [selectedGenre, setSelectedGenre] = React.useState();
  
  let setFormatCNPJMask = React.useState();

  if (selectedTypeCNPJ === 1) {
    setFormatCNPJMask = "99.999.999/9999-99";
  } else if (selectedTypeCNPJ === 2) {
    setFormatCNPJMask = "999.999.999/999-99";
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="box-form-requisition" component="form" encType="multipart/form-data"
           id="form">

        <Box className="title-requisition">
            <Typography variant="h5" component="h5" color="secondary"
                fontWeight="bold">
                Formulário de Requisições
            </Typography>
        </Box>
        
        <Box className="subtitle-requisition">
            <Typography variant="h6" component="h6" color="secondary">
                Dados da Empresa
            </Typography>
        </Box>

        <Box className="form-requisition">
                    <FormControl fullWidth color="secondary" required={true}>
                        <InputLabel id="tipoPessoa"
                            color="secondary">Tipo (CNPJ ou CAEPF)</InputLabel>
                        <Select
                            value={selectedTypeCNPJ}
                            labelId="tipoPessoa"
                            id="tipoPessoa"
                            color="secondary"
                            label="Tipo (CNPJ ou CAEPF)"
                            onChange={(e) => setSelectedTypeCNPJ(e.target.value)}
                        >
                            <MenuItem value={1}>CNPJ</MenuItem>
                            <MenuItem value={2}>CAEPF</MenuItem>
                        </Select>
                    </FormControl>

                    <InputMask
                        mask={setFormatCNPJMask}
                        value={selectedCNPJ}
                        disabled={false}
                        maskChar=" "
                        onChange={(e) => setSelectedCNPJ(e.target.value)}>
                        <TextField id="CNPJouCAEPF" label="CNPJ ou CAEPF"
                            variant="outlined" color="secondary" required={true}
                            sx={{ width: { xs: '100%', sm: '45%' } }}
                            className="dados-empresa"
                            name="cnpjOrCaepf"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                ),
                            }} />
                    </InputMask>
                    <TextField id="razaoSocial" label="Razão Social ou Nome Fazenda"
                            variant="outlined" color="secondary" required={true}
                            sx={{ width: { xs: '100%', sm: '45%' } }}
                            className="dados-empresa"
                            name="corporateName"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessIcon />
                                    </InputAdornment>
                                ),
                     }} />

         </Box>
          
        <Box className="subtitle-cat">
              <Typography variant="h6" component="h6" color="secondary">
                   Dados do Colaborador
              </Typography>
        </Box>
        
        <Box className="form-requisition">
            <TextField id="nomeCompletoColaborador"
                      label="Nome Completo do Colaborador"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-empresa"
                      name="contributorName"
                      InputProps={{
                      startAdornment: (
                <InputAdornment position="start">
                    <AccountCircleIcon />
                </InputAdornment>
                ),
            }} />

            <DatePicker
                     label="Data de Nascimento"
                     inputFormat="dd/MM/yyyy"
                     className="dados-empresa"
                     name="birthDate"
                     id="dataAtestadoMedico"
                     renderInput={(props) =>
                        <TextField  {...props} color="secondary"
                         required={true} sx={{ width: { xs: '100%', sm: '30%' } }} />
                      }>
            </DatePicker>
            
            <FormControl fullWidth color="secondary" required={true}>
                    
                    <InputLabel id="tipoPessoa" color="secondary">
                         Sexo
                    </InputLabel>
                    <Select
                            value={selectedGenre}
                            labelId="tipoPessoa"
                            id="tipoPessoa"
                            color="secondary"
                            label="Sexo"
                            onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                         <MenuItem value={1}>Masculino</MenuItem>
                         <MenuItem value={2}>Feminino</MenuItem>
                    </Select>
                    </FormControl>

            
       </Box>

      </Box>
      <Rodape />
    </LocalizationProvider>
  )
}