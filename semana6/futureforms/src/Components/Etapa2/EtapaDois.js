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

export class EtapaDois extends React.Component {
    render() {
        return (
            <Container>
                <h1>Etapa 2 - Informações Educacionais</h1>
                <label for="curso">Qual o curso?</label>
                <input name="curso" value="" />

                <label for="unidade">Qual a unidade de ensino?</label>
                <input name="unidade" value="" />
                <div>
                    <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
                    <button onClick={this.props.onClickPularEtapa}>Próxima etapa</button>
                </div>
            </Container>                
        )
    }
}
