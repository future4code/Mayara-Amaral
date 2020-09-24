import Axios from 'axios';
import React from 'react'
import { BaseUrl } from '../../assets/ConstRequest/ConstRequest';
import { useInput, useTasks } from '../../hooks/Request';
import { Menu } from '../../styled/styled';

function PlannerMenu() {
    const [Tasks, setTasks] = useInput()
    const [DayTasks, setDayTasks] = useInput()

    const addTasks = () => {
        const Task = {
            text: Tasks,
            day: DayTasks
        }

        Axios.post(`${BaseUrl}`, Task)
        .then(res => {
            alert('Tarefa adicionada com sucesso')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Menu>
            <input value={Tasks} onChange={setTasks} placeholder="Digite a tarefa" />
            <select value={DayTasks} onChange={setDayTasks}>
                <option defaultValue='Selecione o dia'> Selecione o dia</option>
                <option>Domingo</option>
                <option>Segunda</option>
                <option>Terça</option>
                <option>Quarta</option>
                <option>Quinta</option>
                <option>Sexta</option>
                <option>Sábado</option>

            </select>
            <button onClick={addTasks}>Adicionar Tarefa</button>
        </Menu>
        
    )
}

export default PlannerMenu;