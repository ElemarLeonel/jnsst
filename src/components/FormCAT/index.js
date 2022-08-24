import * as React from 'react';

// Importing Main Components
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

// Importing Date Pickers and Time Pickers
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from '@mui/lab/DatePicker';
import { TimePicker } from '@mui/lab';

// Import with Mask Objects
import InputMask from "react-input-mask";

// Import Icons
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
// import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BadgeIcon from '@mui/icons-material/Badge';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

// Importing Main Styles File
import './index.css';

export default function FormCAT() {
    const [selectedPhone, setSelectedPhone] = React.useState();
    const [selectedCNPJ, setSelectedCNPJ] = React.useState();
    const [selectedTypeCNPJ, setSelectedTypeCNPJ] = React.useState();
    const [selectedCPF, setSelectedCPF] = React.useState();
    const [selectedDateMedicalCertificate, setSelectedDateMedicalCertificate] =
        React.useState();
    const [selectedServiceTime, setSelectedServiceTime] = React.useState();
    const [selectedDateOfAccident, setSelectedDateOfAccident] =
        React.useState();
    const [selectedTimeOfAccident, setSelectedTimeOfAccident] = React.useState();
    const [selectedTimeBeforeOfAccident, setSelectedTimeBeforeOfAccident] =
        React.useState();
    const [selectedCEP, setSelectedCEP] = React.useState();

    let setFormatCNPJMask = React.useState();

    if (selectedTypeCNPJ === 1) {
        setFormatCNPJMask = "99.999.999/9999-99";
    } else if (selectedTypeCNPJ === 2) {
        setFormatCNPJMask = "999.999.999/999-99";
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className="box-form-cat" component="form">

                <Box className="title-cat">
                    <Typography variant="h5" component="h5" color="secondary"
                        fontWeight="bold">
                        Formulário da CAT - Evento S-2210
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


                    <InputMask
                        mask="(99) 99999-9999"
                        value={selectedPhone}
                        disabled={false}
                        maskChar=" "
                        onChange={(e) => setSelectedPhone(e.target.value)}>
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
                    </InputMask>

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
                            sx={{ width: '45%' }}
                            className="dados-empresa"
                            name="CNPJouCAEPF"
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
                        sx={{ width: '45%' }}
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
                        label="Nome Completo do Colaborador"
                        sx={{ width: '45%' }}
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


                    <DatePicker
                        label="Data do Atestado Médico"
                        mask="dd/mm/yyyy"
                        inputFormat="dd/MM/yyyy"
                        value={selectedDateMedicalCertificate}
                        className="dados-atestado-medico"
                        name="dataAtestadoMedico"
                        id="dataAtestadoMedico"
                        renderInput={(props) =>
                            <TextField  {...props} color="secondary"
                                required={true} sx={{ width: '30%' }}/>
                        }
                        onChange={(newValue) => {
                            setSelectedDateMedicalCertificate(newValue)
                        }}>
                    </DatePicker>


                    <TextField id="cidAtestadoMedico"
                        sx={{ width: '30%' }}
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


                    <TimePicker label="Hora do Atendimento"
                        mask="99:99"
                        value={selectedServiceTime}
                        className="dados-atestado-medico"
                        name="horaAtendimentoMedico"
                        id="horaAtendimentoMedico"
                        onChange={(newValue) => {
                            setSelectedServiceTime(newValue)
                        }}
                        renderInput={(props) =>
                            <TextField {...props} color="secondary"
                                required={true} sx={{ width: '30%' }}/>
                        }>
                    </TimePicker>


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


                    <FormControlLabel
                        control={
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
                        Dados do Médico (Atestado Médico)
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


                    <InputMask mask="999.999.999-99"
                        value={selectedCPF}
                        disabled={false}
                        maskChar=" "
                        onChange={(newValue) => {
                            setSelectedCPF(newValue.target.value)
                        }}>
                        <TextField id="cpfMedico"
                            label="CPF do Médico"
                            variant="outlined" color="secondary" required={false}
                            className="dados-medico"
                            name="cpfMedico"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                ),
                            }} />
                    </InputMask>

                </Box>

                <Box className="subtitle-cat">
                    <Typography variant="h6" component="h6" color="secondary">
                        Dados da CAT
                    </Typography>
                </Box>

                <Box className="form-cat">


                    <DatePicker
                        id="dataAcidente"
                        value={selectedDateOfAccident}
                        mask="dd/MM/yyyy"
                        inputFormat="dd/MM/yyyy"
                        label="Data do Acidente"
                        className="dados-acidente"
                        name="dataAcidente"
                        renderInput={(props) =>
                            <TextField  {...props} color="secondary"
                                required={true} />
                        }
                        onChange={(newValue) => {
                            setSelectedDateOfAccident(newValue)
                        }}>
                    </DatePicker>


                    <TimePicker
                        id="horaAcidente"
                        label="Hora do Acidente"
                        value={selectedTimeOfAccident}
                        mask="99:99"
                        className="dados-acidente"
                        name="horaAcidente"
                        renderInput={(props) =>
                            <TextField {...props}
                                color="secondary" required={true} />
                        }
                        onChange={(newValue) => {
                            setSelectedTimeOfAccident(newValue)
                        }}>
                    </TimePicker>


                    <InputMask
                        mask="99:99"
                        value={selectedTimeBeforeOfAccident}
                        disabled={false}
                        maskChar=" "
                        onChange={(newValue) => {
                            setSelectedTimeBeforeOfAccident(newValue.target.value)
                        }}>
                        <TextField id="quantidadeHorasTrabalhadasAcidente"
                            label="Quant. de Horas Trab. Antes do Acidente"
                            color="secondary" required={true}
                            className="dados-acidente"
                            name="quantidadeHorasTrabalhadasAcidente"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                ),
                            }} />
                    </InputMask>


                    <FormControlLabel
                        control={
                            <Switch color="secondary" id="policiaComunicada"
                                name="policiaComunicada" />
                        }
                        label="A polícia foi comunicada?" color="secondary"
                        className="dados-acidente">
                    </FormControlLabel>


                    <FormControlLabel
                        control={
                            <Switch color="secondary" id="houveObito"
                                name="houveObito" />
                        }
                        label="Houve óbito?" color="secondary"
                        className="dados-acidente">
                    </FormControlLabel>

                    <FormControl fullWidth color="secondary" required={true}>
                        <InputLabel id="tipoAmbiente"
                            color="secondary">Tipo do Ambiente</InputLabel>
                        <Select
                            labelId="TipoAmbiente"
                            id="tipoAmbiente"
                            color="secondary"
                            label="Tipo do Ambiente"
                        >
                            <MenuItem value={1}>Estabelecimento do Empregador</MenuItem>
                            <MenuItem value={2}>Estabelecimento de Terceiros</MenuItem>
                            <MenuItem value={3}>Via Pública</MenuItem>
                            <MenuItem value={4}>Área Rural</MenuItem>
                            <MenuItem value={5}>Embarcação</MenuItem>
                            <MenuItem value={6}>Outros</MenuItem>
                        </Select>
                    </FormControl>


                    <TextField id="localAcidente"
                        fullWidth
                        label="Local do Acidente"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="localAcidente"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DescriptionIcon />
                                </InputAdornment>
                            ),
                        }}
                    />


                    <InputMask
                        mask="99999-999"
                        value={selectedCEP}
                        disabled={false}
                        maskChar=" "
                        onChange={(newValue) => {
                            setSelectedCEP(newValue.target.value)
                        }}>
                        <TextField id="cepCidade"
                            label="CEP"
                            color="secondary" required={true}
                            className="dados-acidente"
                            name="cepCidade"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </InputMask>


                    <TextField id="logradouroAcidente"
                        sx={{ width: '75%' }}
                        label="Logradouro"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="logradouroAcidente"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddRoadIcon />
                                </InputAdornment>
                            ),
                        }}
                    />


                    <TextField id="numeroRuaAcidente"
                        sx={{ width: '30%' }}
                        label="Número"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="numeroRuaAcidente"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <NumbersIcon />
                                </InputAdornment>
                            ),
                        }}
                    />


                    <TextField id="bairroAcidente"
                        sx={{ width: '30%' }}
                        label="Bairro"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="bairroAcidente"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HomeIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField id="cidadeAcidente"
                        sx={{ width: '30%' }}
                        label="Cidade"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="cidadeAcidente"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationCityIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField id="parteDoCorpoAtingidaAcidente"
                        label="Parte do Corpo Atingida"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="parteDoCorpoAtingidaAcidente"
                        helperText="Ex: Mão, braço, perna, etc."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmojiPeopleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField id="lateralidadeDoCorpoAtingidaAcidente"
                        label="Lateralidade"
                        variant="outlined" color="secondary" required={true}
                        className="dados-acidente"
                        name="lateralidadeDoCorpoAtingidaAcidente"
                        helperText="Direito, esquerdo, ambos, não aplicável"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MultipleStopIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField fullWidth id="descricaoBreveAcidente"
                        color="secondary" required={true}
                        className="dados-acidente"
                        name="descricaoBreveAcidente"
                        label="Descrição" multiline
                        rows={4} defaultValue="Digite uma descrição breve do acidente"
                    />

                    <Button variant="contained" color="secondary" fullWidth
                        size="large" type="submit">Enviar
                    </Button>

                </Box>
            </Box>
        </LocalizationProvider>
    )
}