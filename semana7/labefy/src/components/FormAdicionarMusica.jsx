import React from 'react'
import axios from 'axios';
import styled from 'styled-components'

const CardForm = styled.div `
    border: 2px solid #FF7200;
    box-shadow: 0.5px 0.5px 10px;
    border-radius: 36px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: whitesmoke;
    margin: 20px;
`

const TituloForm = styled.h5 `
    padding: 0px;
    margin: 3px;
    color: #FF7200;    
    `

const Botao = styled.button `
    border-style: none;
    padding: 2%;
    background-color: #FF7200; 
    font-weight: bold;
    color: white;
    margin: 2%;
    border-radius: 5px;
    :hover {
        background-color: white;
        color: #FF7200;
    }
`
const Input = styled.input `
    border-style: none;
    border-radius: 8px;
    height: 25px;
    width: 100%;
`

export class FormAdicionarMusica extends React.Component {
    state = {
        nomeMusica: '',
        nomeArtista: '',
        urlMusica: ''
    }

    onChangeMusica = (e) => {
        this.setState({nomeMusica: e.target.value})
    }

    onChangeArtista = (e) => {
        this.setState({nomeArtista: e.target.value})
    }

    onChangeUrl = (e) => {
        this.setState({urlMusica: e.target.value})
    }

    request = (idDaPlaylist) => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.urlMusica
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idDaPlaylist}/tracks`, body , {
            headers: {
                Authorization: 'mayara-amaral-jackson'
            }
        }).then(res => {
            this.setState({nomeArtista: '', nomeMusica: '', urlMusica: ''})
            console.log('foi')
        }).catch (err => {
            console.log('nãofoi')
        })       
    }
   

  render() {
    return (
      <CardForm>
        <TituloForm>Nome da música:</TituloForm>
        <Input onChange={this.onChangeMusica} value={this.state.nomeMusica} />
        <TituloForm>Nome do artista:</TituloForm>
        <Input onChange={this.onChangeArtista} value={this.state.nomeArtista}/>
        <TituloForm>Url da música:</TituloForm>
        <Input onChange={this.onChangeUrl} value={this.state.urlMusica} />
        <Botao onClick={this.request}>Adicionar</Botao>
      </CardForm>
    );
  } 
}

export default FormAdicionarMusica;
