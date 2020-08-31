import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Cabecalho from './components/Cabecalho'

const Pagina = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
  font-family: 'Alata', sans-serif;
`
const Imagem = styled.img `
  width: 70%;
  height: auto;
  border-radius: 50px;
  box-shadow: 10px 10px 20px;
`

export class App extends React.Component {
  state = {
    imagem: [],
    titulo: "",
    data: "",
    copy: ""
  }
  
  componentDidMount = () => {
    this.pegarPersonagens()
  }
  
  pegarPersonagens = () => {    
    const request = axios.get("https://api.nasa.gov/planetary/apod?api_key=P9zIFHffkvRcdnMQE3NPH4c20DndIhf9sIerra2p")
    request.then((res) => {
      this.setState({imagem: res.data.url, titulo: res.data.title, data: res.data.date, copy: res.data.copyright})
      console.log(this.state)
    })
    request.catch((erro) => {
      console.log('naofoi')
    })
  }
  

  render(){
    return (
      <div>
        <Cabecalho />
        <Pagina>

          <h2>{this.state.titulo}</h2>
          <Imagem src={this.state.imagem}/>
          <h2>{this.state.data}</h2>
          <p>{this.state.copy}</p>
        </Pagina>
      </div>
    );
  }
}

export default App;
