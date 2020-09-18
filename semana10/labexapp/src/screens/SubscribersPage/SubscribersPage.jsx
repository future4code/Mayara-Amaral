import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../../components/Header/Header';
import BaseUrl from '../../const-requests/const-requests';
import { useTrips, useInputValue } from '../../hooks/hooks';
import { RenderSubscribers } from '../../components/RenderSubscribers/RenderSubscribers';
import { useHistory } from 'react-router-dom';
import {goSubscribersPage , goLoginPage} from '../../router/goToPages'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Formulario} from '../../styled/styled'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {SecondTitle} from '../../styled/styled'


function SubscribersPage() {
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

  useEffect(() => {
    if(token){
      goSubscribersPage(history)
    } else {
      goLoginPage(history)
    }
  })

  const trips = useTrips()
  const tripsOptions = trips.map((trip) => {
    return <option value={trip.id} key={trip.id}>{trip.name}</option>
  })

  const [trip, setTrip] = useInputValue()

  const [renderTrip, setRenderTrip] = useState()

  const requestDetails = () => axios.get(`${BaseUrl}/trip/${trip}`, {
    headers: {
      auth: token
    }
  })
  .then(res => {
    console.log(res)
    setRenderTrip(res.data.trip)
  }).catch(err => {
    console.log(err)
  })


  return (
    <ThemeProvider theme={theme}>
      <Header />
        <Container maxWidth='sm'>
          <SecondTitle>Selecione a viagem para ver os detalhes</SecondTitle>
        
          <Formulario>

            <Select value={trip} onChange={setTrip}>
              {tripsOptions}
            </Select>
            <Button variant='contained' color='primary' onClick={() => requestDetails()}>Selecionar viagem</Button>

          </Formulario>

          {renderTrip ? <RenderSubscribers renderTrip={renderTrip} /> : "" }
        </Container>      
    </ThemeProvider>
  );
}

export default SubscribersPage;