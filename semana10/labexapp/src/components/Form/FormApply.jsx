import React from 'react'

const FormApply = (props) => {

    return (
        <div>
            <form>
                <label>{props.nome}</label>
                <input />

                <label>{props.idade}</label>
                <input />

                <label>{props.porque}</label>
                <input />

                <label>{props.profissao}</label>
                <input />

                <label>{props.pais}</label>
                <input />

                <label>{props.viagem}</label>
                <select>
                  {props.opcoes}
                </select>                
            </form>
        </div>
    )
}

export default FormApply;