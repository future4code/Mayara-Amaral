import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #fefeee;
`

export class Fim extends React.Component {
    render() {
        return (
        <Container>
            <h2> Obrigado(a) candidato(a) por ter respondido nosso formulário! </h2>
            <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
        </Container>
        )
    }
}