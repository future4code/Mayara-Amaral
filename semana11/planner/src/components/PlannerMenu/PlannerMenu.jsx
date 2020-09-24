import React from 'react'
import { Menu } from '../../styled/styled';

function PlannerMenu() {
    return (
        <Menu>
            <input />
            <select>
                
                <option>Domingo</option>
                <option>Segunda</option>
                <option>Terça</option>
                <option>Quarta</option>
                <option>Quinta</option>
                <option>Sexta</option>
                <option>Sábado</option>

            </select>
            <button>Adicionar Tarefa</button>
        </Menu>
        
    )
}

export default PlannerMenu;