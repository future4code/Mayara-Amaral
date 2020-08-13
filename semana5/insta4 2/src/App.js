import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from ''

const AdicionandoPost = styled.div `
  display: flex;
  flex-direction: column;
  background-color: red;
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
        <input           
            value={this.state.valorInputNome}           
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}           
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"FotoUsuario"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"FotoPost"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </AdicionandoPost>
      </div>
      
    );
  }
}

export default App;
