import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import PaginaCadastro from './components/PaginaCadastro'
import ListaDeUsuarios from './components/ListaDeUsuarios'

const Pagina = styled.div `
  display: flex;
  justify-content: center;
`
const CardCadastro = styled.div `
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: papayawhip;
  border-radius: 20px;
  padding: 20px;
`
const Titulo = styled.h1 `
    text-align: center;
    background-color: white;
    margin: 2%;
    border-radius: 20px;
  `

const Botao = styled.button `
  background-color: black;
  margin: 20px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  `

//Classe

export class App extends React.Component {
  state = {
    InputNome: "",
    InputEmail: "",
    clicouNoBotao: false,
    nomeBotao: "Ir para a página de usuários"    
  }
  
//Requisições

  //Para criar o usuário

criarUsuario = () => {
  const body = {
    name: this.state.InputNome,
    email: this.state.InputEmail
  }
  
  const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
    headers: {
      Authorization: 'mayara-amaral-jackson'
    }  
  }).then(response => {
    alert('Usuário criado com sucesso!')
  }).catch(erro => {
    alert('Erro ao criar usuário.')
  })
}

//Funções de capturar input

onChangeInputNome = (event) => {
  this.setState({InputNome: event.target.value})    
}

onChangeInputEmail = (event) => {
  this.setState({InputEmail: event.target.value})
  }

onClickBotao = () => {
  this.setState({clicouNoBotao: !this.state.clicouNoBotao})
  console.log(this.state.clicouNoBotao)
}

  render() {
    
    return (
      <div>        
        <Botao onClick={this.onClickBotao}>{this.state.clicouNoBotao ? "Voltar": "Ir para a lista de usuários"}</Botao>
        <Pagina>
          {this.state.clicouNoBotao ? <ListaDeUsuarios/> : <CardCadastro>            
            <Titulo>Cadastro de Usuário</Titulo>
            <PaginaCadastro 
              mudouInputNome={this.onChangeInputNome}
              mudouInputEmail={this.onChangeInputEmail}
             />
            <button onClick={this.criarUsuario}>Finalizar Cadastro</button>
          </CardCadastro> }
        </Pagina>
      </div>
    )
  }
}

export default App;
