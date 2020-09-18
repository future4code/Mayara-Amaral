import React from 'react'
import { Apply, useInputValue } from '../../hooks/hooks';
import { useTrips } from '../../hooks/hooks';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Formulario} from '../../styled/styled'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const FormApply = () => {
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


    const [nome, setNome] = useInputValue()
    const [idade, setIdade] = useInputValue()
    const [porque, setPorque] = useInputValue()
    const [profissao, setProfissao] = useInputValue()
    const [pais, setPais] = useInputValue()
    const [id, setId] = useInputValue()

    const trips = useTrips()
    
    const tripsOptions = trips.map((trip) => {        
        return <option value={trip.id} key={trip.id}>{trip.name}</option>
    }) 
    
    const createApply = () => {
        Apply(nome, idade, porque, profissao, pais, id)
    }

    return (
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm">

            <Formulario>
                <TextField color='primary' label='Nome:' margin='dense' variant='outlined' value={nome} onChange={setNome}/>

                <TextField label='Idade: ' margin='dense' variant='outlined' value={idade} onChange={setIdade}/>

                <TextField label='Porque você quer viajar' margin='dense' variant='outlined' rows='5' value={porque} onChange={setPorque}/>

                <TextField label='Profissão' margin='dense' variant='outlined' value={profissao} onChange={setProfissao}/>

                <TextField label='País de origem:' margin='dense' variant='outlined' value={pais} onChange={setPais}/>
                <br />
                <label>Escolha sua viagem:</label>
                <br />
                <Select variant='outlined' labelWidth='10' value={id} onChange={setId}>
                  {tripsOptions}
                </Select>                
                <Button variant='contained' color='primary' onClick={createApply}>Enviar</Button>
            </Formulario>

          </Container>
        </ThemeProvider>
    )
}

export default FormApply;