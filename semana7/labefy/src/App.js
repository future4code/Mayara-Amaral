import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist'
import ListaDePlaylists from './components/ListaDePlaylists'

const Botao = styled.button `
    border-style: none;   
    margin: 2px;
    height: 30px;
    background-color: #FF7200; 
    font-weight: bold;
    color: white;    
    border-radius: 15px;
    :hover {
        background-color: white;
        color: #FF7200;
    }
`

export class App extends React.Component {
  state = {
    verPlaylist: false    
  }

  MostrarPlaylists = () => {
    this.setState({verPlaylist: !this.state.verPlaylist})
  }

  render() {
    return (
      <div>
        <CriarPlaylist />
        <Botao onClick={this.MostrarPlaylists}>{this.state.verPlaylist ? "Voltar" : "Ver todas as playlists" }</Botao>
          {this.state.verPlaylist ? <ListaDePlaylists /> : ""}        
      </div>
    );
  } 
}

export default App;
