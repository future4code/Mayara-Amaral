import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import FormAdicionarMusica from './FormAdicionarMusica'

const CardLista = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

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
const BotaoDeletar = styled.button `
    border-style: none;   
    margin: 2px;
    height: 30px;
    background-color: #AF004B; 
    font-weight: bold;
    color: white;    
    border-radius: 15px;
    :hover {
        background-color: white;
        color: #AF004B;
    }
`

const Titulo = styled.h2 `
    color: #AF004B;
 `

export class ListaDePlaylists extends React.Component {
    state = {
        playlists: [{
            name: 'forró'
        }],
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
            <CardLista>
                <Titulo>Lista de Playlists</Titulo>
                {this.state.playlists.map((elemento) => {                    
                    return (
                        <div> 
                            <p key={elemento.id}>{elemento.name}</p>
                            <Botao>Adicionar músicas nessa playlist</Botao>
                            <BotaoDeletar onClick={() => this.delete(elemento.id)}>Deletar playlist</BotaoDeletar>
                            <FormAdicionarMusica idDaPlaylist={elemento.id}/>                          
                        </div>
                    )
                })}            
            </CardLista>
      );
    } 
}

export default ListaDePlaylists;