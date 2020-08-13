import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const AdicionandoPost = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: plum;  
  `
const Entrada = styled.input `
  border: none;
  border-radius: 20px;
  height: 30px;
  margin: 5px;
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom: 3px solid gray;
  }
`
const Botao = styled.button `
    border: 0 none;
    box-shadow: 0 0 0 0;
    outline: 0;
    border-radius: 20px;
    padding: 10px;
    width: 100px;
    :hover {
      font-weight: bold;
      color: white;
      background-color: purple;
    }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "paulinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/140"
      },
      {
        nome: "labenu",
        fotoUsuario: "https://picsum.photos/50/54",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nome: "mayara",
        fotoUsuario: "https://picsum.photos/50/40",
        fotoPost: "https://picsum.photos/200/130"
      }
    ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",

  }

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({
      posts: novosPosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }
    onChangeInputNome = (event) => {      
      this.setState({ valorInputNome: event.target.value });
    };
  
    onChangeInputFotoUsuario = (event) => {      
      this.setState({ valorInputFotoUsuario: event.target.value });
    };
  
    onChangeInputFotoPost = (event) => {
      this.setState({ valorInputFotoPost: event.target.value });
    };
  
      render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div className={'app-container'}>
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </div>
      )
    })

    return (
      <div>
        {listaDePosts}
        <AdicionandoPost>
          <Entrada        
            value={this.state.valorInputNome}           
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />   
          <Entrada
            value={this.state.valorInputFotoUsuario}           
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"FotoUsuario"}
          />
          <Entrada
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"FotoPost"}
          />
          <Botao onClick={this.adicionaPost}>Adicionar</Botao>
        </AdicionandoPost>
      </div>
      
    );
  }
}

export default App;
