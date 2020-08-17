import React from 'react'
import styled from 'styled-components'

export class EtapaTres extends React.Component {
    render() {
        return (
            <div classname="etapa3">
            <h2>Informações para quem não se formou no ensino superior nem está cursando</h2>
            <label for="porque">Por que você não terminou o curso de graduação?</label>
            <input name="porque" value=""/>
    
            <label for="complementar">Você fez algum curso complementar?</label>        
              <select name="complementar">
                <option>Curso técnico</option>
                <option>Curso de Inglês</option>
                <option>Não fiz curso complementar</option>
              </select>
              <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
              <button onClick={this.props.onClickPularEtapa}>Próxima etapa</button>
          </div>
        )
    }
}