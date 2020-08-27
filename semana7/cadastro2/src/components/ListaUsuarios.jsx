import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BaseUrl} from '../constantes/Constantes'
import {ConfigAxios} from '../constantes/Constantes'

export class ListaUsuario extends React.Component {
    state = {        
      user: [],
    }

    //REQUISIÇÕES
    componentDidMount = () => {
        this.pegarUsuarios();
    }   

    pegarUsuarios = () => {
        const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
          headers: {
            Authorization: 'mayara-amaral-jackson'
          }
        })
        request.then(response => {
          this.setState({user: response.data})
          console.log(this.state.user)
        }).catch(erro => {
          console.log(erro.data)
        })
    } 

    deleteUser = (UserId) => {
        const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${UserId}`, {
            headers: {
                Authorization: 'mayara-amaral-jackson'
            }
        })
        request.then(response => {
            this.pegarUsuarios();            
        }).catch(erro => {
            console.log('deuruim')
        })
    }    

    render() {
        return (
            <div>                
                {this.state.user.map((usuario) => {
                    return (
                    <div>
                        <p key={usuario.id}>{usuario.name}</p>
                        <span><button onClick={() => this.deleteUser(usuario.id)}>Deletar</button></span>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default ListaUsuario;