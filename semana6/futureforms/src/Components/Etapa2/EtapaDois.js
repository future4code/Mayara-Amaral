import React from 'react'
import styled from 'styled-components'

export class EtapaDois extends React.Component {
    render() {
        return (
            <div className="etapa2">
                <h1>Informações Educacionais</h1>
                <label for="curso">Qual o curso?</label>
                <input name="curso" value="" />

                <label for="unidade">Qual a unidade de ensino?</label>
                <input name="unidade" value="" />
                <button onClick={this.props.onClickVoltarEtapa}>Etapa Anterior</button>
                <button onClick={this.props.onClickPularEtapa}>Próxima etapa</button>
            </div>                
        )
    }
}
