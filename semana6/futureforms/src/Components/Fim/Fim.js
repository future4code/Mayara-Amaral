import React from 'react'
import styled from 'styled-components'

export class Fim extends React.Component {
    render() {
        return (
        <div>
            <h2> Obrigado(a) candidato(a) por ter respondido nosso formulário! </h2>
            <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
        </div>
        )
    }
}