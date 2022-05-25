import * as React from 'react';

import {
    Box,
    Typography,
    FormControl,
    TextField,
} from '@mui/material';

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
            <FormControl className="form-cat" component="section">
                <TextField id="emailEmpresa" label="Email"
                    variant="outlined" color="secondary" required={true} />
                <TextField id="telefoneEmpresa" label="Telefone"
                    variant="outlined" color="secondary" required={true} />
                <TextField id="CNPJouCAEPF" label="CNPJ / CAEPF"
                    variant="outlined" color="secondary" required={true} />
                <TextField id="razaoSocial" label="Razão Social ou Nome Fazenda"
                    variant="outlined" color="secondary" required={true} />
                <TextField id="razaoSocial" label="Teste"
                    variant="outlined" color="secondary" required={true} />
            </FormControl>
        </Box>
    )
}