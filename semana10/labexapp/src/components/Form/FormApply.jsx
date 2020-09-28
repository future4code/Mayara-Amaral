import React from 'react'
import { Apply, useInputValue } from '../../hooks/hooks';
import { useTrips } from '../../hooks/hooks';

const FormApply = () => {
    const [nome, setNome] = useInputValue()
    const [idade, setIdade] = useInputValue()
    const [porque, setPorque] = useInputValue()
    const [profissao, setProfissao] = useInputValue()
    const [pais, setPais] = useInputValue()
    const [id, setId] = useInputValue()

    const trips = useTrips()
    
    const tripsOptions = trips.map((trip) => {        
        return <option value={trip.id} key={trip.id}>{trip.name}</option>
    }) 
    
    const createApply = () => {
        Apply(nome, idade, porque, profissao, pais, id)
    }

    return (
        <div>
            <form>
                <label>Nome:</label>
                <input value={nome} onChange={setNome}/>

                <label>Idade:</label>
                <input value={idade} onChange={setIdade}/>

                <label>Porque você deveria ser escolhido: </label>
                <input value={porque} onChange={setPorque}/>

                <label>Profissão:</label>
                <input value={profissao} onChange={setProfissao}/>

                <label>País de origem:</label>
                <input value={pais} onChange={setPais}/>

                <label>Viagem:</label>
                <select value={id} onChange={setId}>
                  {tripsOptions}
                </select>                
            </form>
            <button onClick={createApply}>Enviar</button>
        </div>
    )
}

export default FormApply;