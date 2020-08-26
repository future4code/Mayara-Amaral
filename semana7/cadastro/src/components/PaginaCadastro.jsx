import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const BoxCadastro = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  `
const Label = styled.label `
    color: brown;
    font-weight: bold;
`

export class PaginaCadastro extends React.Component {
    render() {
        return (
            <BoxCadastro>
                <Label for="nome">Nome:</Label>
                <input name="nome" onChange={this.props.mudouInputNome}/>
                <Label for="email">Email:</Label>
                <input name="email" type="email" onChange={this.props.mudouInputEmail}/>
            </BoxCadastro>
        )
    }
}

export default PaginaCadastro;