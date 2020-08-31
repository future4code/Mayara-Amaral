import React from 'react';
import styled from 'styled-components'

const DivCab = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Alata', sans-serif;    
}
`

export class Cabecalho extends React.Component {    
  
    render(){
      return (
        <DivCab>
            <h1>Astronomia todo dia</h1>
            <p>Todo dia será carregada uma nova imagem do espaço disponibilizada pela NASA.</p>
        </DivCab>
      );
    }
  }
  
  export default Cabecalho;