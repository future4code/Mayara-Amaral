import React from 'react';
import './App.css';
import { EtapaUm } from './Components/Etapa1/Etapa1'
import { EtapaDois } from './Components/Etapa2/EtapaDois'
import { EtapaTres } from './Components/Etapa3/EtapaTres'
import { Fim } from './Components/Fim/Fim'

class App extends React.Component {
  state = {
    etapa: 1
  }

  onClickPular = () => {
    this.setState({
      etapa: this.state.etapa + 1      
    })
  }

  onClickVoltar = () => {
    this.setState({
      etapa: this.state.etapa - 1      
    })
  }

  render() {
    const paginaRenderizada = () => {
     if(this.state.etapa == 1) {
       return  <EtapaUm onClickPularEtapa={this.onClickPular} onClickVoltarEtapa={this.onClickVoltar}/>
     } else if(this.state.etapa == 2) {
      return <EtapaDois onClickPularEtapa={this.onClickPular} onClickVoltarEtapa={this.onClickVoltar}/>
     } else if (this.state.etapa == 3) {
       return <EtapaTres onClickPularEtapa={this.onClickPular} onClickVoltarEtapa={this.onClickVoltar}/>
     } else {
      return <Fim onClickPularEtapa={this.onClickPular} onClickVoltarEtapa={this.onClickVoltar}/>
     }
       
    }

    return (
      <div>
        <div>{paginaRenderizada()}</div> 
      </div>
    );
  }
}

export default App;
