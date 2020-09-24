import React from 'react'
import { useHistory } from 'react-router-dom';
import { Home } from '../../styled/styled';
import { goPlanner } from '../GoToPages/GoToPages';

function HomePage() {
    const history = useHistory()

    return (
        <Home>

            <h1>Planner</h1>
            <button onClick={() => goPlanner(history)}>Ir para o planner</button>

        </Home>
    )
}

export default HomePage;