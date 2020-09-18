import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BaseUrl from "../../const-requests/const-requests"
import { useInputValue } from "../../hooks/hooks";
import { goTripsPage } from "../../router/goToPages";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Lista, SecondTitle} from '../../styled/styled'
import TextField from '@material-ui/core/TextField';
import {Formulario} from '../../styled/styled'


function LoginAdm() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#21333b',
      },
      secondary: {
        main: '#21333B',
      },
    },
  });

  const [email, setEmail] = useInputValue()
  const [password, setPassword] = useInputValue();
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      goTripsPage(history)
    }
  }, [history]);

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(`${BaseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goTripsPage(history);
      })
      .catch((err) => {
        alert('Insira um e-mail e uma senha válida')
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <SecondTitle>Login</SecondTitle>
          <Formulario>
            
            <TextField color='primary' margin='dense' variant='outlined' value={email} onChange={setEmail} placeholder="E-mail" />
            <TextField color='primary' margin='dense' variant='outlined' value={password} onChange={setPassword} placeholder="Senha" type="password" />
            <Button variant='contained' color='primary' onClick={handleLogin}>Fazer Login</Button>

          </Formulario>

      </Container>
    </ThemeProvider>
  );
}

export default LoginAdm;
