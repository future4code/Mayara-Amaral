import React from 'react'
import axios from 'axios';
import styled from 'styled-components'

export class FormAdicionarMusica extends React.Component {
  render() {
    return (
      <div>
        <h3>Nome da música:</h3>
        <input placeholder={this.props.idDaPlaylist}/>
        <h3>Nome do artista:</h3>
        <input />
        <h3>Url da música:</h3>
        <input />
      </div>
    );
  } 
}

export default FormAdicionarMusica;
