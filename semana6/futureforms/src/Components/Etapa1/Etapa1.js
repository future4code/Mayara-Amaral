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


export class EtapaUm extends React.Component {
        state = {
            valorInputNome: "",
            valorInputIdade: "",
            valorInputEmail: "",
            valorSelecionado: ""           
        }

        mudaInputNome = (event) => {
            this.setState({valorInputNome: event.target.value})
        }

        mudaInputIdade = (event) => {
            this.setState({valorInputIdade: event.target.value})
        }

        mudaInputEmail = (event) => {
            this.setState({valorInputEmail: event.target.value})
        }       

        
    render() {      

        return (
        <Container>
            <h1>Etapa 1 - Dados Gerais</h1>

            <label for="nome">Qual o seu nome?</label>
            <input type="text" name="nome" onChange={this.mudaInputNome} value={this.state.valorInputNome}/>

            <label for="nome">Qual a sua idade?</label>
            <input type="number" name="nome"onChange={this.mudaInputIdade} value={this.state.valorInputIdade}/>

            <label for="nome">Qual o seu email?</label>
            <input type="email" name="nome" onChange={this.mudaInputEmail} value={this.state.valorInputEmail}/>

            <label for="escolaridade">Qual o seu grau de escolaridade?</label>
            <select name="escolaridade">
                <option>Ensino médio incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            <div>
                <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
                <button onClick={this.props.onClickPularEtapa}>Próxima etapa</button>
            </div>
      </Container>
        )
    }
}