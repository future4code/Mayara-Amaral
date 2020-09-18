import React from 'react'
import { useInputValue, usePostTrip } from '../../hooks/hooks';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Formulario} from '../../styled/styled'
import TextField from '@material-ui/core/TextField';

const FormCreateTrip = (props) => {
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
    const [planeta, setPlaneta] = useInputValue()
    const [descricao, setDescricao] = useInputValue()
    const [duracao, setDuracao] = useInputValue()
    const [data, setData] = useInputValue()

    const CreateTrip = () => {
        usePostTrip(nome, planeta, data, descricao, duracao)
    }

    return (
        <ThemeProvider theme={theme}>

        <Container maxWidth="sm">
            <Formulario>

                <TextField color='primary' label={props.nome} margin='dense' variant='outlined' value={nome} onChange={setNome} />

                <TextField color='primary' label={props.planeta} margin='dense' variant='outlined' value={planeta} onChange={setPlaneta} />

                <TextField color='primary' label={props.descricao} margin='dense' variant='outlined' value={descricao} onChange={setDescricao} />

                <TextField color='primary' label={props.duracao} margin='dense' variant='outlined' value={duracao} onChange={setDuracao} />
                <br />
                <label>Data da viagem:</label>
                <br />
                <TextField color='primary' margin='dense' variant='outlined' value={data} onChange={setData} type="date"/>

                <Button variant='contained' color='primary' onClick={CreateTrip}>Cadastrar</Button>
            </Formulario>

        </Container>

        </ThemeProvider>
    )
}

export default FormCreateTrip;