import axios from 'axios';
import React, { useEffect } from 'react'
import { BaseUrl } from '../../assets/ConstRequest/ConstRequest';
import { useInput } from '../../hooks/Request';
import { Menu , Button, Input, Select} from '../../styled/styled';

function PlannerMenu() {
    const [Tasks, setTasks] = useInput()
    const [DayTasks, setDayTasks] = useInput()

    const addTasks = () => {
        const Task = {
            text: Tasks,
            day: DayTasks
        }
        
        if(Tasks === '') {           
            return  alert('Escreva uma tarefa')
        }

        if(DayTasks === ''){
            return alert('Selecione um dia')
        }

        axios.post(`${BaseUrl}`, Task)
        .then(res => {
            alert('Tarefa adicionada com sucesso')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Menu>
            <Input value={Tasks} onChange={setTasks} placeholder="Digite a tarefa" />
            <Select value={DayTasks} onChange={setDayTasks}>
                <option defaultValue='Selecione o dia'>Selecione o dia</option>
                <option>Domingo</option>
                <option>Segunda</option>
                <option>Terça</option>
                <option>Quarta</option>
                <option>Quinta</option>
                <option>Sexta</option>
                <option>Sábado</option>

            </Select>
            <Button onClick={addTasks}>Adicionar Tarefa</Button>
        </Menu>
        
    )
}

export default PlannerMenu;