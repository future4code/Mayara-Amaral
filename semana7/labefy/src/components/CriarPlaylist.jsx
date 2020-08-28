import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
          <div>
              <h2>Adicione uma playlist à sua lista de playlists.</h2>
              <input onChange={this.onChangePlayList} value={this.state.inputNomePlaylist}/>
              <button onClick={this.CriarPlaylist}>Adicionar playlist</button>
          </div>
        );
  } 
}

export default CriarPlaylist;
