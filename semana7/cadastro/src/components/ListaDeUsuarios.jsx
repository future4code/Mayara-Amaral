import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
            return <p key={item.id}>{item.name}</p>
        })
        
        return (
            <div>
                <h2>Usuários</h2>
                {todosOsUsuarios}
            </div>
        )
    }
}

export default ListaDeUsuarios; 