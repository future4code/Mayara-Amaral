import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
    ]
  }
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
      listaDePosts
    );
  }
}

export default App;
