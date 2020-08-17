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

export class EtapaTres extends React.Component {
    render() {
        return (
            <Container>
                <h1>Etapa 3 - Informações para quem não se formou no ensino superior nem está cursando</h1>
                <label for="porque">Por que você não terminou o curso de graduação?</label>
                <input name="porque" value=""/>
            
                <label for="complementar">Você fez algum curso complementar?</label>        
                  <select name="complementar">
                    <option>Curso técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
                <div>
                  <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
                  <button onClick={this.props.onClickPularEtapa}>Próxima etapa</button>
                </div>  
          </Container>
        )
    }
}