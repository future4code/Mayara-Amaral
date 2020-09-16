import React from 'react'
import { useInputValue, usePostTrip } from '../../hooks/hooks';

const FormCreateTrip = (props) => {
    const [nome, setNome] = useInputValue()
    const [planeta, setPlaneta] = useInputValue()
    const [descricao, setDescricao] = useInputValue()
    const [duracao, setDuracao] = useInputValue()
    const [data, setData] = useInputValue()

    const CreateTrip = () => {
        usePostTrip(nome, planeta, data, descricao, duracao)
    }

    return (
        <div>
            <form>
                <label>{props.nome}</label>
                <input value={nome} onChange={setNome} />

                <label>{props.planeta}</label>
                <input value={planeta} onChange={setPlaneta} />

                <label>{props.descricao}</label>
                <input value={descricao} onChange={setDescricao} />

                <label>{props.duracao}</label>
                <input value={duracao} onChange={setDuracao} />

                <label>{props.data}</label>
                <input value={data} onChange={setData} type="date"/>
            </form>

            <button onClick={CreateTrip}>Cadastrar</button>
        </div>
    )
}

export default FormCreateTrip;