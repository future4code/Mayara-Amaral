import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardAdicionar = styled.div `
    background-color: whitesmoke; 
    text-align: center;
`

const Botao = styled.button `
    border-style: none;
    padding: 0.5%;
    background-color: #FF7200; 
    font-weight: bold;
    color: white;
    margin: 1%;
    border-radius: 15px;
    :hover {
        background-color: white;
        color: #FF7200;
    }
`
const Input = styled.input `    
    padding: 0.5%;
    border-style: none;
    border-radius: 0px;
    border-bottom: 3px solid #AF004B;
    width: 20%;
    :active {
        border-style: none;
    }
`

const TituloForm = styled.h2 `
    padding: 0px;
    margin: 3px;
    color: #FF7200;    
    `


export class CriarPlaylist extends React.Component {

    state = {       
        inputNomePlaylist: ''
    }

    onChangePlayList = (e) => {
        this.setState({inputNomePlaylist: e.target.value})        
    }   

    CriarPlaylist = () => {
        const body = {
            name: this.state.inputNomePlaylist
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body , {
            headers: {
               Authorization: 'mayara-amaral-jackson'
            }
        }).then((res) => {
            this.setState({inputNomePlaylist: ''})
            alert('Playlist adicionada com sucesso!')            
        }).catch((err) => {
            console.log(err)
        })
    }     

    render() {
        return (
          <CardAdicionar>
              <TituloForm>Adicione uma playlist à sua lista de playlists.</TituloForm>
              <Input onChange={this.onChangePlayList} value={this.state.inputNomePlaylist}/>
              <Botao onClick={this.CriarPlaylist}>Adicionar playlist</Botao>
          </CardAdicionar>
        );
  } 
}

export default CriarPlaylist;
