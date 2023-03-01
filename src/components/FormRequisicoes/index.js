import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputMask from "react-input-mask"

import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import Chip from '@mui/material/Chip';
import BadgeIcon from '@mui/icons-material/Badge';
import MapIcon from '@mui/icons-material/Map';
import WorkIcon from '@mui/icons-material/Work';

import Rodape from "../Rodape";

import "./index.css";
import sendRequisition from "../../services/requisicao";

export default function FormRequisicao() {
  const exams = [
    "Glicemia",
    "Hemograma",
    "Audiometria",
    "Eletrocardiograma",
    "Eletroencefalograma",
    "Teste de Romberg",
    "Avaliação Psicossocial",
    "Espirometria"
  ]

  const [selectedCNPJ, setSelectedCNPJ] = React.useState();
  const [selectedTypeCNPJ, setSelectedTypeCNPJ] = React.useState();
  const [selectedGenre, setSelectedGenre] = React.useState();
  const [selectedExam, setSelectedExam] = React.useState();
  const [selectedComplementaryExams, setSelectedComplementaryExams] = React.useState([]);
  const [selectedBornDate, setSelectedBornDate] = React.useState(new Date());
  const [selectOpen, setSelectOpen] = React.useState(false)

  let setFormatCNPJMask = React.useState();

  if (selectedTypeCNPJ === 1) {
    setFormatCNPJMask = "99.999.999/9999-99";
  } else if (selectedTypeCNPJ === 2) {
    setFormatCNPJMask = "999.999.999/999-99";
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);

    formData.append("bornDate", selectedBornDate);

    sendRequisition(formData);
  }  

  function handleSetExam(event) {
    const {
      target: { value },
    } = event;
    setSelectedComplementaryExams(
      typeof value === 'string' ? value.split(',') : value,
    );
    setSelectOpen(false);
  };

  function handleDeleteExam(deletedExam) {
    const updatedExams = selectedComplementaryExams.filter(exam => exam !== deletedExam);
    setSelectedComplementaryExams((updatedExams));
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
          
        <Box className="subtitle-requisition">
              <Typography variant="h6" component="h6" color="secondary">
                   Dados do Colaborador
              </Typography>
        </Box>
        
        <Box className="form-requisition">
            <TextField id="nomeCompletoColaborador"
                      label="Nome Completo do Colaborador"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-colaborador"
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
                     className="dados-colaborador"
                     name="bornDate"
                     id="dataNascimentoColaborador"
                     value={selectedBornDate}
                     onChange={ newValue => setSelectedBornDate(new Date(newValue))}
                     renderInput={(props) =>
                        <TextField  {...props} color="secondary"
                         required={true} sx={{ width: { xs: '100%', sm: '30%' } }} />
                      }>
            </DatePicker>

            <InputMask
                mask="999.999.999-99"
                maskChar=" ">
                <TextField id="cpf" label="CPF"
                    sx={{ width: { xs: '100%', sm: '45%' } }}
                    variant="outlined" color="secondary" required={true}
                    name="cpf"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <NumbersIcon />
                            </InputAdornment>
                        )
                    }} />
            </InputMask>  
            
            <InputMask
                mask="9999999-9"
                maskChar=" ">
                <TextField id="rg" label="RG"
                    sx={{ width: { xs: '100%', sm: '45%' } }}
                    variant="outlined" color="secondary" required={true}
                    name="rg"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <NumbersIcon />
                            </InputAdornment>
                        )
                    }} />
            </InputMask>  
                 
            <FormControl fullWidth color="secondary" required={true}
             sx={{ width: { xs: '100%', sm: '45%' } }}>
                    <InputLabel id="tipoPessoa" color="secondary">
                         Sexo
                    </InputLabel>
                    <Select
                            value={selectedGenre}
                            labelId="tipoPessoa"
                            id="tipoPessoa"
                            color="secondary"
                            label="Sexo"
                            name="genre"
                            onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                         <MenuItem value={"Masculino"}>Masculino</MenuItem>
                         <MenuItem value={"Feminino"}>Feminino</MenuItem>
                    </Select>
            </FormControl>
            
            <TextField id="naturalidade"
                      label="Naturalidade"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-colaborador"
                      name="naturalness"
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                            <MapIcon />
                        </InputAdornment>
                    ),
            }} />

            <TextField id="cbo"
                      label="CBO"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-colaborador"
                      name="cbo"
                      InputProps={{
                      startAdornment: (
                <InputAdornment position="start">
                    <DescriptionIcon />
                </InputAdornment>
                ),
             }} />

            <TextField id="setor"
                      label="Setor"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-colaborador"
                      name="sector"
                      InputProps={{
                      startAdornment: (
                <InputAdornment position="start">
                    <WorkIcon />
                </InputAdornment>
                ),
            }} />

            <TextField id="cargo"
                      label="Cargo"
                      sx={{ width: { xs: '100%', sm: '45%' } }}
                      variant="outlined" color="secondary" required={true}
                      className="dados-colaborador"
                      name="office"
                      InputProps={{
                      startAdornment: (
                <InputAdornment position="start">
                    <BadgeIcon />
                </InputAdornment>
                ),
            }} />

       </Box>

       <Box className="subtitle-requisition">
              <Typography variant="h6" component="h6" color="secondary">
                   Informações do ASO
              </Typography>
        </Box>     
        
        <Box className="form-requisition">
            <FormControl fullWidth color="secondary" required={true}>
                        <InputLabel id="naturezaExame"
                            color="secondary">Tipo de Exame</InputLabel>
                        <Select
                            value={selectedExam}
                            labelId="tipoExame"
                            id="tipoExame"
                            color="secondary"
                            label="Tipo de Exame"
                            name="examType"
                            onChange={(e) => setSelectedExam(e.target.value)}
                        >
                            <MenuItem value={"Admissional"}>Admissional</MenuItem>
                            <MenuItem value={"Demissional"}>Demissional</MenuItem>
                            <MenuItem value={"Mudança de Cargo/Função"}>Mudança de Cargo/Função</MenuItem>
                            <MenuItem value={"Periódico"}>Periódico</MenuItem>
                            <MenuItem value={"Retorno ao Trabalho"}>Retorno ao Trabalho</MenuItem>
                        </Select>
                </FormControl>

                <FormControl fullWidth color="secondary" required={true}>
                        <InputLabel id="exames"
                            color="secondary">Exames Complementares</InputLabel>
                        <Select
                            multiple
                            value={selectedComplementaryExams}
                            labelId="examesComplementares"
                            id="examesComplementares"
                            color="secondary"
                            label="Exames Complementares"
                            name="examsList"
                            onChange={handleSetExam}
                            open={selectOpen}
                            onOpen={() => setSelectOpen(true)}
                        >
                            {exams.map((exam) => (
                                <MenuItem key={exam} value={exam}>{exam}</MenuItem>
                            )
                            )}
                        </Select>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, padding: 1 }}>
                                  {selectedComplementaryExams.map((value) => (
                                    <Chip 
                                        color="secondary"
                                        key={value} label={value}
                                        value={value}
                                        onDelete={() => handleDeleteExam(value)}
                                    />
                                  ))}
                        </Box>
                </FormControl>
        </Box>         
        <Box className="submit-button">
                    <Button variant="contained" color="secondary" fullWidth
                        size="large" type="submit" onClick={handleSubmit}>Enviar
                    </Button>
        </Box>
    </Box>
      <Rodape isPrintable={false} />
    </LocalizationProvider>
  )
}