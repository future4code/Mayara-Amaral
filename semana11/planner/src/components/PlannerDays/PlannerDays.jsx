import React, { useEffect, useState } from 'react'
import {PlannerWeek, PlannerDay, Button} from '../../styled/styled'
import { BaseUrl } from '../../assets/ConstRequest/ConstRequest'
import axios from 'axios'

function PlannerDays() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        axios.get(`${BaseUrl}`)
        .then(res => {setTasks(res.data)})
        .catch(err => {console.log(err)})
    }

    useEffect(() => {
        getTasks()
    }, [tasks])

    const DeleteTask = (id) => {
        axios.delete(`${BaseUrl}/${id}`)
        .then(res => {})
        .catch(err => {console.log(err)})
    }

    return (
        <PlannerWeek>
            {weekDays.map((item) => {
                return <div key={item}>
                            <PlannerDay>{item}</PlannerDay>
                            {tasks.map((tarefa) => {
                                if(tarefa.day === item) {
                                    return <p key={tarefa.id}>
                                                <Button onClick={() => DeleteTask(tarefa.id)}>X</Button>
                                                 {tarefa.text}
                                           </p>
                                }
                            })}
                        </div>
            })}
        </PlannerWeek>
    )
}

export default PlannerDays;