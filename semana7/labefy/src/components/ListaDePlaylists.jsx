import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import FormAdicionarMusica from './FormAdicionarMusica'

export class ListaDePlaylists extends React.Component {
    state = {
        playlists: [],
        abrirForm: false
    }

    componentDidMount = () => {
        this.pegarTodasAsPlayLists()
    }

    pegarTodasAsPlayLists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'mayara-amaral-jackson'
            }
        }).then((res) => {
           this.setState({playlists: res.data.result.list})        
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidUpdate = () => {
        this.pegarTodasAsPlayLists()
    }
    
    delete = (elementoId) => {
        const confirm = window.confirm("Tem certeza que deseja deletar essa playlist?")

        if(confirm){

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${elementoId}`, {
                headers: {
                    Authorization: 'mayara-amaral-jackson'
                }
            }).then((res) => {
                alert('Playlist deletada com sucesso')
            }).catch((err) => {
                console.log(err)
            })
        }   
    }

    render() {     
       
        return (
            <div>
                <h2>Lista de Playlists</h2>
                {this.state.playlists.map((elemento) => {
                    return (
                        <div> 
                            <p key={elemento.id}>{elemento.name}</p>
                            <button onClick={this.abrirForm}>Adicionar músicas nessa playlist</button>
                            <button onClick={() => this.delete(elemento.id)}>Deletar playlist</button>
                            <FormAdicionarMusica idDaPlaylist={elemento.id}/>
                        </div>
                    )
                })}            
            </div>
      );
    } 
}

export default ListaDePlaylists;