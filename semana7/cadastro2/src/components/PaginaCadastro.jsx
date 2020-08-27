import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

export class PaginaCadastro extends React.Component {
    createUser = () => {
        const body = {
            name: this.props.nomeValor,
            email: this.props.emailValor
        }

        const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'mayara-amaral-jacskon'
            }
        })
        request.then(response => {
            console.log('foi')
        })
        request.catch(erro => {
            console.log("naofoi")
        })
    }

    render() {
        return (
            <div>
                <span>Nome:</span>
                <input onChange={this.props.onChangeNome}/>
                <span>Email:</span>
                <input onChange={this.props.onChangeEmail}/>
                <button onClick={this.createUser}>Cadastrar Usuário</button>
            </div>
        )
    }
}

export default PaginaCadastro;