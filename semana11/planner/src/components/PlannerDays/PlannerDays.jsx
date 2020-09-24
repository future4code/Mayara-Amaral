import React from 'react'
import {PlannerWeek} from '../../styled/styled'
import { useTasks } from '../../hooks/Request'

function PlannerDays() {
    const tarefas = useTasks()
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return (
        <PlannerWeek>
            {weekDays.map((item) => {
                return <div key={item}>
                            <h2>{item}</h2>
                            {tarefas.map((tarefa) => {
                                if(tarefa.day === item) {
                                    return <p key={tarefa.id}>{tarefa.text}</p>
                                }
                            })}
                        </div>
            })}
        </PlannerWeek>
    )
}

export default PlannerDays;