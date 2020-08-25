import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const BoxCadastro = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  `

export class PaginaCadastro extends React.Component {
    render() {
        return (
            <BoxCadastro>
                <label for="nome">Nome:</label>
                <input name="nome" onChange={this.props.mudouInputNome}/>
                <label for="email">Email:</label>
                <input name="email" type="email" onChange={this.props.mudouInputEmail}/>
            </BoxCadastro>
        )
    }
}

export default PaginaCadastro;