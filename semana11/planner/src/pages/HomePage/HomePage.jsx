import React from 'react'
import { useHistory } from 'react-router-dom';
import { Home, Button } from '../../styled/styled';
import { goPlanner } from '../GoToPages/GoToPages';

function HomePage() {
    const history = useHistory()

    return (
        <Home>

            <h1>Planner</h1>
            <Button onClick={() => goPlanner(history)}>Ir para o planner</Button>

        </Home>
    )
}

export default HomePage;