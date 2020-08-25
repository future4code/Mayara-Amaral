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
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 20px;
`

//Classe

export class App extends React.Component {
  state = {
    InputNome: "",
    InputEmail: "",
    users: ""
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

  //Para pegar os usuários criados

componentDidMount = () => {
  this.pegarUsuarios();
}

pegarUsuarios = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      Authorization: 'mayara-amaral-jackson'
    }
  }).then(response => {
    this.setState({ user: response.data})
  }).catch(erro => {
    console.log('erro')
  })
}

//Funções de capturar input

onChangeInputNome = (event) => {
  this.setState({InputNome: event.target.value})    
}

onChangeInputEmail = (event) => {
  this.setState({InputEmail: event.target.value})
  }

  render() {    
    return (
      <div>
        <button>Ir para a lista de usuários</button>
        <Pagina>        
          <CardCadastro>
            <h1>Cadastro de Usuário</h1>
            <PaginaCadastro 
              mudouInputNome={this.onChangeInputNome}
              mudouInputEmail={this.onChangeInputEmail}
             />
            <button onClick={this.criarUsuario}>Finalizar Cadastro</button>
          </CardCadastro>    
          <ListaDeUsuarios users={this.state.user} />
        </Pagina>
      </div>
    )
  }
}

export default App;
