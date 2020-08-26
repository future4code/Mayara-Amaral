import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PaginaCadastro from './components/PaginaCadastro'
import ListaUsuario from './components/ListaUsuarios'
import { BaseUrl } from './constantes/Constantes'
import { ConfigAxios } from './constantes/Constantes'

export class App extends React.Component {
    state = {
      mudarPagina: true,
      nomeBotao: "Ir para a lista de usuários",
      inputNomeValue: "",
      inputEmailValue: "",
    }

    onClickMudaPagina = () => {
      this.setState({mudarPagina: !this.state.mudarPagina, nomeBotao: "Voltar"})
    }

//INPUTS CONTROLADOS

    onChangeNome = (e) => {
      this.setState({inputNomeValue: e.target.value})
      console.log(this.state.inputNomeValue)
    }

    onChangeEmail = (e) => {
      this.setState({inputEmailValue: e.target.value})
      console.log(this.state.inputEmailValue)
    }

    render() {
        return (
            <div>
                {this.state.mudarPagina ? <PaginaCadastro onChangeNome={this.onChangeNome} onChangeEmail={this.onChangeEmail} nomeValor={this.state.inputNomeValue} emailValor={this.state.inputEmailValue} /> : <ListaUsuario />}                
                <button onClick={this.onClickMudaPagina}>{this.state.nomeBotao}</button>                
            </div>
        )
    }
}

export default App;