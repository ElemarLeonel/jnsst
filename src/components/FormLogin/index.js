import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import { setCookie } from "nookies";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Password from "@mui/icons-material/Password";

import "./index.css";
import login from "../../services/login";

export default function FormLogin() {
  
  const [ loginData, setLoginData ] = React.useState({
    email: "",
    password: ""
  })
  const [isDisabled, setDisabled] = React.useState(false);

  function handleChange(event) {
    loginData[event.target.name] = event.target.value;
    setLoginData(loginData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    const user = await login(loginData);
    console.log(user);
    setDisabled(false);
    setCookie(undefined, "jnsst.user", user.data, {
      expires: 60 * 60 * 24
    });
    setCookie(undefined, "jnsstUser.token", user.token, {
      expires: 60 * 60 * 24
    });
  }

  return (
    <Box className="box-form-login" component="form" encType="multipart/form-data"
           id="form">
        <Box className="title-login" >
            <Typography variant="h5" component="h5" color="secondary"
                fontWeight="bold">
                Login
            </Typography>
        </Box>   
        <Box className="form-login">
        
            <TextField id="email"
                       label="Email ou CNPJ"
                       placeholder="Digite seu e-mail ou CNPJ"
                       sx={{ width: { xs: '100%', sm: '45%' } }}
                       variant="outlined" color="secondary" required={true}
                       className="login-data"
                       name="email"
                       onChange={handleChange}
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        ),
              }} />        
            <TextField id="password"
                       label="Senha"
                       placeholder="Digite sua senha"
                       sx={{ width: { xs: '100%', sm: '45%' } }}
                       variant="outlined" color="secondary" required={true}
                       className="login-data"
                       name="password"
                       onChange={handleChange}
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Password />
                          </InputAdornment>
                        ),
                        type: "password"
              }} />        
        </Box>
        <Box className="submit-button">
                <Button variant="contained" color="secondary" fullWidth
                    size="large" type="submit" onClick={handleSubmit} disabled={isDisabled}>
                        Enviar
                </Button>
        </Box>
    </Box>

  )
}