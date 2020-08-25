import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CardUsuarios = styled.div `
    background-color: papayawhip;
    width: 20%;
    text-align: center;
    border-radius: 20px;
    `
const Titulo = styled.h2 `
    background-color: white;
    margin: 2%;
    border-radius: 20px;
    `
const Usuarios = styled.p `
    color: brown;
    font-weight: bold;
`

export class ListaDeUsuarios extends React.Component {
    state = {
        user: []
    }

//Para pegar os usuários criados   
  
    pegarUsuarios = () => {
        const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
          headers: {
            Authorization: 'mayara-amaral-jackson'
          }
        })
        request.then(response => {
          this.setState({user: response.data})
        }).catch(erro => {
          console.log(erro.data)
        })
    }
  
    componentDidMount = () => {
        this.pegarUsuarios();
    }   
    
    render() {           
        const todosOsUsuarios = this.state.user.map((item) => {
            return <Usuarios key={item.id}>{item.name}</Usuarios>
        })
        
        return (
            <CardUsuarios>
                <Titulo>Usuários</Titulo>
                {todosOsUsuarios}
            </CardUsuarios>
        )
    }
}

export default ListaDeUsuarios; 