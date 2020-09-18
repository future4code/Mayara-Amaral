import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useTrips } from '../../hooks/hooks';
import { goLoginPage, goSubscribersPage, goTravelRegistrationPage, goTripsPage } from '../../router/goToPages';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Lista, SecondTitle} from '../../styled/styled'

function TripsPage() {
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

  const token = window.localStorage.getItem("token")
  const history = useHistory()
  const trips = useTrips()

  useEffect(() => {
    if(token) {
      goTripsPage(history)
    } else {
      goLoginPage(history)
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth='sm'>
        <SecondTitle>Lista de viagens</SecondTitle>
        <Lista>
          {trips.map((item) => {
            return <p key={item.id}>{item.name}</p>
          })}
          <Button variant='contained' margin='small' color='primary' onClick={() => goTravelRegistrationPage(history)}>Criar novas viagens</Button>
          <Button variant='contained' color='primary' onClick={() => goSubscribersPage(history)}>Verificar inscritos</Button>
        </Lista>

      </Container>
    </ThemeProvider>
  );
}

export default TripsPage;